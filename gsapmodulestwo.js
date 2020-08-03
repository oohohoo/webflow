
// --- REGISTER SCROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);

// --- SMOOTH SCROLL -----------------------------------------

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  getDirection: true,
  //smoothMobile: true,
  //lerp: .05
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, 
  // we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  // UKLJUČITI SAMO NA MOBILNOJ VERZIJI
  // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// 


/////////////// GSAP MODULES 2


//-- HOVER POMAK SUSJEDA


// --- HOVE ONE - UNHOVER REST -- VELIKI
$(function(){
  $('.dott').hover(function(){
   
     var nextAll = $(this).nextAll();
    
    $(this).prevAll().each(function(){
       gsap.to($(this),{duration:0.5, x:-70})
    })
     $(this).nextAll().each(function(){
        gsap.to($(this),{duration:0.5, x:70})
     })
    gsap.to($(this),{duration:0.5, scale:1.5, ease: "power2.inOut"})
    
  },function(){
     var prevAll = $(this).prevAll();
     var nextAll = $(this).nextAll();
  $(this).prevAll().each(function(){
        gsap.to($(this),{duration:0.5, x:0})
     })
    $(this).nextAll().each(function(){
        gsap.to($(this),{duration:0.5, x:0})
     })
    
     gsap.to($(this),{duration:0.5, scale:1, ease: "power2.inOut"})
  })
})



// --- HOVE ONE - UNHOVER REST -- PIKE SA POMAKOM
$(function(){
  $('.pika').hover(function(){
   
     var nextAll = $(this).nextAll();
    
    $(this).prevAll().each(function(){
       gsap.to($(this),{duration:0.5, y:-6})
    })
     $(this).nextAll().each(function(){
        gsap.to($(this),{duration:0.5, y:6})
     })
    gsap.to($(this),{duration:0.5, scale:2, yoyo: true})
    
  },function(){
     var prevAll = $(this).prevAll();
     var nextAll = $(this).nextAll();
  $(this).prevAll().each(function(){
        gsap.to($(this),{duration:0.5, y:0})
     })
    $(this).nextAll().each(function(){
        gsap.to($(this),{duration:0.5, y:0})
     })
    
     gsap.to($(this),{duration:0.5, scale:1, yoyo: true})
  })
})



// ------ SWIPER + GSAP ANIMATIONS
// The Slideshow class.
class Slideshow {
    constructor(el) {
        
        this.DOM = {el: el};
      
        this.config = {
          slideshow: {
            delay: 3000,
            pagination: {
              duration: 3,
            }
          }
        };
        
        // Set the slideshow
        this.init();
      
    }
    init() {
      
      var self = this;
      
      // Charmed title
      this.DOM.slideTitle = this.DOM.el.querySelectorAll('.slide-title');
      this.DOM.slideTitle.forEach((slideTitle) => {
        charming(slideTitle);
      });
      
      // Set the slider
      this.slideshow = new Swiper (this.DOM.el, {
          
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: this.config.slideshow.delay,
            disableOnInteraction: false,
          },
          speed: 500,
          preloadImages: true,
          updateOnImagesReady: true,
          
          // lazy: true,
          // preloadImages: false,

          pagination: {
            el: '.slideshow-pagination',
            clickable: true,
            bulletClass: 'slideshow-pagination-item',
            bulletActiveClass: 'active',
            clickableClass: 'slideshow-pagination-clickable',
            modifierClass: 'slideshow-pagination-',
            renderBullet: function (index, className) {
              
              var slideIndex = index,
                  number = (index <= 8) ? '0' + (slideIndex + 1) : (slideIndex + 1);
              
              var paginationItem = '<span class="slideshow-pagination-item">';
              paginationItem += '<span class="pagination-number">' + number + '</span>';
              paginationItem = (index <= 8) ? paginationItem + '<span class="pagination-separator"><span class="pagination-separator-loader"></span></span>' : paginationItem;
              paginationItem += '</span>';
            
              return paginationItem;
              
            },
          },

          // Navigation arrows
          navigation: {
            nextEl: '.slideshow-navigation-button.next',
            prevEl: '.slideshow-navigation-button.prev',
          },

          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        
          on: {
            init: function() {
              self.animate('next');
            },
          }
        
        });
      
        // Init/Bind events.
        this.initEvents();
        
    }
    initEvents() {
        
        this.slideshow.on('paginationUpdate', (swiper, paginationEl) => this.animatePagination(swiper, paginationEl));
        //this.slideshow.on('paginationRender', (swiper, paginationEl) => this.animatePagination());

        this.slideshow.on('slideNextTransitionStart', () => this.animate('next'));
        
        this.slideshow.on('slidePrevTransitionStart', () => this.animate('prev'));
            
    }
    animate(direction = 'next') {
      
        // Get the active slide
        this.DOM.activeSlide = this.DOM.el.querySelector('.swiper-slide-active'),
        this.DOM.activeSlideImg = this.DOM.activeSlide.querySelector('.slide-image'),
        this.DOM.activeSlideTitle = this.DOM.activeSlide.querySelector('.slide-title'),
        this.DOM.activeSlideTitleLetters = this.DOM.activeSlideTitle.querySelectorAll('span');
      
        // Reverse if prev  
        this.DOM.activeSlideTitleLetters = direction === "next" ? this.DOM.activeSlideTitleLetters : [].slice.call(this.DOM.activeSlideTitleLetters).reverse();
      
        // Get old slide
        this.DOM.oldSlide = direction === "next" ? this.DOM.el.querySelector('.swiper-slide-prev') : this.DOM.el.querySelector('.swiper-slide-next');
        if (this.DOM.oldSlide) {
          // Get parts
          this.DOM.oldSlideTitle = this.DOM.oldSlide.querySelector('.slide-title'),
          this.DOM.oldSlideTitleLetters = this.DOM.oldSlideTitle.querySelectorAll('span'); 
          // Animate
          this.DOM.oldSlideTitleLetters.forEach((letter,pos) => {
            gsap.to(letter, {
            	duration: 0.3,
           		ease: "power3.in",
              delay: (this.DOM.oldSlideTitleLetters.length-pos-1)*.04,
              y: '100%',
              opacity: 0
            });
          
          });
        }
      
        // Animate title
        this.DOM.activeSlideTitleLetters.forEach((letter,pos) => {
				//	gsap.set(letter, {opacity:0, y: '50%'})
          gsap.to(letter, {
          	duration: 0.6,
            ease: "power3.out",
						delay: pos*.05,
						startAt: {y: "100%", opacity: 1},
						y: '0%',
						opacity: 1
					});
				});
      
        // Animate background
        gsap.to(this.DOM.activeSlideImg, 1.5, {
        		duration: 1.5,
            ease: "expo.out",
            startAt: {x: direction === 'next' ? 200 : -200},
            x: 0,
        });
    
        //this.animatePagination()
    
    }
    animatePagination(swiper, paginationEl) {
            
      // Animate pagination
      this.DOM.paginationItemsLoader = paginationEl.querySelectorAll('.pagination-separator-loader');
      this.DOM.activePaginationItem = paginationEl.querySelector('.slideshow-pagination-item.active');
      this.DOM.activePaginationItemLoader = this.DOM.activePaginationItem.querySelector('.pagination-separator-loader');
      
      console.log(swiper.pagination);
      // console.log(swiper.activeIndex);
      
      // Reset and animate
        gsap.set(this.DOM.paginationItemsLoader, {scaleX: 0});
        gsap.to(this.DOM.activePaginationItemLoader, this.config.slideshow.pagination.duration, {
          startAt: {scaleX: 0},
          scaleX: 1,
        });
      
      
    }
    
}

const slideshow = new Slideshow(document.querySelector('.slideshow'));
