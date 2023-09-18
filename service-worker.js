self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache-name').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/css/main.css',
          '/assets/js/main.js',
          '/assets/img/icon.png',
          '/teamMembers.html/'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
  