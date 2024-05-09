// v1.2.1

self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./script.js", "./style.css", "./whatsinmesslogo192X192.png", "./whatsinmesslogo.png"])
        })
    )
    
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})

self.addEventListener("activate", (ev) => {
    clients.claim().then(() => {
        console.log("new sw activated")
    })
})
