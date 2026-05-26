const CACHE_NAME = "king-of-slipper-tsg-v4";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./game.js",
  "./mobile-qr.html",
  "./public-qr.html",
  "./manifest.webmanifest",
  "./assets/main-slippers.png",
  "./assets/haou-vs.png",
  "./assets/jin-vs.png",
  "./assets/kai-setsuna.png",
  "./assets/judge-tsg.png",
  "./assets/haou-theme-mobile.mp3",
  "./assets/haou-victory-theme-mobile.mp3",
  "./assets/jin-theme-mobile.mp3",
  "./assets/jin-victory-theme-mobile.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
