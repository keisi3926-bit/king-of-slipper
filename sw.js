const CACHE_NAME = "king-of-slipper-tsg-v17";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./game.js",
  "./mobile-qr.html",
  "./public-qr.html",
  "./version.json",
  "./manifest.webmanifest",
  "./assets/main-slippers.png",
  "./assets/new-slippers.png",
  "./assets/coin-front.png",
  "./assets/coin-back.png",
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
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).pathname.endsWith("/version.json")) {
    event.respondWith(fetch(event.request, { cache: "no-store" }).catch(() => caches.match(event.request)));
    return;
  }
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./", copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))),
    );
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
