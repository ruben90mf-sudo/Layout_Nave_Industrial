// Guarda la app en el dispositivo para que funcione sin conexión.
// Primero intenta la red (para recibir actualizaciones) y, si no hay, usa la copia guardada.
const CACHE = 'layout-nave-v6';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './favicon.png', './apple-touch-icon.png', './firebase-config.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Solo se guardan los archivos de la app, las fuentes y la librería de Firebase.
  // Las conexiones con la base de datos y el inicio de sesión pasan directas.
  const u = new URL(e.request.url);
  const ok = u.origin === location.origin || u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com' || u.pathname.startsWith('/firebasejs/');
  if (!ok) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
