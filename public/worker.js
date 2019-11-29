var CACHE_NAME= 'ecomm-app';
var urlsToCache=['/']

//install a service worker
self.addEventListener('install',event=>{
    //perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log("Opened Cache")
            return cache.addAll(urlsToCache);
        })
    )
})

//cache and return requests
self.addEventListener('fetch',event=>{
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            //Cache hit- return response
            if(response){
                return response;
            }
            return fetch(event.request)
        })
    )
})

//update a service worker
self.addEventListener('active',event=>{
    var cacheWhitelist=['ecomm-app'];
    event.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(
                cacheNames.map(cacheName=>{
                    if(cacheWhitelist.indexOf(cacheName) === -1){
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})