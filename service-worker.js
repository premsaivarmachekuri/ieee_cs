const CACHE_NAME = 'ieee-cs-web-app-v1'; // Update with your preferred cache name
const CACHE_FILES = [
  '/',
  '/404.html',
  '/index.html',
  '/assets/css/main.css', // Update the paths for CSS, JS, and other assets
  '/assets/js/main.js',
  '/assets/img/logo.png',
  // Add other paths to static assets you want to cache
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
