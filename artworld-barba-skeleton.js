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
          }, {
              name: 'with-cover',
              from: {
                  custom: ({
                      trigger
                  }) => {
                      return trigger.classList && trigger.classList.contains('artist-link');
                  },
              },
              to: {
                  namespace: ['artist']
              },
              leave() {},
              enter() {},
          }, {
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
  
        /*================= INTRO ============================*/
  
  /*
      const introLoader = document.getElementById('introLoader');
      let introAnimation = bodymovin.loadAnimation({
          wrapper: introLoader,
          animType: 'svg',
          autoplay: false,
          loop: false,
          animationData: {
              "v": "5.6.5",
              "fr": 60,
              "ip": 0,
              "op": 241,    
              "w": 1622,
              "h": 220,
              "nm": "AW_loader 3",
              "ddd": 0,
              "assets": [{
                  "id": "comp_0",
                  "layers": [{
                      "ddd": 0,
                      "ind": 1,
                      "ty": 4,
                      "nm": "A",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [112.92, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [56.078, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [31.559, 0],
                                          [80.744, 0],
                                          [112.157, 102.541],
                                          [71.427, 102.541],
                                          [67.984, 88.92],
                                          [39.014, 88.92],
                                          [35.57, 102.541],
                                          [0, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ind": 1,
                              "ty": "sh",
                              "ix": 2,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [45.327, 63.387],
                                          [61.671, 63.387],
                                          [53.642, 30.692]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 2",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 7",
                          "np": 3,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 2,
                      "ty": 4,
                      "nm": "R",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [320.625, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [47.903, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, -22.23],
                                          [0, 0],
                                          [9.176, -5.019],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [30.551, 0],
                                          [0, 0],
                                          [0, 13.481],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [0, 0],
                                          [45.034, 0],
                                          [89.78, 34.563],
                                          [89.78, 35.137],
                                          [74.724, 61.665],
                                          [95.806, 102.541],
                                          [56.078, 102.541],
                                          [40.161, 69.987],
                                          [38.006, 69.987],
                                          [38.006, 102.541],
                                          [0, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ind": 1,
                              "ty": "sh",
                              "ix": 2,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 6.026],
                                          [0, 0],
                                          [7.168, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [7.455, 0],
                                          [0, 0],
                                          [0, -5.593],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [42.31, 46.035],
                                          [53.068, 36.999],
                                          [53.068, 36.425],
                                          [42.598, 28.396],
                                          [38.006, 28.396],
                                          [38.006, 46.035]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 2",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 8",
                          "np": 3,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 3,
                      "ty": 4,
                      "nm": "T",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [488.456, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [44.029, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [24.812, 29.257],
                                          [0, 29.257],
                                          [0, 0],
                                          [88.059, 0],
                                          [88.059, 29.257],
                                          [63.246, 29.257],
                                          [63.246, 102.541],
                                          [24.812, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 9",
                          "np": 2,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 4,
                      "ty": 4,
                      "nm": "W",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [720.821, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [73.43, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [0, 0],
                                          [38.287, 0],
                                          [47.757, 56.365],
                                          [57.367, 0],
                                          [89.494, 0],
                                          [101.393, 57.08],
                                          [111.577, 0],
                                          [146.86, 0],
                                          [123.055, 102.541],
                                          [86.477, 102.541],
                                          [74.578, 48.331],
                                          [62.813, 102.541],
                                          [23.805, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 10",
                          "np": 2,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 5,
                      "ty": 4,
                      "nm": "O",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [962.193, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [54.635, 54.638, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, -10.752],
                                          [10.746, 0],
                                          [0, 10.752],
                                          [-10.752, 0]
                                      ],
                                      "o": [
                                          [10.746, 0],
                                          [0, 10.752],
                                          [-10.752, 0],
                                          [0, -10.752],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [54.638, 35.137],
                                          [74.133, 54.638],
                                          [54.638, 74.139],
                                          [35.137, 54.638],
                                          [54.638, 35.137]
                                      ],
                                      "c": false
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ind": 1,
                              "ty": "sh",
                              "ix": 2,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, -30.177],
                                          [-30.177, 0],
                                          [0, 30.177],
                                          [30.171, 0]
                                      ],
                                      "o": [
                                          [-30.177, 0],
                                          [0, 30.177],
                                          [30.171, 0],
                                          [0, -30.177],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [54.638, 0],
                                          [0, 54.638],
                                          [54.638, 109.275],
                                          [109.27, 54.638],
                                          [54.638, 0]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 2",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 14",
                          "np": 3,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 6,
                      "ty": 4,
                      "nm": "R",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [1172.569, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [47.9, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, -22.23],
                                          [0, 0],
                                          [9.177, -5.019],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [30.546, 0],
                                          [0, 0],
                                          [0, 13.481],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [0, 0],
                                          [45.034, 0],
                                          [89.78, 34.563],
                                          [89.78, 35.137],
                                          [74.718, 61.665],
                                          [95.8, 102.541],
                                          [56.072, 102.541],
                                          [40.156, 69.987],
                                          [38, 69.987],
                                          [38, 102.541],
                                          [0, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ind": 1,
                              "ty": "sh",
                              "ix": 2,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 6.026],
                                          [0, 0],
                                          [7.174, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [7.461, 0],
                                          [0, 0],
                                          [0, -5.593],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [42.305, 46.035],
                                          [53.062, 36.999],
                                          [53.062, 36.425],
                                          [42.592, 28.396],
                                          [38, 28.396],
                                          [38, 46.035]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 2",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 11",
                          "np": 3,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 7,
                      "ty": 4,
                      "nm": "L",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [1342.689, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [36.428, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [0, 0],
                                          [38.293, 0],
                                          [38.293, 73.284],
                                          [72.856, 73.284],
                                          [72.856, 102.541],
                                          [0, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 12",
                          "np": 2,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }, {
                      "ddd": 0,
                      "ind": 8,
                      "ty": 4,
                      "nm": "D",
                      "sr": 1,
                      "ks": {
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 11
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 10
                          },
                          "p": {
                              "a": 0,
                              "k": [1522.273, 110, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [49.481, 51.27, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [200, 200, 100],
                              "ix": 6
                          }
                      },
                      "ao": 0,
                      "shapes": [{
                          "ty": "gr",
                          "it": [{
                              "ind": 0,
                              "ty": "sh",
                              "ix": 1,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 0],
                                          [0, -33.561],
                                          [0, 0],
                                          [36.284, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [0, 0],
                                          [37.145, 0],
                                          [0, 0],
                                          [0, 33.848],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [0, 0],
                                          [42.451, 0],
                                          [98.963, 49.912],
                                          [98.963, 50.913],
                                          [42.598, 102.541],
                                          [0, 102.541]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 1",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ind": 1,
                              "ty": "sh",
                              "ix": 2,
                              "ks": {
                                  "a": 0,
                                  "k": {
                                      "i": [
                                          [0, 0],
                                          [0, 15.917],
                                          [0, 0],
                                          [12.327, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "o": [
                                          [12.907, 0],
                                          [0, 0],
                                          [0, -17.352],
                                          [0, 0],
                                          [0, 0],
                                          [0, 0]
                                      ],
                                      "v": [
                                          [41.303, 73.43],
                                          [59.088, 51.774],
                                          [59.088, 50.626],
                                          [41.022, 29.111],
                                          [38.293, 29.111],
                                          [38.293, 73.43]
                                      ],
                                      "c": true
                                  },
                                  "ix": 2
                              },
                              "nm": "Path 2",
                              "mn": "ADBE Vector Shape - Group",
                              "hd": false
                          }, {
                              "ty": "fl",
                              "c": {
                                  "a": 0,
                                  "k": [0, 0, 0, 1],
                                  "ix": 4
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 5
                              },
                              "r": 1,
                              "bm": 0,
                              "nm": "Fill 1",
                              "mn": "ADBE Vector Graphic - Fill",
                              "hd": false
                          }, {
                              "ty": "tr",
                              "p": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 2
                              },
                              "a": {
                                  "a": 0,
                                  "k": [0, 0],
                                  "ix": 1
                              },
                              "s": {
                                  "a": 0,
                                  "k": [100, 100],
                                  "ix": 3
                              },
                              "r": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 6
                              },
                              "o": {
                                  "a": 0,
                                  "k": 100,
                                  "ix": 7
                              },
                              "sk": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 4
                              },
                              "sa": {
                                  "a": 0,
                                  "k": 0,
                                  "ix": 5
                              },
                              "nm": "Transform"
                          }],
                          "nm": "Path 13",
                          "np": 3,
                          "cix": 2,
                          "bm": 0,
                          "ix": 1,
                          "mn": "ADBE Vector Group",
                          "hd": false
                      }],
                      "ip": 0,
                      "op": 3698,
                      "st": 98,
                      "bm": 0
                  }]
              }],
              "layers": [{
                  "ddd": 0,
                  "ind": 1,
                  "ty": 4,
                  "nm": "mark",
                  "sr": 1,
                  "ks": {
                      "o": {
                          "a": 0,
                          "k": 100,
                          "ix": 11
                      },
                      "r": {
                          "a": 0,
                          "k": 0,
                          "ix": 10
                      },
                      "p": {
                          "a": 1,
                          "k": [{
                              "i": {
                                  "x": 1,
                                  "y": 1
                              },
                              "o": {
                                  "x": 0.9,
                                  "y": 0
                              },
                              "t": 20,
                              "s": [811, 110, 0],
                              "to": [25.199, 0, 0],
                              "ti": [0, 0, 0]
                          }, {
                              "t": 80,
                              "s": [962.193, 110, 0]
                          }],
                          "ix": 2
                      },
                      "a": {
                          "a": 0,
                          "k": [223.599, 223.61, 0],
                          "ix": 1
                      },
                      "s": {
                          "a": 0,
                          "k": [48.77, 48.77, 100],
                          "ix": 6
                      }
                  },
                  "ao": 0,
                  "shapes": [{
                      "ty": "gr",
                      "it": [{
                          "ind": 0,
                          "ty": "sh",
                          "ix": 1,
                          "ks": {
                              "a": 0,
                              "k": {
                                  "i": [
                                      [0, 0],
                                      [0, -44.003],
                                      [43.979, 0],
                                      [0, 44.003],
                                      [-44.003, 0]
                                  ],
                                  "o": [
                                      [43.979, 0],
                                      [0, 44.003],
                                      [-44.003, 0],
                                      [0, -44.003],
                                      [0, 0]
                                  ],
                                  "v": [
                                      [223.611, 143.801],
                                      [303.396, 223.61],
                                      [223.611, 303.419],
                                      [143.801, 223.61],
                                      [223.611, 143.801]
                                  ],
                                  "c": false
                              },
                              "ix": 2
                          },
                          "nm": "Path 1",
                          "mn": "ADBE Vector Shape - Group",
                          "hd": false
                      }, {
                          "ind": 1,
                          "ty": "sh",
                          "ix": 2,
                          "ks": {
                              "a": 0,
                              "k": {
                                  "i": [
                                      [0, 0],
                                      [0, -123.501],
                                      [-123.502, 0],
                                      [0, 123.501],
                                      [123.476, 0]
                                  ],
                                  "o": [
                                      [-123.502, 0],
                                      [0, 123.501],
                                      [123.476, 0],
                                      [0, -123.501],
                                      [0, 0]
                                  ],
                                  "v": [
                                      [223.611, 0],
                                      [0, 223.61],
                                      [223.611, 447.22],
                                      [447.197, 223.61],
                                      [223.611, 0]
                                  ],
                                  "c": true
                              },
                              "ix": 2
                          },
                          "nm": "Path 2",
                          "mn": "ADBE Vector Shape - Group",
                          "hd": false
                      }, {
                          "ty": "fl",
                          "c": {
                              "a": 0,
                              "k": [0, 0, 0, 1],
                              "ix": 4
                          },
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 5
                          },
                          "r": 1,
                          "bm": 0,
                          "nm": "Fill 1",
                          "mn": "ADBE Vector Graphic - Fill",
                          "hd": false
                      }, {
                          "ty": "tr",
                          "p": {
                              "a": 0,
                              "k": [0, 0],
                              "ix": 2
                          },
                          "a": {
                              "a": 0,
                              "k": [0, 0],
                              "ix": 1
                          },
                          "s": {
                              "a": 0,
                              "k": [100, 100],
                              "ix": 3
                          },
                          "r": {
                              "a": 0,
                              "k": 0,
                              "ix": 6
                          },
                          "o": {
                              "a": 0,
                              "k": 100,
                              "ix": 7
                          },
                          "sk": {
                              "a": 0,
                              "k": 0,
                              "ix": 4
                          },
                          "sa": {
                              "a": 0,
                              "k": 0,
                              "ix": 5
                          },
                          "nm": "Transform"
                      }],
                      "nm": "Path 14",
                      "np": 3,
                      "cix": 2,
                      "bm": 0,
                      "ix": 1,
                      "mn": "ADBE Vector Group",
                      "hd": false
                  }],
                  "ip": 0,
                  "op": 101,
                  "st": -40,
                  "bm": 0
              }, {
                  "ddd": 0,
                  "ind": 2,
                  "ty": 0,
                  "nm": "artworld logo",
                  "refId": "comp_0",
                  "sr": 1,
                  "ks": {
                      "o": {
                          "a": 1,
                          "k": [{
                              "i": {
                                  "x": [0.833],
                                  "y": [0.833]
                              },
                              "o": {
                                  "x": [0.167],
                                  "y": [0.167]
                              },
                              "t": 80,
                              "s": [0]
                          }, {
                              "t": 101,
                              "s": [100]
                          }],
                          "ix": 11
                      },
                      "r": {
                          "a": 0,
                          "k": 0,
                          "ix": 10
                      },
                      "p": {
                          "a": 0,
                          "k": [811, 110, 0],
                          "ix": 2
                      },
                      "a": {
                          "a": 0,
                          "k": [811, 110, 0],
                          "ix": 1
                      },
                      "s": {
                          "a": 0,
                          "k": [100, 100, 100],
                          "ix": 6
                      }
                  },
                  "ao": 0,
                  "w": 1622,
                  "h": 220,
                  "ip": 80,
                  "op": 3680,
                  "st": 80,
                  "bm": 0
              }],
              "markers": []
          }
      });
      introAnimation.addEventListener('DOMLoaded', function () {
          $('#introLoader').addClass('play-animation');
          lottie.play();
      });
      introAnimation.addEventListener('data_ready', function () {
          $('#introLoader').addClass('play-animation');
      });
      introAnimation.addEventListener('complete', function () {
          $('.preloader').addClass('completed');
          $('body').removeClass("first-session");
      });
  
      barba.hooks.beforeEnter((data) => {
          reloadScripts();
      });
  
      $(document).ready(function () {
          reloadScripts();
      });
  
     /*================= DISABLE SCROLL ============================*/
  
      function disableScroll() {
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, window.onscroll = function () {
              window.scrollTo(scrollLeft, scrollTop);
          };
      }
  
   /*================= ENABLE SCROLL ============================*/
  
      function enableScroll() {
          window.onscroll = function () {};
      }
      if (window.matchMedia("(min-width: 768px)").matches) {
          function fix_close() {
              var c = $(window).scrollTop() + 30;
              var fixedClose = $('.artist-close');
              fixedClose.css('position', 'absolute');
              fixedClose.css('top', c + 'px');
          };
  
    /*================= CLOSE BUTTON ARTIST ============================*/
  
          function fix_back() {
              var fixBack = $('.artist-close');
              fixBack.css('position', 'fixed');
              fixBack.css('top', 30 + 'px');
          };
      } else {
          function fix_close() {
              var c = $(window).scrollTop() + 18;
              var fixedClose = $('.artist-close');
              fixedClose.css('position', 'absolute');
              fixedClose.css('top', c + 'px');
          };
  
          function fix_back() {
              var fixBack = $('.artist-close');
              fixBack.css('position', 'fixed');
              fixBack.css('top', 18 + 'px');
          };
      }
  
    /*================= STOP ANIMATION ON RESIZE ============================*/   
  
      function stopAnimation() {
          let resizeTimer;
          window.addEventListener("resize", () => {
              var artistPage = document.querySelector('.artist')
              artistPage.classList.add("resize-animation-stopper");
              clearTimeout(resizeTimer);
              resizeTimer = setTimeout(() => {
                  artistPage.classList.remove("resize-animation-stopper");
              }, 100);
          });
      }
  
       /*================= SCROLL REVEAL NEWS ============================*/
  
      function revealNews() {
          ScrollReveal().reveal('.news-img_img', {
              interval: 300,
              delay: 300,
              viewFactor: 0
          });
      }
  
           /*================= REVEAL VIDEO============================*/
  
          
      
  
   /*================= RELOAD VIDEOS ============================*/
  
      function reloadVideos() {
          $(function () {
              var massVideo = $('.video-js');
              for (var i = 0; i < massVideo.length; i++) {
                  videojs(massVideo[i]).ready(function () {});
              }
          })
      }
  
       /*================= TAKE SCREENSHOT HTML2CANVAS ============================*/
      function takeshot() {
          let div = document.getElementById('capture');
          html2canvas(div).then(function (canvas) {
              document.getElementById('output').appendChild(canvas);
              canvas.imageSmoothingEnabled = true
          })
      }
  
      /*================= SLIDE GALLERY  ============================*/
      function reloadBackground() {
          $('.slide-block').each(function () {
              var childColor = $('.slide-item', this).children().attr('data-bg');
              $(this).css("background", childColor);
          });
      }
  
  /*================= RELOAD SCRIPTS ============================*/
      function reloadScripts() {
  
          reloadBackground();
  
  /*================= NEWS FOTKE RANDOM ============================*/
     /*     $(document).ready(function () {
              var classes = ['parallax'];
              $(".news-img").each(function (i, e) {
                  ranNum = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
                  if ((i + 1) % ranNum == 0) {
                      $(e).addClass('parallax');
                      $('.news-img:first-child').removeClass('parallax');
                  }
              });*/
   /*================= NEWS FOTKE PARALLAX ============================*/
  
          /*    $(window).on("load scroll", function () {
                  var parallaxElement = $(".parallax"),
                      parallaxQuantity = parallaxElement.length;
                  window.requestAnimationFrame(function () {
                      for (var i = 0; i < parallaxQuantity; i++) {
                          var currentElement = parallaxElement.eq(i),
                              windowTop = $(window).scrollTop(),
                              elementTop = currentElement.offset().top,
                              elementHeight = currentElement.height(),
                              viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                              scrolled = windowTop - elementTop + viewPortHeight;
                          currentElement.css({
                              transform: "translate3d(0," + scrolled * -0.20 + "px, 0)"
                          });
                      }
                  });
              });
          });
  
         /*================= HOMEPAGE IMAGE HOVER BACKGROUND COLOR ETC ============================*/  
  
         /* if (window.matchMedia("(min-width: 768px)").matches) {
              $('.home-artist').on('mouseover', function () {
                  var coverColor = $('.artist-cover', this).attr("data-color");
                  var currentLink = $(this);
                  $('.artist-name').stop(true, true).css('opacity', 0.04);
                  $('#filters').stop(true, true).css('opacity', 0);
                  $('.artist-name', this).stop(true, true).css('opacity', 1);
                  $('.artist-cover', this).stop(true, true).addClass('showed');
                  $('.artist-cover img, .artist-cover video', this).stop(true, true).addClass('hovered');
                  $('.home-overlay').css("backgroundColor", coverColor);
                  $('.artist-link').addClass('no-link')
                  setTimeout(function () {
                      currentLink.find('.artist-link').removeClass('no-link')
                  }, 500);
              });
              $('.home-artist').on('mouseleave', function () {
                  $('.artist-name').stop(true, true).css('opacity', 1);
                  $('#filters').stop(true, true).css('opacity', 1);
                  $('.artist-cover').stop(true, true).removeClass('showed');
                  $('.home-overlay').css("backgroundColor", "#ffffff");
                  $('.artist-link').addClass('no-link')
              });
              $('.artists-list').on('mouseenter', function () {
                  $(".artists-list").addClass("first-showed").delay(300).queue(function (next) {
                      $(this).removeClass("first-showed");
                      next();
                  });
              });
              $('.artists-list').on('mouseleave', function () {
                  $(this).removeClass('first-showed');
              })
              $('.artists-list > div').on('mouseenter', function () {
                  $('.home-footer').addClass('hided');
              })
              $('.artists-list').on('mouseleave', function () {
                  $('.home-footer').removeClass('hided');
              })
          } else {
              $('.artist-link').removeClass('no-link');
              $('.home-artist').on('click', function () {
                  var coverColor = $('.artist-cover', this).attr("data-color");
                  $('.artist-name').stop(true, true).css('opacity', 0.04);
                  $('#filters').stop(true, true).css('opacity', 0);
                  $('.artist-name', this).stop(true, true).css('opacity', 1);
                  $('.home-overlay').css("backgroundColor", coverColor);
              });
          }
          $(".project-credits br").replaceWith("&nbsp;");
          $('.artist-link').click(function (e) {
              if ($(this).hasClass('no-link')) {
                  return false;
              } else {
                  return true
              }
          });
  
  
  /*================= HOMEPAGE ARTIST FILTER ============================*/ 
  
       /*   $.fn.hideReveal = function (options) {
              options = $.extend({
                  filter: '*',
                  hiddenStyle: {
                      opacity: 0.1
                  },
                  visibleStyle: {
                      opacity: 1
                  },
              }, options);
              this.each(function () {
                  var $items = $(this).children();
                  var $visible = $items.filter(options.filter);
                  var $hidden = $items.not(options.filter);
                  $visible.animate(options.visibleStyle);
                  $visible.css('pointer-events', 'auto');
                  $hidden.animate(options.hiddenStyle);
                  $hidden.css('pointer-events', 'none');
              });
          };
  
          $(function () {
              var $container = $('.filter');
              var filterFns = {};
              $('#filters').on('click', 'li', function () {
                  var $this = $(this);
                  var filterValue = $this.attr('data-filter');
                  $('#filters li').css('opacity', 1);
                  if ($this.is('.is-checked')) {
                      filterValue = '*';
                  } else {
                      filterValue = $this.attr('data-filter');
                      $('#filters li').css('opacity', 0.3);
                  }
                  $('#filters li').not($this).removeClass('is-checked');
                  $this.toggleClass('is-checked');
                  filterValue = filterFns[filterValue] || filterValue;
                  $container.hideReveal({
                      filter: filterValue
                  });
              });
          });
  
  /*================= HIDE ARTIST INFO ============================*/ 
  
       /*   $('.expand').on("click", function () {
              $('.expand').toggleClass('rotated');
              $('.artist-left').toggleClass('not-hidded');
              $('.artist-left').toggleClass('hidded');
              $('.artist-right').toggleClass('expanded');
              $('.collapsed-info').toggleClass('header-showed');
              console.log("EXPAND CLICKED");
          })
  
  
   /*================= VIDEO STUFF ============================*/ 
  
       /*   $(function () {
              $(".video-js").each(function (videoIndex) {
                  var videoId = $(this).attr("id");
                  videojs(videoId).ready(function () {
                      this.on("click", function (e) {
                          $(".video-js").each(function (index) {
                              if (videoIndex !== index) {
                                  this.player.muted(true);
                              }
                          });
                      });
                  });
              });
          });
  
      /*================= VIDEO PLAY ============================*/ 
  
       /*   $('.w-background-video video').each(function () {
              $(this)[0].play();
              console.log("Video Play!");
          });
  
      /*================= VIDEO MUTE ============================*/ 
  
        /*  $('.vjs-mute-control').on("click", function () {
              var player = $('#player')[0];
              player.pause();
              $('.player-wave').removeClass('playing')
              $('.audio-player span').text('Audio OFF');
          })
  
   /*================= AKO JE HORIZONTAL SCROLL KILL SWIPER AND REMOVE NUMBERS ============================*/ 
  
       /*   $(function () {
              if ($('.project').hasClass('horizontal-scroll')) {
                  swiper.destroy()
                  $('.swiper-numbers').remove()
              }
          })
  
   /*================= NEŠTO SWIPER -- CHECK!! ============================*/ 
  
      /*    $('.swiper-artist').on("click", function () {
              var activeSlide = 4;
          });
  
  
      /*================= HOMEPAGE IMAGE -. nisam siguran!!!! ============================*/  
  
        /*  $('.home-artist').on("click", function () {
              var artistScreen = $(this).find('.artist-title').text();
              var splashColor = $(this).attr('data-splash');
              $('.artist-cover').css({
                  'opacity': '0',
                  'transition-delay': '0s',
                  'transition-duration': '0.5s',
                  'animation-timing-function': 'ease'
              });
              $('.home-artist').not(this).css('opacity', 0);
              $('#filters').css('opacity', 0);
              $(this).delay(300).fadeOut(300);
              $('.artist-screen').text(artistScreen);
              $('.splash-screen').css("backgroundColor", splashColor);
          })
          $('[data-barba-namespace="artist"] .close').on("click", function () {
              var artistTitle = $('.artist-left h2').text();
              $('.artist-screen').text(artistTitle);
          })
          if (matchMedia) {
              const mq = window.matchMedia("(min-width: 768px)");
              mq.addListener(WidthChange);
              WidthChange(mq);
          }
  
          function WidthChange(mq) {
              if (mq.matches) {
                  $('.mini-container').on("click", function () {
                      $('.video').toggleClass('is-open');
                      $('.info-content').toggleClass('is-open');
                      $('.mini-container #output').toggle(0);
                  });
              } else {
                  $('.mini-container').unbind('click');
              }
          }
          setTimeout(function () {
              takeshot();
          }, 800);
  
  
      /*================= MENU OPEN CLOSE ... ============================*/  
  
        /*  $('.menu-btn').on("click", function () {
              if (window.matchMedia("(max-width: 768px)").matches) {
                  $('.menu').addClass('is-open');
                  $('body').addClass('menu-open');
                  $('.menu').css('display', 'flex');
                  $('.main').css('pointer-events', 'none')
              } else {
                  $('.menu').addClass('is-open');
                  $('body').addClass('menu-open');
                  $('.menu').css('display', 'flex');
                  $('.main').css('pointer-events', 'none')
              }
          })
          $('.menu-close, .menu-links li, .menu-artists li').on("click", function () {
              $('.menu').removeClass('is-open');
              $('body').removeClass('menu-open');
              $('.main').css('pointer-events', 'auto')
          })
          $('.menu-artists ul li').on('mouseenter', function () {
              slug = $(this).attr('class');
              $('.menu-thumb#' + slug).stop(true, true).fadeIn(300);
              $('.menu-artists ul li').css('opacity', 0.3);
              $(this).css('opacity', 1);
          })
          $('.menu-artists ul li').on('mouseleave', function () {
              $('.menu-artists ul li').css('opacity', 1);
              $('.menu-thumb').stop(true, true).fadeOut(300);
          })
          $('.menu-links ul li').on('mouseenter', function () {
              $('.menu-links ul li').css('opacity', 0.3);
              $(this).css('opacity', 1);
          })
          $('.menu-links ul li').on('mouseleave', function () {
              $('.menu-links ul li').css('opacity', 1);
          })
  
              /*================= FULL SCREEN HORIZONTAL SCROLL GALLERY SOMETHING  ============================*/  
  
      /*    $(function () {
              if (window.matchMedia('(min-width: 768px)').matches) {
                  $(".horizontal-scroll").mousewheel(function (event, delta) {
                      this.scrollLeft -= (delta * 1);
                      event.preventDefault();
                  });
                  $(".horizontal-scroll > div").clone(true, true).appendTo(".horizontal-scroll").addClass('is-clone');
              }
          });
          $(function () {
              var doc = window.document,
                  context = doc.querySelector('.horizontal-scroll'),
                  clones = context.querySelectorAll('.is-clone'),
                  disableScroll = false,
                  scrollHeight = 0,
                  scrollPos = 0,
                  clonesHeight = 0,
                  i = 0;
  
              function getScrollPos() {
                  return (context.pageXOffset || context.scrollLeft) - (context.clientLeft || 0);
              }
  
              function setScrollPos(pos) {
                  context.scrollLeft = pos;
              }
  
              function getClonesHeight() {
                  clonesHeight = 0;
                  for (i = 0; i < clones.length; i += 1) {
                      clonesHeight = clonesHeight + clones[i].offsetWidth;
                  }
                  return clonesHeight;
              }
  
              function reCalc() {
                  scrollPos = getScrollPos();
                  scrollHeight = context.scrollWidth;
                  clonesHeight = getClonesHeight();
                  if (scrollPos <= 0) {
                      setScrollPos(1);
                  }
              }
  
              function scrollUpdate() {
                  if (!disableScroll) {
                      scrollPos = getScrollPos();
                      if (clonesHeight + scrollPos >= scrollHeight) {
                          setScrollPos(1);
                          disableScroll = true;
                      } else if (scrollPos <= 0) {
                          setScrollPos(scrollHeight - clonesHeight);
                          disableScroll = true;
                      }
                  }
                  if (disableScroll) {
                      window.setTimeout(function () {
                          disableScroll = false;
                      }, 10);
                  }
              }
  
              function init() {
                  reCalc();
                  context.addEventListener('scroll', function () {
                      window.requestAnimationFrame(scrollUpdate);
                      window.requestAnimationFrame(reCalc);
                  }, false);
                  window.addEventListener('resize', function () {
                      window.requestAnimationFrame(reCalc);
                  }, false);
              }
              init();
          });
  
  
  
      /*================= AUDIO PLAYER - ne znam koji ============================*/  
  
       /*   $(document).ready(function () {
              var playing = false;
              var player = $('#player')[0];
              $(this).toggleClass("down");
              if (playing == false) {
                  playing = true;
                  player.play();
                  $('.player-wave').addClass('playing');
                  $('.audio-player span').text('Audio ON');
              } else {
                  playing = false;
                  player.pause();
                  $('.player-wave').removeClass('playing')
                  $('.audio-player span').text('Audio OFF');
              }
              $('.audio-player').click(function () {
                  $(this).toggleClass("down");
                  if (playing == false) {
                      playing = true;
                      player.play();
                      $('.player-wave').addClass('playing');
                      $('.audio-player span').text('Audio ON');
                  } else {
                      playing = false;
                      player.pause();
                      $('.player-wave').removeClass('playing')
                      $('.audio-player span').text('Audio OFF');
                  }
              });
          });
  
              /*================= GALERIJA TEMPLATEOVI 2 ili 3 fotke  ============================*/  
  
       /*   $('.slide-block, .scroll-block').each(function () {
              if ($(this).children().length > 1) {
                  $(this).addClass("two")
              }
              if ($(this).children().length > 2) {
                  $(this).removeClass("two")
                  $(this).addClass("triple")
              }
          });
          $('.two').each(function () {
              if ($(this).find('.slide-text').length === 1) {
                  $(this).addClass('double');
              }
          });
  
  /*================= NEŠTO S MENIJEM  ============================*/ 
  
      /*    $(document).ready(function () {
              if ($(window).width() < 768) {
                  $(".menu-links ul li:first-child a").text("Home");
              } else {
                  $(".menu-links ul li:first-child a").text("Artists");
              }
          });
          $(window).resize(function () {
              if ($(window).width() < 768) {
                  $(".menu-links ul li:first-child a").text("Home");
              } else {
                  $(".menu-links ul li:first-child a").text("Artists");
              }
          });
  
  
  /*================= RANDOM NEWS FOTKE  ============================*/ 
  
     /*     $('.news-img').each(function () {
              if ($(window).width() > 768) {
                  var minWidth = 340;
                  var maxWidth = 600;
                  var minPadding = 60;
                  var maxPadding = 200;
                  var minMargin = -30;
                  var maxMargin = 150;
              } else {
                  var minWidth = 140;
                  var maxWidth = 700;
                  var minPadding = 60;
                  var maxPadding = 140;
                  var minMargin = -30;
                  var maxMargin = 100;
              }
              $(this).css({
                  width: Math.random() * (maxWidth - minWidth) + minWidth,
                  marginLeft: Math.random() * (maxMargin - minMargin) + minMargin,
                  marginLeft: Math.random() * (maxMargin - minMargin) + minMargin,
                  paddingTop: Math.random() * (maxPadding - minPadding) + minPadding,
              });
          });
  
  
  /*================= HOME ARTIST NAME BLACK WHITE ON HOVE ============================*/ 
  
      /*    $('.home-artist').on("mouseover", function () {
              if ($(this).find('.artist-cover').hasClass('ab-dark')) {
                  $('.home-artist').removeClass('dark-text');
                  $('.home-artist').addClass('light-text');
              } else {
                  $('.home-artist').addClass('dark-text')
              }
          })
          $('.home-artist').on("mouseleave", function () {
              $('.home-artist').removeClass('light-text')
          })
  
  
  
  /*================= MODEL BOOK SELECT  ============================*/ 
  
       /*   $(".single-export").each(function (i) {
              $(this).attr('id', 'thumb-' + i);
          });
  
          $('.overview-img').on("click", function () {
              var imgID = $(this).find('.single-export').attr('id');
              if ($(this).hasClass('selected')) {
                  $(this).removeClass('selected')
                  $(".thumb#" + imgID).parent().remove();
              } else {
                  $(this).addClass('selected')
                  $(this).find('.single-export').clone().insertAfter(".thumbs-images").removeClass('selected').addClass('thumb').wrap("<div class='mini'></div>");
              }
              var numItems = $('.selected').length;
              $('.counter').html(numItems)
              if ($('.selected').length > 0) {
                  $('.overview-thumbs').fadeIn(300);
              } else {
                  $('.overview-thumbs').fadeOut(300);
              }
          });
          $('.unselect').on("click", function () {
              $('.overview-img').removeClass('selected');
              $('.overview-img').removeClass('export');
              $('.counter').html("0")
              $('.mini').remove();
              $('.overview-thumbs').fadeOut(300);
          });
          $('body').on("click", ".thumb", function () {
              var imgID = $(this).attr('id');
              $(this).parent().remove();
              $(".single-export#" + imgID).parents('.overview-img').removeClass('selected');
              var numItems = $('.selected').length;
              $('.counter').html(numItems)
              if ($('.selected').length > 0) {
                  $('.overview-thumbs').fadeIn(300);
              } else {
                  $('.overview-thumbs').fadeOut(300);
              }
          });
  
          /*================= FIX SCROLL NEŠTO ============================*/ 
  
     /*     function fix_scroll() {
              var s = $(window).scrollTop();
              var fixedTitle = $('.slide-up-enter, .slide-down-leave');
              fixedTitle.css('position', 'absolute');
              fixedTitle.css('top', s + 'px');
          }
          fix_scroll();
          $(window).on('scroll', fix_scroll);
  
         
  
        
  
      /*================= MOŽDA JQUERY MOUSEWHEEL ============================*/ 
  
  
  })(jQuery);
  ! function (a) {
      "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
  }(function (a) {
      function b(b) {
          var g = b || window.event,
              h = i.call(arguments, 1),
              j = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0;
          if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
              if (1 === g.deltaMode) {
                  var q = a.data(this, "mousewheel-line-height");
                  j *= q, m *= q, l *= q
              } else if (2 === g.deltaMode) {
                  var r = a.data(this, "mousewheel-page-height");
                  j *= r, m *= r, l *= r
              }
              if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                  var s = this.getBoundingClientRect();
                  o = b.clientX - s.left, p = b.clientY - s.top
              }
              return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
          }
      }
  
      function c() {
          f = null
      }
  
      function d(a, b) {
          return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
      }
      var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          i = Array.prototype.slice;
      if (a.event.fixHooks)
          for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
      var k = a.event.special.mousewheel = {
          version: "3.1.12",
          setup: function () {
              if (this.addEventListener)
                  for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
              else this.onmousewheel = b;
              a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
          },
          teardown: function () {
              if (this.removeEventListener)
                  for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
              else this.onmousewheel = null;
              a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
          },
          getLineHeight: function (b) {
              var c = a(b),
                  d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
              return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
          },
          getPageHeight: function (b) {
              return a(b).height()
          },
          settings: {
              adjustOldDeltas: !0,
              normalizeOffset: !0
          }
      };
      a.fn.extend({
          mousewheel: function (a) {
              return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
          },
          unmousewheel: function (a) {
              return this.unbind("mousewheel", a)
          }
      })
  });
  (function (a, b) {
      if ("function" == typeof define && define.amd) define([], b);
      else if ("undefined" != typeof exports) b();
      else {
          b(), a.FileSaver = {
              exports: {}
          }.exports
      }
  })(this, function () {
      "use strict";
  
      function b(a, b) {
          return "undefined" == typeof b ? b = {
              autoBom: !1
          } : "object" != typeof b && (console.warn("Depricated: Expected third argument to be a object"), b = {
              autoBom: !b
          }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
              type: a.type
          }) : a
      }
  
      function c(b, c, d) {
          var e = new XMLHttpRequest;
          e.open("GET", b), e.responseType = "blob", e.onload = function () {
              a(e.response, c, d)
          }, e.onerror = function () {
              console.error("could not download file")
          }, e.send()
      }
  
      function d(a) {
          var b = new XMLHttpRequest;
          return b.open("HEAD", a, !1), b.send(), 200 <= b.status && 299 >= b.status
      }
  
      function e(a) {
          try {
              a.dispatchEvent(new MouseEvent("click"))
          } catch (c) {
              var b = document.createEvent("MouseEvents");
              b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b)
          }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
          a = f.saveAs || "object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype ? function (b, g, h) {
              var i = f.URL || f.webkitURL,
                  j = document.createElement("a");
              g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
                  i.revokeObjectURL(j.href)
              }, 4E4), setTimeout(function () {
                  e(j)
              }, 0))
          } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
              if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
              else if (d(f)) c(f, g, h);
              else {
                  var i = document.createElement("a");
                  i.href = f, i.target = "_blank", setTimeout(function () {
                      e(i)
                  })
              }
          } : function (a, b, d, e) {
              if (e = e || open("", "_blank"), e && (e.document.title = e.document.body.innerText = "downloading..."), "string" == typeof a) return c(a, b, d);
              var g = "application/octet-stream" === a.type,
                  h = /constructor/i.test(f.HTMLElement) || f.safari,
                  i = /CriOS\/[\d]+/.test(navigator.userAgent);
              if ((i || g && h) && "object" == typeof FileReader) {
                  var j = new FileReader;
                  j.onloadend = function () {
                      var a = j.result;
                      a = i ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), e ? e.location.href = a : location = a, e = null
                  }, j.readAsDataURL(a)
              } else {
                  var k = f.URL || f.webkitURL,
                      l = k.createObjectURL(a);
                  e ? e.location = l : location.href = l, e = null, setTimeout(function () {
                      k.revokeObjectURL(l)
                  }, 4E4)
              }
          };
      f.saveAs = a.saveAs = a, "undefined" != typeof module && (module.exports = a)
  });
  ! function (e) {
      "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "undefined" != typeof window ? window.JSZipUtils = e() : "undefined" != typeof global ? global.JSZipUtils = e() : "undefined" != typeof self && (self.JSZipUtils = e())
  }(function () {
      return function o(i, f, u) {
          function s(n, e) {
              if (!f[n]) {
                  if (!i[n]) {
                      var t = "function" == typeof require && require;
                      if (!e && t) return t(n, !0);
                      if (a) return a(n, !0);
                      throw new Error("Cannot find module '" + n + "'")
                  }
                  var r = f[n] = {
                      exports: {}
                  };
                  i[n][0].call(r.exports, function (e) {
                      var t = i[n][1][e];
                      return s(t || e)
                  }, r, r.exports, o, i, f, u)
              }
              return f[n].exports
          }
          for (var a = "function" == typeof require && require, e = 0; e < u.length; e++) s(u[e]);
          return s
      }({
          1: [function (e, t, n) {
              "use strict";
              var u = {};
  
              function r() {
                  try {
                      return new window.XMLHttpRequest
                  } catch (e) {}
              }
              u._getBinaryFromXHR = function (e) {
                  return e.response || e.responseText
              };
              var s = "undefined" != typeof window && window.ActiveXObject ? function () {
                  return r() || function () {
                      try {
                          return new window.ActiveXObject("Microsoft.XMLHTTP")
                      } catch (e) {}
                  }()
              } : r;
              u.getBinaryContent = function (t, n) {
                  var e, r, o, i;
                  "function" == typeof (n = n || {}) ? (i = n, n = {}) : "function" == typeof n.callback && (i = n.callback), i || "undefined" == typeof Promise ? (r = function (e) {
                      i(null, e)
                  }, o = function (e) {
                      i(e, null)
                  }) : e = new Promise(function (e, t) {
                      r = e, o = t
                  });
                  try {
                      var f = s();
                      f.open("GET", t, !0), "responseType" in f && (f.responseType = "arraybuffer"), f.overrideMimeType && f.overrideMimeType("text/plain; charset=x-user-defined"), f.onreadystatechange = function (e) {
                          if (4 === f.readyState)
                              if (200 === f.status || 0 === f.status) try {
                                  r(u._getBinaryFromXHR(f))
                              } catch (e) {
                                  o(new Error(e))
                              } else o(new Error("Ajax error for " + t + " : " + this.status + " " + this.statusText))
                      }, n.progress && (f.onprogress = function (e) {
                          n.progress({
                              path: t,
                              originalEvent: e,
                              percent: e.loaded / e.total * 100,
                              loaded: e.loaded,
                              total: e.total
                          })
                      }), f.send()
                  } catch (e) {
                      o(new Error(e), null)
                  }
                  return e
              }, t.exports = u
          }, {}]
      }, {}, [1])(1)
  });