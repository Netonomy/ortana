if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const d=e=>c(e,a),r={module:{uri:a},exports:t,require:d};s[a]=Promise.all(n.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c4fefb93252b7a9c73f003a44c36412a"},{url:"/_next/static/_7h_bjNWRCdlId_q8q8S0/_buildManifest.js",revision:"1c3c99422ac92eb40e814c62eb58bcae"},{url:"/_next/static/_7h_bjNWRCdlId_q8q8S0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1072-2cc33a9cb2bbe3a8.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/1925-622b109de5ef27a8.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/2382-030d995823ba7178.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3256-0e1628521c10a94d.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3280de5f-83ad927bcbd8b53d.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3370-2f14fb5deeca64c4.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3611-24be2229a8238540.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3890-07a72344c631c82f.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/3964-e146016485750d83.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/528-c6a93172551cbfcb.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/5883-73032dff9cc7e4f9.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/596-d8c5871f78636064.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/6155-b85585fe37d3b391.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/6645-712bd220b69a56ba.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/6969-21b9db9cd09422bc.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/72063f0f-5453c0c427c5d867.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/7726-0be665be3a890a3f.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/7870-81bc65be0b6a6229.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/7988-8bfa7d3c698722e0.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/7a49ec60-53173f439a129d80.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/8323-93d4570dbb7ab581.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/8499-313f498cb70e957e.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/8824-ed80a573a4e251cf.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/9330-2326036fc8227891.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/9794-ad962f7c75dbf19d.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/agent/layout-0eaa38631015ad2f.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/agent/page-c722a1b7ed26afca.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/finances/layout-8828b51e6e7fdf6b.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/finances/page-bad08a51ad3d964d.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/layout-5c4287f7f7105297.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/page-1738af945a4c0492.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/layout-c3d90eca720c0365.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/page-e9d68e7fb61d1d25.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/passwords/layout-e725bbc671991b0e.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/passwords/page-f907d4c24ad94f8f.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/photos/layout-8805427f346d5085.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/photos/page-88ed19269c792d5f.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/videos/layout-19f0c3fcfc930040.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/home/storage/videos/page-0a8b2d8b2c977895.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/layout-923331e88dbdbbee.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/note/%5BrecordId%5D/layout-37ad6d025ca8ba28.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/note/%5BrecordId%5D/page-66101cf70a709820.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/page-fde08272062e7750.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/pdf/%5BrecordId%5D/layout-02c7f80ac917f89e.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/pdf/%5BrecordId%5D/loading-77a80d46f7e273bf.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/pdf/%5BrecordId%5D/page-c1dbfe833d46c369.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/photo/%5Bindex%5D/page-30bbf9257c80a2cd.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/register/layout-b21cd6219b9d1ebc.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/register/page-302d5ef52f9e6232.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/video/%5BrecordId%5D/layout-41e43d2487126945.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/video/%5BrecordId%5D/page-f460b8b778157069.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/app/welcome/page-d3305c26a04a6550.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/fd9d1056-b9edd469bde0de25.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/main-7325ebf33997e88e.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/main-app-14c3fe4c91e8dee7.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/pages/_app-c39a67c97d2e85f6.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/pages/_error-f172337bda537849.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-08cdf752f0cb02ac.js",revision:"_7h_bjNWRCdlId_q8q8S0"},{url:"/_next/static/css/a92129f0623b45c2.css",revision:"a92129f0623b45c2"},{url:"/_next/static/css/bcbaac885b02fbc4.css",revision:"bcbaac885b02fbc4"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/pdf.worker.min.5bcbd02b.js",revision:"5bcbd02b"},{url:"/appIcon.png",revision:"2566c786ff79718b280009db2eb2e77a"},{url:"/barCodeIcon.svg",revision:"469e7c10eabd9e78f588e6957c9ad784"},{url:"/depositIcon.svg",revision:"47d84eee82ac106144b3207689886b59"},{url:"/icons/Copy.svg",revision:"99fe601b74705f9629040ba974738950"},{url:"/icons/chatBot.png",revision:"937ab2b29db1d0f850c2d663448a6f2e"},{url:"/icons/icon-128x128.png",revision:"95d8a30a8ced8c44695e630e83a86490"},{url:"/icons/icon-144x144.png",revision:"0dc87e10c9396d79cc8f535a0987d7a4"},{url:"/icons/icon-152x152.png",revision:"4550077bcdfa45f39395915226e83a76"},{url:"/icons/icon-192x192.png",revision:"b322e9c4b9c1be463a1edc2dd15bdebb"},{url:"/icons/icon-256x256.png",revision:"fede2448a6e5db2eb9ef02c5b98e37e9"},{url:"/icons/icon-384x384.png",revision:"9e7f49cf304c2cf6dcc41ef19844b105"},{url:"/icons/icon-512x512.png",revision:"1dfc7d2040f98372eda75f7dd8cf3f04"},{url:"/icons/icon-72x72.png",revision:"8591ccaf4303ead3a383275ab6b63a8a"},{url:"/icons/icon-96x96.png",revision:"a928a447119f822e8d4e6f33b3b0cd80"},{url:"/images/agent-ring.svg",revision:"8715aaaab6e352532a946c938bac1ccf"},{url:"/images/agent.svg",revision:"42f859349f160fd2b856fef785849a1a"},{url:"/keyLogo.png",revision:"a916ce69104424904fc34057fdf04d83"},{url:"/keyLogo.svg",revision:"a936145060e7c4ade539308ad94b3b3e"},{url:"/keyLogoBlack1.png",revision:"6617139b1c825386f579e026000e953d"},{url:"/keyLogoLight.png",revision:"9f5c8373fd18e14010ad6cd6e928ce8c"},{url:"/keyLogoWhite1.png",revision:"82f6db0729946ff2e164afbeddc21524"},{url:"/manifest.json",revision:"226c78d97fdfec43a2654023048d6d1d"},{url:"/netonomy web background black .PNG",revision:"1fefe2c5ed6635ba1ed5940634824526"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/portal-01.svg",revision:"1f539bed64666c48727cd9cef40ab29b"},{url:"/portal-02.png",revision:"bc86082d89a25cf67f35409728947a24"},{url:"/portal-03.svg",revision:"b4560269340587906fd85507cc9f5538"},{url:"/portal-04.svg",revision:"e5e7fe57587ce6f0d6340622d27ed159"},{url:"/portal-05.svg",revision:"9de5b8a42dbc466031bc614e015b5b46"},{url:"/portal-06.svg",revision:"2599ad3c76bd2a032ba0c4c52c742b59"},{url:"/splash.png",revision:"322cd7bfa495b5d45987a014cb476cf1"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/withdrawIcon.svg",revision:"cb0cd3311829dab46b2214a97d917f74"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));