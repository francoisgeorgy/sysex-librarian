"use strict";var precacheConfig=[["./index.html","d076dfe5b6b64e839d4b933334206e36"],["./static/css/main.f3f04e23.css","63dea1e973ebd7a0fecbe70570a382cf"],["./static/js/main.97216174.js","4483536e52d3106dfb6c1a0eb02891dd"],["./static/media/Inter-UI-Black.28b144c2.woff2","28b144c25989d58d1efc682da3bbaafb"],["./static/media/Inter-UI-Black.f0e3c382.woff","f0e3c382b00425de3b4ad83483ca72db"],["./static/media/Inter-UI-BlackItalic.da612650.woff2","da612650c903c13b297c827884dcb8db"],["./static/media/Inter-UI-BlackItalic.f62e9538.woff","f62e9538012bbc071a1c47254dcd6232"],["./static/media/Inter-UI-Bold.0a1242be.woff","0a1242bedd6453e33ea8bfb1a7fb2af4"],["./static/media/Inter-UI-Bold.8506a8d0.woff2","8506a8d02c2e819508bc53d65de6795a"],["./static/media/Inter-UI-BoldItalic.8300e088.woff2","8300e08855db2eb7f74402a173874e83"],["./static/media/Inter-UI-BoldItalic.84c42c5d.woff","84c42c5d04986c70ad2fac54f3e00937"],["./static/media/Inter-UI-Italic.8b0d1683.woff","8b0d16839ccd5eb17d2d2c57fc7b879c"],["./static/media/Inter-UI-Italic.bc389a02.woff2","bc389a025ce24c8a922a75a14efb9849"],["./static/media/Inter-UI-Medium.86c6d121.woff","86c6d121f1d396c123e9f2b0b18040a0"],["./static/media/Inter-UI-Medium.a4b302b5.woff2","a4b302b56c07e87c3428227270d313fa"],["./static/media/Inter-UI-MediumItalic.2b29c19f.woff2","2b29c19f434999cda5a1cdc166684cb0"],["./static/media/Inter-UI-MediumItalic.7719d61e.woff","7719d61e224c7bfe4e45a2427f7c1dda"],["./static/media/Inter-UI-Regular.3ca46ee3.woff","3ca46ee35e2e0a102cb63a64629ff935"],["./static/media/Inter-UI-Regular.ada67516.woff2","ada67516bfcb321d3af9a10b5ac85969"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});