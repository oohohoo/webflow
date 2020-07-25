
// --- REGISTER SCROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);

// --- SMOOTH SCROLL -----------------------------------------

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  //smoothMobile: true,
  lerp: .05
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

// BARBA TRANSITION -------------------


// --- 000 - INTRO ANIMATION --------------------------------------------------------------------------

// SPLITTING 
Splitting();

// IMAGE EXCHANGE GALLERY 
var imgs = $.makeArray( $('#images img') );
    imgs.reverse();

function crossfade(){
    gsap.to(imgs[0], {duration:0, autoAlpha:0}) 
    gsap.to(imgs[1], {duration:0, autoAlpha:1})
    imgs.push( imgs.shift() )
  }

var cycle = setInterval(crossfade,500)

//  CLIPPING PATH MASK REVEAL & TEXT REVEAL  
var animation = gsap.timeline({defaults:{duration:2, ease: "power3.inOut"}})
animation
.fromTo(".clip", {y:200, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
{autoAlpha:1, y:0, delay:0.3, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.set(".char", {autoAlpha:1}, "<")
.from(".char", {stagger:0.02, yPercent:108}, "<0.1")


// --- 001 --- FOR EACH WHEN ENTER --------------------------------------------------------------------------
gsap.utils.toArray('.block1').forEach((el, i) => { 
	gsap.from(el, { 
		scrollTrigger: { 
			trigger: el, 
      //markers: true,
      scroller: ".smooth-scroll",
      //togglEvents: onEnter onLeave onEnterBack onLeaveBack
     // toggleActions: "restart pause reverse pause",
     start: 'top bottom',
     end: "top top",
      // scrub: i * 0.2 
        },
  y: 100,
  opacity:0
  })
});


// --- 002 PINNING PANELS --------------------------------------------------------------------------

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    scroller: ".smooth-scroll",
    start: "top top", 
    pin: true, 
    //pinSpacing: false,
    //https://greensock.com/forums/topic/24859-locomotive-scroll-direction-with-scrolltrigger/
    // onUpdate: self => console.log("direction:", self.direction),
  });
});


ScrollTrigger.create({
snap: {snapTo: 0.5, duration: 0.6, delay: 0, ease: "power4.inOut"},
 // snap: 1 / 3 // snap whole page to the closest section!
}); 

/*
// --- 003 / PARALAX NEK STOJI IAKO JE MOŽDA NEPOTREBNO-----------------------------------------------------------------
//https://greensock.com/forums/topic/24805-scrolltrigger-parallax-and-locomotive-scroll/
const parallax = document.querySelectorAll(".para-image");
parallax.forEach(elem => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      scrub: true,
      scroller: ".smooth-scroll",
    }, 
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
  });
});
*/

// --- 004 - SWIPER --------------------------------------------------------------------------

// svaka fotka ima: data-swiper-parallax-y: "35%"
const slider = document.getElementById("js-cta-slider");
const sliderCounter = document.getElementById("js-cta-slider-counter");
const sliderNext = document.getElementById("js-cta-slider-next");
const sliderPrevious = document.getElementById("js-cta-slider-previous");

const interleaveOffset = 0.75;


const swiper = new Swiper(slider, {
  autoplay: false,
  parallax: true,
  //loop: true,
  effect: "slide",
  direction: "vertical", // put horizontal
  speed: 1000,
  grabCursor: true,
  watchSlidesProgress: true, // turn off for horizontal
  //mousewheelControl: true,
  mousewheelControl: 1,
  mousewheel: {
     // forceToAxis: true,
	releaseOnEdges: true,
      //invert: true
    },
    pagination: {
    el: sliderCounter,
    type: "custom",
    renderCustom: function(swiper, current, total) {
      let i = current ? current : 0;
      return `${("0" + i).slice(-2)} / ${("0" + total).slice(-2)}`;
    }
  },
  navigation: {
    nextEl: sliderNext,
    prevEl: sliderPrevious
  },
});


// --- 005 - MENU TOGGLE FUNCTION MOVE CONTENT TO REVEAL MENU --------------------------------------------------------------------------

var trigger = document.querySelector('.menu-trigger');
var tl = gsap.timeline({ paused: true, reversed: true })
var tl_2 = gsap.timeline({ paused: true, reversed: true})

tl.to('.smooth-scroll', { 
  x: "-28vw", 
  duration:1,
  ease: "power4.inOut" 
})

tl_2.to(".turning", {
  duration:.75,
  ease: "elastic.out(1, 0.3)", 
  rotation:180,
  opacity:0, 
  overwrite: true, 
})

trigger.addEventListener('click', function () {
  toggleState(tl)
  toggleState(tl_2)
})

function toggleState(tl) {
  tl.reversed() ? tl.play() : tl.reverse()
}

function toggleState(tl_2) {
  tl_2.reversed() ? tl_2.play() : tl_2.reverse()
}


// --- 006 - TEXT REVEAL BATCH --------------------------------------------------------------------------
gsap.set('.b-text', {autoAlpha: 0, yPercent: 200});

ScrollTrigger.batch(".batch-text", {
scroller: ".smooth-scroll",
  onEnter: batch => {
    batch.forEach((section, i) => {
      gsap.to(section.querySelectorAll(".b-text"), {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "power1.inOut", 
        stagger: 0.1,
        delay: i * 0.3,
        toggleActions: "restart pause reverse pause"
      });
    });
  },
  start: "top 95%"
});

// --- 007 - STICKY FOOTER ----------------------------------------------

ScrollTrigger.create({
  trigger: "#stickywrap",
  scroller: ".smooth-scroll",
  start: "top 20%",
  end:"bottom 80%",
  pin:'#sticky',
  onEnter: () => gsap.set('#sticky', {autoAlpha:1}),
  onLeaveBack: () => gsap.set('#sticky', {autoAlpha:0}),
});


// --- GALLERY BATCH --------------------

gsap.defaults({ease: "power3"});
gsap.set(".lazy", {y: 300});

ScrollTrigger.batch(".lazy", {
  scroller: ".smooth-scroll",
  //interval: 5, // time window (in seconds) for batching to occur. 
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -300, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 300, overwrite: true})
  // you can also define things like start, end, etc.
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".lazy", {y: 0}));
