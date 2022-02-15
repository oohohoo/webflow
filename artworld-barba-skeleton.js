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
  
         
  
        