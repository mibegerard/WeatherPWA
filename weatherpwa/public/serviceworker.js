const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    if (!navigator.onLine) {
        // If offline, respond with cached weather data if available
        event.respondWith(
            caches.match(request)
                .then((response) => {
                    if (response) {
                        return response; 
                    }
                    return caches.match('offline.html'); 
                })
        );
    } else {
        // If online, fetch new data and cache it
        event.respondWith(
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return fetch(request)
                        .then((response) => {
                            if (request.url.includes('/data/2.5/weather')) {
                                cache.put(request, response.clone()); 
                            }
                            return response;
                        })
                        .catch(() => {
                            return caches.match('offline.html');
                        });
                })
        );
    }
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});
