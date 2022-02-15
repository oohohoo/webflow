(function ($) {
    /*================= BARBA ============================*/
    
      barba.use(barbaPrefetch);
      barba.use(barbaCss);
      barba.init({
        debug: true,
          preventRunning: true,
          timeout: 5000,
          transitions: [{
              name: 'slide-up',
              sync: true,
              from: {
                  namespace: ['artist']
              },
              to: {
                  namespace: ['default', 'overview']
              },
              leave() {},
              enter() {},
          }, {
              name: 'slide-down',
              sync: true,
              from: {
                  namespace: ['default', 'overview']
              },
              to: {
                  namespace: ['artist']
              },
              leave() {},
              enter() {},
          }, {
              name: 'fade',
              from: {
                  namespace: ['artist', 'news', 'about', 'home']
              },
              to: {
                  namespace: ['home']
              },
              leave() {},
              enter() {},
          },  {
              name: 'self',
              enter() {}
          }],
          views: [{
              namespace: 'artist',
              beforeEnter(data) {
               //   disableScroll();
            //      fix_close();
               //   reloadArtists();
              },
              afterEnter(data) {
               //   fix_back();
                //  enableScroll();
               //   stopAnimation();
              },
              beforeLeave(data) {
               //   fix_close();
              }
          }, {
              namespace: 'default',
              beforeEnter(data) {
                //  disableScroll();
               //   reloadSliders();
               //   reloadPeaking();
                //  reloadBackground();
                //  reloadVideos();
              },
              afterEnter({
                  next
              }) {
  /*                
                  let jspdf = document.createElement('script');
                  jspdf.src = 'https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js';
                  next.container.appendChild(jspdf);
                  */
              }
          }, {
              namespace: 'overview',
              beforeEnter({
                  next
              }) {
                  /*
                  let jszip = document.createElement('script');
                  jszip.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.6.0/jszip.min.js';
                  next.container.appendChild(jszip);
                  let jspdf = document.createElement('script');
                  jspdf.src = 'https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js';
                  next.container.appendChild(jspdf);
                  */
                 // disableScroll();
              },
              beforeLeave(data) {
                 // disableScroll();
              },
              afterEnter(data) {
                //  enableScroll();
              }
          }, {
              namespace: 'news',
              beforeEnter({
                  next
              }) {
                /*  let scrollreveal = document.createElement('script');
                  scrollreveal.src = 'https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.js';
                  next.container.appendChild(scrollreveal);*/
              },
              afterEnter(data) {
                /*  revealNews();*/
              }
          }]
      });
  