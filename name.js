// Cloudflare Pages Function: sirve los PDFs alojados como GitHub Release
// pero sin forzar la descarga, para que el visor los pueda mostrar en pantalla.
//
// IMPORTANTE sobre rendimiento: el visor (PDF.js) pide el documento EN TROZOS
// pequeños (decenas o cientos de pedidos "Range" para un PDF grande, es su forma
// normal de trabajar). Antes, cada uno de esos trozos iba directo a GitHub, con
// su propio salto de redirección — con un documento de cientos de páginas eso
// significa cientos de viajes a GitHub, y se vuelve larguísimo de cargar.
//
// Ahora: la PRIMERA vez que alguien pide un archivo, lo bajamos COMPLETO una sola
// vez y lo guardamos en la caché de Cloudflare (cache.put). De ahí en adelante,
// Cloudflare mismo responde cada pedido "Range" cortando el archivo ya guardado
// (cache.match entiende el header Range y devuelve el trozo correcto), sin volver
// a tocar GitHub. Así solo hay UNA descarga lenta por archivo (la primera vez,
// para cualquier persona), y todo lo demás es rápido.
const REPO = 'gloriaaquijeperez/frioteam-aula-tecnica';
const TAG = 'materiales-v1';

// Mientras este "worker" sigue caliente (unos minutos; lo decide Cloudflare, no
// nosotros), recordamos aquí si YA hay una descarga en curso guardándose en caché
// para un archivo, para que dos pedidos de trozos distintos del MISMO documento que
// lleguen casi juntos (normal al abrir un PDF grande) no disparen dos descargas
// completas en paralelo: el segundo espera a que la primera termine de guardarse y
// lee su PROPIA copia desde la caché (nunca comparten el mismo cuerpo de respuesta,
// que solo se puede leer una vez).
const inFlight = new Map();

export async function onRequestGet({ params, request, waitUntil }) {
  const name = params.name;
  if (!name) return new Response('Falta el nombre del archivo.', { status: 400 });

  const cache = caches.default;
  // Clave de caché sin query string (ignoramos cosas como "?p=13"), para que todos
  // los pedidos de un mismo archivo compartan la misma copia guardada.
  const cacheUrl = new URL(request.url);
  cacheUrl.search = '';
  const range = request.headers.get('Range');
  const matchHeaders = new Headers();
  if (range) matchHeaders.set('Range', range);
  const lookupRequest = () => new Request(cacheUrl.toString(), { headers: matchHeaders });

  // Si ya tenemos el archivo completo guardado, Cloudflare resuelve el pedido de una
  // (incluyendo si el navegador pidió un "Range": cache.match entiende ese header y
  // devuelve el trozo correcto), sin ir a buscarlo de nuevo a GitHub.
  let cached = await cache.match(lookupRequest());
  if (cached) {
    const resp = new Response(cached.body, cached);
    resp.headers.set('Access-Control-Allow-Origin', '*');
    return resp;
  }

  // Si otro pedido para este mismo archivo ya está guardándose en caché ahora mismo,
  // esperamos a que termine y lo leemos de ahí, en vez de volver a pedirle a GitHub
  // el archivo completo nosotros también.
  if (inFlight.has(name)) {
    await inFlight.get(name).catch(() => {});
    cached = await cache.match(lookupRequest());
    if (cached) {
      const resp = new Response(cached.body, cached);
      resp.headers.set('Access-Control-Allow-Origin', '*');
      return resp;
    }
    // Si por algo no quedó guardado, seguimos abajo y lo pedimos nosotros mismos.
  }

  const upstream = `https://github.com/${REPO}/releases/download/${TAG}/${encodeURIComponent(name)}`;

  let upstreamResp;
  try {
    // Pedimos SIEMPRE el archivo completo (nunca reenviamos el Range del navegador
    // hacia GitHub), para guardar una sola copia entera en caché.
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

  // Clonamos ANTES de leer nada: una copia se guarda en caché (en segundo plano, sin
  // hacer esperar a quien pidió el archivo ahora mismo) y la otra se devuelve ya mismo.
  const fullResponse = new Response(upstreamResp.body, { status: 200, headers });
  const putPromise = cache.put(new Request(cacheUrl.toString()), fullResponse.clone());
  inFlight.set(name, putPromise);
  waitUntil(
    putPromise
      .catch(() => {})
      .finally(() => inFlight.delete(name))
  );

  const resp = new Response(fullResponse.body, fullResponse);
  resp.headers.set('Access-Control-Allow-Origin', '*');
  return resp;
}
