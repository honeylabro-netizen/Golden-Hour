const CACHE_NAME = "golden-hour-v11";

const CORE_ASSETS = [
  "index.html",
  "first-aid.html",
  "emergencies.html",
  "prepare.html",
  "hotlines.html",
  "offline.html",
  "style.css",
  "script.js",
  "manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();

          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.put(event.request, copy);
            }),
          );
        }

        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          return cached || caches.match("offline.html");
        });
      }),
  );
});
