const DRIVE_FILES = {
  manual: { id: '1PZcrNGYpY2sAxsxLF4STcu9yO6aDwyoV', name: 'MANUALES DE REFRIGERACION.pdf' },
  nh3: { id: '1EXgF3BBSnx0yt3a_WvITAMKRdDT_bje9', name: 'CURSO_REFRIG_INDUSTRIAL_NH3_ES.pdf' },
  sir1: { id: '143Ub4SuMslTjLiXyFWw3OjmsbKN67h8s', name: 'I - SIR - PRIMEIRO DIA (1).pdf' },
  sir2: { id: '1ghtCjom-PXTHCc3-pisQF-HCqbYOwrAG', name: 'II - SIR - SEGUNDO DIA.pdf' },
};

function errorResponse(message, status = 502) {
  return new Response(message, {
    status,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export async function onRequest(context) {
  const { request, params } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Método no permitido', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }

  const file = DRIVE_FILES[params.key];
  if (!file) return errorResponse('No se encontró este material.', 404);

  const incoming = new URL(request.url);
  const download = incoming.searchParams.get('download') === '1';
  const upstreamHeaders = new Headers();
  const range = request.headers.get('Range');
  const ifRange = request.headers.get('If-Range');
  if (range) upstreamHeaders.set('Range', range);
  if (ifRange) upstreamHeaders.set('If-Range', ifRange);

  // Drive's modern download endpoint serves public files as a byte stream. The
  // legacy endpoint is a fallback for accounts/files that still use its flow.
  const urls = [
    `https://drive.usercontent.google.com/download?id=${file.id}&export=download&confirm=t`,
    `https://drive.google.com/uc?export=download&confirm=t&id=${file.id}`,
  ];
  let upstream;
  let lastError;
  for (const url of urls) {
    try {
      upstream = await fetch(url, {
        method: request.method,
        headers: upstreamHeaders,
        redirect: 'follow',
      });
      const type = upstream.headers.get('Content-Type') || '';
      if (upstream.ok && !type.toLowerCase().includes('text/html')) break;
      lastError = `Google Drive respondió ${upstream.status} (${type || 'sin tipo de contenido'}).`;
      if (upstream.body) await upstream.body.cancel();
      upstream = null;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      upstream = null;
    }
  }
  if (!upstream) {
    return errorResponse(`No se pudo transmitir el PDF desde Google Drive. Comprueba que el archivo permita acceso a cualquier persona con el enlace. ${lastError || ''}`);
  }

  const headers = new Headers({
    'Content-Type': 'application/pdf',
    'Content-Disposition': `${download ? 'attachment' : 'inline'}; filename="${file.name}"`,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'public, max-age=3600',
    'X-Content-Type-Options': 'nosniff',
  });
  for (const name of ['Content-Length', 'Content-Range', 'ETag', 'Last-Modified']) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  return new Response(request.method === 'HEAD' ? null : upstream.body, {
    status: upstream.status,
    headers,
  });
}
