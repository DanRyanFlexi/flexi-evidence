// ─────────────────────────────────────────────
//  Flexi Evidence Capture — Service Worker
//  Offline-first PWA caching strategy
// ─────────────────────────────────────────────

const CACHE_NAME = 'flexi-evidence-v4';
const OFFLINE_URLS = [
  './flexi-evidence-pwa.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// ── INSTALL: pre-cache app shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS.filter(url => !url.endsWith('.png')));
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: offline-first for app, network-first for SharePoint ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always network-first for SharePoint API calls
  if (url.pathname.includes('/_api/')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify({ error: 'Offline — SharePoint unavailable' }), {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // Cache-first for app shell
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match('./flexi-evidence-pwa.html'));
    })
  );
});

// ── BACKGROUND SYNC: retry failed evidence uploads ──
self.addEventListener('sync', event => {
  if (event.tag === 'sync-evidence') {
    event.waitUntil(syncPendingEvidence());
  }
});

async function syncPendingEvidence() {
  // Notify all open clients to trigger a sync
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach(client => client.postMessage({ type: 'TRIGGER_SYNC' }));
}

// ── PUSH NOTIFICATIONS (future use) ──
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'Flexi Evidence', {
      body: data.body || '',
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: 'flexi-evidence'
    })
  );
});
