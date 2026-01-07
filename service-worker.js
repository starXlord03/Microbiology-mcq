self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mcq-cache').then(cache => {
      return cache.addAll([
        './microbiology_master_mcq_portal.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
