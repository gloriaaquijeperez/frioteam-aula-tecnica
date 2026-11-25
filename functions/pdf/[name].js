// Cloudflare Pages Function: sirve los PDFs alojados como GitHub Release
// pero sin forzar la descarga, para que el visor los pueda mostrar en pantalla.
const REPO = 'gloriaaquijeperez/frioteam-aula-tecnica';
const TAG = 'materiales-v1';

export async function onRequestGet({ params, request }) {
  const name = params.name;
  if (!name) return new Response('Falta el nombre del archivo.', { status: 400 });

  const upstream = `https://github.com/${REPO}/releases/download/${TAG}/${encodeURIComponent(name)}`;

  const reqHeaders = { 'User-Agent': 'Mozilla/5.0 (FrioteamAulaTecnica)' };
  const range = request.headers.get('Range');
  if (range) reqHeaders['Range'] = range;

  let upstreamResp;
  try {
    upstreamResp = await fetch(upstream, { redirect: 'follow', headers: reqHeaders });
  } catch (e) {
    return new Response('No se pudo contactar a GitHub.', { status: 502 });
  }

  if (!upstreamResp.ok && upstreamResp.status !== 206) {
    return new Response('No se encontró el archivo en el Release de GitHub: ' + name, {
      status: upstreamResp.status,
    });
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/pdf');
  headers.set('Content-Disposition', 'inline; filename="' + name + '"');
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, max-age=86400');
  const len = upstreamResp.headers.get('Content-Length');
  if (len) headers.set('Content-Length', len);
  const contentRange = upstreamResp.headers.get('Content-Range');
  if (contentRange) headers.set('Content-Range', contentRange);

  return new Response(upstreamResp.body, { status: upstreamResp.status, headers });
}
