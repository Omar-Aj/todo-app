if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3bfe7e7a9555a5178a9d4df8a676332e"},{url:"/_next/static/1bl38NhArIFddz-16TW0S/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/1bl38NhArIFddz-16TW0S/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-0c08869ecfa879c7.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/345-e18e59aa607522e8.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/498-d6fb7ea0356ee66f.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/53c13509-1e46073bfefe4d35.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/839-a461638a1996db06.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/app/_not-found/page-ef0707a873f434a9.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/app/layout-4a82cc99274a6d7a.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/app/page-ffbd480645f303f4.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/fd9d1056-c4050f5b61ad0a3b.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/main-830c98d5730de365.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/main-app-0dd808093d81eb28.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-afb6baf3619a954a.js",revision:"1bl38NhArIFddz-16TW0S"},{url:"/_next/static/css/03f90778035504c6.css",revision:"03f90778035504c6"},{url:"/_next/static/css/b146ae3be84c7b09.css",revision:"b146ae3be84c7b09"},{url:"/_next/static/media/0e790e04fd40ad16-s.p.woff2",revision:"e4ffe70cf1f9923c96e83b3c3dfa2ce8"},{url:"/_next/static/media/4221e1667cd19c7d-s.woff2",revision:"0bef0d43a3921b965a2f986950f8112b"},{url:"/_next/static/media/6c276159aa0eb14b-s.woff2",revision:"9bb0e2c466cf5b89c55c2612cae38e6b"},{url:"/_next/static/media/6cc0b9500e4f9168-s.woff2",revision:"ec7aa7073a767f310a406f4b770915ec"},{url:"/_next/static/media/740fd072b5a225e7-s.woff2",revision:"0854bba7026f4462ef44e196eab88514"},{url:"/_next/static/media/9d9319a7a2ac39c6-s.woff2",revision:"39ee576686ac0e893e06738504b87269"},{url:"/_next/static/media/a75c8ea86756d52d-s.woff2",revision:"2a666ae7c76a840e2d516f05795c0883"},{url:"/_next/static/media/abce7c400ca31a51-s.woff2",revision:"15e5a809b11d1f5a1552dc6a01cff741"},{url:"/_next/static/media/all-done.43576a36.svg",revision:"4cb86611cbb32f2c965bce65c74171dc"},{url:"/_next/static/media/f759c939737fb668-s.woff2",revision:"cc93708cfed56118030eccd1e5e3f920"},{url:"/_next/static/media/fbd3ad5ecd46222b-s.p.woff2",revision:"9857cb398b00f93e6a5fcc4e89a1acbc"},{url:"/_next/static/media/loading.3d334ae2.svg",revision:"6aaf2d030d7c0f4a99c47fc3824dfb22"},{url:"/favicon-192x192.png",revision:"b6f474969c1c212fe91dc671a6a36bfe"},{url:"/favicon-512x512.png",revision:"04ddbec86fb9d3dea039583e07bf9f23"},{url:"/manifest.json",revision:"bb7ac29b75c5ca63b98547136a8f9b61"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
