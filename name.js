// Cloudflare Pages Function: sirve los PDFs alojados como GitHub Release
// pero sin forzar la descarga, para que el visor los pueda mostrar en pantalla.
//
// CÓMO FUNCIONA (importante para entender el resto del archivo):
// El visor (PDF.js) pide el documento en TROZOS pequeños ("Range"), para no tener
// que descargar el archivo completo antes de mostrar algo. Para que esos trozos
// lleguen rápido desde el primer momento (incluso con un documento gigante, como
// el manual de 176 MB, que si no nunca terminaba de activarse a tiempo), cada
// pedido con "Range" se reenvía DIRECTO a GitHub — igual de rápido que si no
// existiera esta función en el medio.
//
// Aparte, y SIN que la persona tenga que esperarlo, en segundo plano se baja el
// archivo COMPLETO una sola vez y se guarda en la caché de Cloudflare. Una vez
// guardado, Cloudflare mismo resuelve cualquier pedido "Range" futuro cortando esa
// copia ya guardada (cache.match entiende ese header), sin volver a tocar GitHub
// en absoluto. Así: el primer documento se activa rápido (trozos chicos, directo a
// GitHub) y, pasado un rato, TODO (ese documento y los que vengan después) se sirve
// desde la caché de Cloudflare, instantáneo.
const REPO = 'gloriaaquijeperez/frioteam-aula-tecnica';
const TAG = 'materiales-v1';

// Mientras este "worker" sigue caliente (unos minutos; lo decide Cloudflare, no
// nosotros), recordamos aquí si YA hay una copia completa de un archivo bajándose
// hacia la caché, para no lanzar dos descargas completas en paralelo del mismo
// archivo.
const inFlight = new Map();

function buildHeaders(name, upstreamResp){
  const headers = new Headers();
  // Forzamos siempre 'application/pdf': GitHub entrega los adjuntos de Release como
  // 'application/octet-stream' (binario genérico), y con eso Chrome no activa su
  // visor de PDF integrado dentro del iframe, solo descarga el archivo.
  headers.set('Content-Type', 'application/pdf');
  headers.set('Content-Disposition', 'inline; filename="' + name + '"');
  headers.set('Accept-Ranges', 'bytes');
  // 30 días: estos materiales casi no cambian, y si se reemplaza alguno basta con
  // subir un nuevo Release o purgar la caché de Cloudflare.
  headers.set('Cache-Control', 'public, max-age=2592000');
  const len = upstreamResp.headers.get('Content-Length');
  if (len) headers.set('Content-Length', len);
  return headers;
}

// Baja el archivo COMPLETO (sin Range) y lo deja guardado en la caché de Cloudflare,
// una sola vez por archivo, sin bloquear la respuesta que ya se le dio a la persona.
function ensureFullFileCached(name, upstream, cacheKeyRequest, cache, waitUntil){
  if (inFlight.has(name)) return;
  const job = (async () => {
    const upstreamResp = await fetch(upstream, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (FrioteamAulaTecnica)' },
    });
    if (!upstreamResp.ok) return;
    const headers = buildHeaders(name, upstreamResp);
    const full = new Response(upstreamResp.body, { status: 200, headers });
    await cache.put(cacheKeyRequest, full);
  })().catch(() => {});
  inFlight.set(name, job);
  waitUntil(job.finally(() => inFlight.delete(name)));
}

export async function onRequestGet({ params, request, waitUntil }) {
  const name = params.name;
  if (!name) return new Response('Falta el nombre del archivo.', { status: 400 });

  const cache = caches.default;
  // Clave de caché sin query string (ignoramos cosas como "?p=13"), para que todos
  // los pedidos de un mismo archivo compartan la misma copia guardada.
  const cacheUrl = new URL(request.url);
  cacheUrl.search = '';
  const cacheKeyRequest = new Request(cacheUrl.toString());
  const range = request.headers.get('Range');

  // 1) Si ya tenemos el archivo completo guardado, Cloudflare resuelve el pedido de
  // una (incluyendo si el navegador pidió un "Range": cache.match entiende ese
  // header y devuelve el trozo correcto), sin ir a buscarlo de nuevo a GitHub.
  const matchHeaders = new Headers();
  if (range) matchHeaders.set('Range', range);
  const cached = await cache.match(new Request(cacheUrl.toString(), { headers: matchHeaders }));
  if (cached) {
    const resp = new Response(cached.body, cached);
    resp.headers.set('Access-Control-Allow-Origin', '*');
    return resp;
  }

  const upstream = `https://github.com/${REPO}/releases/download/${TAG}/${encodeURIComponent(name)}`;

  // 2) Todavía no está en caché. Si el navegador pidió un trozo concreto ("Range",
  // lo normal con PDF.js), lo reenviamos DIRECTO a GitHub: así el documento se
  // puede activar rápido desde el primer momento, sin esperar a que se baje
  // completo. De paso, dejamos encaminada (en segundo plano) la descarga completa
  // para que las próximas veces sea instantáneo.
  if (range) {
    ensureFullFileCached(name, upstream, cacheKeyRequest, cache, waitUntil);
    let upstreamResp;
    try {
      upstreamResp = await fetch(upstream, {
        redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (FrioteamAulaTecnica)', Range: range },
      });
    } catch (e) {
      return new Response('No se pudo contactar a GitHub.', { status: 502 });
    }
    if (!upstreamResp.ok && upstreamResp.status !== 206) {
      return new Response('No se encontró el archivo en el Release de GitHub: ' + name, {
        status: upstreamResp.status,
      });
    }
    const headers = buildHeaders(name, upstreamResp);
    const contentRange = upstreamResp.headers.get('Content-Range');
    if (contentRange) headers.set('Content-Range', contentRange);
    const resp = new Response(upstreamResp.body, { status: upstreamResp.status, headers });
    resp.headers.set('Access-Control-Allow-Origin', '*');
    return resp;
  }

  // 3) Pedido del archivo completo sin Range (por ejemplo, "Descargar PDF" o el
  // visor clásico la primera vez): igual que antes, se guarda una copia entera en
  // caché y se devuelve de una, evitando descargas duplicadas en paralelo.
  if (inFlight.has(name)) {
    await inFlight.get(name).catch(() => {});
    const cachedAfter = await cache.match(cacheKeyRequest);
    if (cachedAfter) {
      const resp = new Response(cachedAfter.body, cachedAfter);
      resp.headers.set('Access-Control-Allow-Origin', '*');
      return resp;
    }
  }

  let upstreamResp;
  try {
    upstreamResp = await fetch(upstream, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (FrioteamAulaTecnica)' },
    });
  } catch (e) {
    return new Response('No se pudo contactar a GitHub.', { status: 502 });
  }
  if (!upstreamResp.ok) {
    return new Response('No se encontró el archivo en el Release de GitHub: ' + name, {
      status: upstreamResp.status,
    });
  }

  const headers = buildHeaders(name, upstreamResp);
  // Clonamos ANTES de leer nada: una copia se guarda en caché (en segundo plano) y
  // la otra se devuelve ya mismo.
  const fullResponse = new Response(upstreamResp.body, { status: 200, headers });
  const putPromise = cache.put(cacheKeyRequest, fullResponse.clone());
  inFlight.set(name, putPromise);
  waitUntil(putPromise.catch(() => {}).finally(() => inFlight.delete(name)));

  const resp = new Response(fullResponse.body, fullResponse);
  resp.headers.set('Access-Control-Allow-Origin', '*');
  return resp;
}
