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

export async function onRequestGet({ params, request, waitUntil }) {
  const name = params.name;
  if (!name) return new Response('Falta el nombre del archivo.', { status: 400 });

  const cache = caches.default;
  // Clave de caché sin query string (ignoramos cosas como "?p=13"), para que todos
  // los pedidos de un mismo archivo compartan la misma copia guardada.
  const cacheUrl = new URL(request.url);
  cacheUrl.search = '';
  const cacheKey = new Request(cacheUrl.toString(), { method: 'GET' });

  // Si ya tenemos el archivo completo guardado, Cloudflare resuelve el pedido de
  // una (incluyendo si el navegador pidió un "Range"), sin ir a buscarlo de nuevo.
  const cached = await cache.match(cacheKey, { ignoreMethod: true });
  if (cached) {
    const resp = new Response(cached.body, cached);
    resp.headers.set('Access-Control-Allow-Origin', '*');
    return resp;
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

  const fullResponse = new Response(upstreamResp.body, { status: 200, headers });

  // Guardamos una copia en la caché de Cloudflare sin hacer esperar a quien pidió
  // el archivo ahora mismo (waitUntil sigue en segundo plano tras responder).
  waitUntil(cache.put(cacheKey, fullResponse.clone()));

  const resp = new Response(fullResponse.body, fullResponse);
  resp.headers.set('Access-Control-Allow-Origin', '*');
  return resp;
}
