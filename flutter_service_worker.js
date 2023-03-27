'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c8d4a012794b3d2c666005bd89d87f27",
"assets/assets/fantasy/campo.png": "5df6f13d55fb10587dce5063f904818d",
"assets/assets/fantasy/loma_pitcheo.png": "0039849da45846415b31d568700b5746",
"assets/assets/fantasy/mister_lineup.png": "12cfa4def028c7df9d3b1f718de8677d",
"assets/assets/fonts/arialbd.ttf": "29f375809f69734a27e0f6554eeeb839",
"assets/assets/fonts/BEBASNEUE-BOLD.ttf": "1e99b0442583593743adb5d91d7c0669",
"assets/assets/fonts/BEBAS__.ttf": "3ef73ff48d36ad769ecdd8ad805dda61",
"assets/assets/fonts/GazRg-Bold.ttf": "394145509e9065d9cc302191e5a795d4",
"assets/assets/fonts/norwester_0.otf": "7bf226306214181d5e917ed5bda2301c",
"assets/assets/fonts/Oswald-Regular.ttf": "dab2e777c19906ddc8d3ad983ca79cf0",
"assets/assets/fonts/segoeui.ttf": "b01ccfbbc272bced6c9a7211006cc639",
"assets/assets/fonts/seguisb.ttf": "a277c940616777ab351c88150d6a0ec9",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "5182da425f811908bed9f5b8c72fa44f",
"assets/assets/fonts/SourceSansPro-Semibold.ttf": "52984b3a4e09652a6feee711d5c169fd",
"assets/assets/icons/1ingenius.png": "f0e260114c8a0577f6bbeba5d60f3b8e",
"assets/assets/icons/acd.png": "d1fdd939bab122be9a6489aa6cc2dd5c",
"assets/assets/icons/ajustes.png": "5788002bb04e606468969a86dd9ef266",
"assets/assets/icons/aplis.png": "20112f34a4684af93d66c18cd35d201b",
"assets/assets/icons/appstore_logo.png": "733814d1c499da7e2d8f11aa774c11c3",
"assets/assets/icons/ball.png": "5431e04eb43ac171ec5d477922c33e2e",
"assets/assets/icons/bola_viva.png": "278bca79c4a97a7550938b433a3ccefb",
"assets/assets/icons/calendar_black.png": "e916c26928260c75b7558a024d93e95d",
"assets/assets/icons/calendar_white.png": "7b9a78563a3b4dff9ac628109397aed4",
"assets/assets/icons/check.png": "1a9351e5dbeee4ac35a5edad1c143914",
"assets/assets/icons/est.png": "5ddb0e54ffbed2bc5eac4b86a0f18903",
"assets/assets/icons/fantasy_fondo.jpeg": "f7242066bcb530aae52ec92ea65b7e21",
"assets/assets/icons/google_play_logo.png": "7fbb796c0070be4ba676df9b563553dc",
"assets/assets/icons/happy.png": "b399934099da3e95eaa9834459eb5d48",
"assets/assets/icons/icono.png": "8faa29061b8544d1c134583a8e2b6aef",
"assets/assets/icons/icono_ios.png": "cdf3df0f462c4847da4ffec6282fcea7",
"assets/assets/icons/ingenius.png": "d18008e7aef8951de56e50f34760ca22",
"assets/assets/icons/lid.png": "b3e6fdbaf94154d829d19ff848a5cdb4",
"assets/assets/icons/logo.png": "5c65b525508a0013e6a9a7a235e1e3d7",
"assets/assets/icons/max_monedas.png": "b58641105fa0fe0e0c95af28d75d7858",
"assets/assets/icons/moneda.png": "83da2d364adea7500563ae11eeb2d2e4",
"assets/assets/icons/paq.png": "352544e6a4c103063c49c2ff1cd8884b",
"assets/assets/icons/pf.png": "871c08a54e1d5eed82abb0e35c0c6e0b",
"assets/assets/icons/pocas_monedas.png": "9cd3b4170677e6427c06ebdf86351771",
"assets/assets/icons/pos.png": "57c79274c7e0ba6388a40778acedeeb6",
"assets/assets/icons/profile.png": "5a0ca145cd59e75337e41bf74cdce1b9",
"assets/assets/icons/qs.png": "ef106a19397643369ce6e13d5557415b",
"assets/assets/icons/question.png": "22dd3d53dff9639dc00ebce337292f80",
"assets/assets/icons/roster_black.png": "5cbdb29dff99a0eb4a17d4763dff7078",
"assets/assets/icons/roster_white.png": "efbc9ecffc366f46501225fdd0477c1d",
"assets/assets/icons/sad.png": "fd0fb998d69606c4bc45eebbfb2f45c0",
"assets/assets/icons/statistic.png": "3a0a943a98b442e56935205263be9230",
"assets/assets/icons/vs.png": "52489572d9d0718601aa2bb925a7bf13",
"assets/assets/loading/3W72119s5BjWPGGUiZ9pqnZoj8JHYxCCp9dtn2QVeStJ9YDDggSsDN1uwf4niPT2UCYBKAXAt8S4q5XVvAYUVcYWCX4PzPHrKXiyddSSfK7PMWen9UqwJ5.gif": "bdc76aee3e9fc79a9dc9fffe094e9ead",
"assets/assets/loading/giphy.gif": "db9d70221439963e9d6bccf2e8da05dd",
"assets/assets/loading/loading.gif": "40dafc009ba8b88cd987cc716345defb",
"assets/assets/loading/proximamente.gif": "38d2ecc9d06f4dbdbd2c8fa6554d82c9",
"assets/assets/navigation/calendario_gris.png": "62cde38a147394a5943eb19456f10c4b",
"assets/assets/navigation/calendario_negro.png": "a65dc85bbae897c498981779de0cf9ba",
"assets/assets/navigation/copa_gris.png": "05b54c24bf4f0619a16e05c64e6276d5",
"assets/assets/navigation/copa_negra.png": "a4e5f35ae67250af35ad6488b4d2a1ec",
"assets/assets/navigation/dado_gris.png": "12027f01623a67b4e4693d29b3c53878",
"assets/assets/navigation/dado_negro.png": "d439f55724072f79d07f865fc57f013e",
"assets/assets/navigation/fantasy.png": "b36b01ee068f194e5a90700a76738d79",
"assets/assets/navigation/fantasy_negro.png": "932160350cd0a241c050825141f195aa",
"assets/assets/navigation/Group.png": "4435003928e097c36b5a79ebb988f830",
"assets/assets/navigation/home_gris.png": "f2bd3f9c1019b131c51fde511c0fc73f",
"assets/assets/navigation/home_negro.png": "fd0198b6e4651bcaf17adfbe34524d54",
"assets/assets/navigation/tabla_gris.png": "56c9d839888453bca7c8e2b10374d396",
"assets/assets/navigation/tabla_negro.png": "af0c849775b84f153417915fcbf007dd",
"assets/assets/navigation/team_gris.png": "e82ad803c3e137a3a483ad336bd580d6",
"assets/assets/navigation/team_negro.png": "44c3a19104226e96464e21bb005a5135",
"assets/assets/social/facebook.png": "e23138390aa4c7e512a27837660c4a5d",
"assets/assets/social/mail.png": "f148f93063bf95136d62a9e7171bf8a9",
"assets/assets/social/telegram.png": "19d53625e70edb40f28f2e7c681f65cd",
"assets/assets/social/twitter.png": "aae9f5df26f4529ac2bd5dacee81251d",
"assets/assets/social/web.png": "ee115745321b48256868c21a96a27bfb",
"assets/assets/team_icons/agr.png": "062237a4cc25fbdc0ddfada9a3a7d14b",
"assets/assets/team_icons/agrbn.png": "ac00f6620892b3335a388e0d45c9c7e8",
"assets/assets/team_icons/art.png": "064909c78a599ae689ae9f96a1bd85fd",
"assets/assets/team_icons/artbn.png": "27d02c523b269996929df59aa408fde8",
"assets/assets/team_icons/caf.png": "0a621b43fb02c8241edc1e17ab1b2108",
"assets/assets/team_icons/cafbn.png": "b301ed63dd2676fcceff17ea861a5f4c",
"assets/assets/team_icons/cav.png": "1567c23c15504c68bc639a79bcc28c00",
"assets/assets/team_icons/cavbn.png": "52f995fafad008ec55a9677adcb4906f",
"assets/assets/team_icons/cen.png": "8c123813d4ad0274dde441f003ec29a2",
"assets/assets/team_icons/cenbn.png": "be6248f6c99fba716f170b438b0528db",
"assets/assets/team_icons/cfg.png": "c04fecf9ea025de5048e7c1d42272e9f",
"assets/assets/team_icons/cfgbn.png": "c350448b85d7c66b75dbdfaad0aa6ced",
"assets/assets/team_icons/cmg.png": "55c9a65ef338cd6f1ee74dc930c58619",
"assets/assets/team_icons/cmgbn.png": "3ec62c4f2fa8a8fe9960474c0c9a84b1",
"assets/assets/team_icons/gan.png": "d5efeee71ca26631548c5fd0c37a5df4",
"assets/assets/team_icons/ganbn.png": "b64c06d46f2b5e5192bbcb7bb35d4e8f",
"assets/assets/team_icons/gra.png": "aed5c0f40be4ce1e51c016bb7907e736",
"assets/assets/team_icons/grabn.png": "cd5f1188c400c0efe1e6e7278ee77fdc",
"assets/assets/team_icons/gtm.png": "0630941a9fcf3f78444e4b5719a86ed2",
"assets/assets/team_icons/gtmbn.png": "3778a163cce6ea0668dba96369f5008a",
"assets/assets/team_icons/hol.png": "fb295056fce3f6a8002481e57ecaaea4",
"assets/assets/team_icons/holbn.png": "040b14495bd3adf6ea6d27967d233b31",
"assets/assets/team_icons/ijv.png": "162c98e786ba089a75093ae0d949467c",
"assets/assets/team_icons/ijvbn.png": "ed4369d24945dfbde79edcf8caecd4e2",
"assets/assets/team_icons/ind.png": "769f683a081a132c24a12c35ad09d7cf",
"assets/assets/team_icons/indbn.png": "5f71607dee26eddacf6fb6b2d69d5970",
"assets/assets/team_icons/ltu.png": "8943c677c432a80c713e701834113d6d",
"assets/assets/team_icons/ltubn.png": "39a013582a123f8b41f298f45df82630",
"assets/assets/team_icons/may.png": "33f8801a4a13d810a70d656572038194",
"assets/assets/team_icons/maybn.png": "1cec2694fc14cce859605e94d2ce64df",
"assets/assets/team_icons/mtz.png": "968fe09e87f599e68e0b3eadfc2f08a4",
"assets/assets/team_icons/mtzbn.png": "8f66a8102f52db607ee9bc20dd15ce7f",
"assets/assets/team_icons/por.png": "e6b3e37981694aba7a0b7e84cdf7d449",
"assets/assets/team_icons/porbn.png": "c9a19364e61d9083a2aecbb9fc081b6e",
"assets/assets/team_icons/pri.png": "cbf0c14ebe70508952fa3258705cf446",
"assets/assets/team_icons/pribn.png": "69d5071ba5a9c466420bfcadd05f84e8",
"assets/assets/team_icons/scu.png": "ef8fb662b4ebd984786c8d0290ae1696",
"assets/assets/team_icons/scubn.png": "2737a98dc884fd0e8132988815c20524",
"assets/assets/team_icons/serie_nacional.png": "96ca52ad206a05b29da339a5b981e656",
"assets/assets/team_icons/ssp.png": "7e331d73700e3970e3368edd929fa971",
"assets/assets/team_icons/sspbn.png": "b302c01508ea203e94d121bbf0a03741",
"assets/assets/team_icons/tab.png": "599cb7a3d124d6eca4a53f79f884cf20",
"assets/assets/team_icons/tabbn.png": "762c1757d4675dca3bd2893788a343f2",
"assets/assets/team_icons/vcl.png": "adc33128194177ee08d28d67bdafaf82",
"assets/assets/team_icons/vclbn.png": "f28cd84d08241fb5025e6fb3dcb4cc01",
"assets/FontManifest.json": "a4d9c425dcb77bcee336f08e61b45109",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6d103d509148d01549796f0d06c9778d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "8faa29061b8544d1c134583a8e2b6aef",
"firebase-messaging-sw.js": "8e3a53cd7d8441de51d7f62a964a8af0",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb9eaa443dd766b4933937bd47d93b22",
"/": "bb9eaa443dd766b4933937bd47d93b22",
"main.dart.js": "58437045fd5fe55f530739ec202f96aa",
"manifest.json": "0fbe28ca38aa3ab2faf0cd1e6f46726b",
"version.json": "a4091b0b52ef0bb650b5e4c2d7e5b1c1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
