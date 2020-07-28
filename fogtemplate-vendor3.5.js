window.onload=function(){



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

// Horizontal gallery scrolltrigger pin (demo---)
gsap.to(".pin-wrap", {
  xPercent: -100, 
  x: innerWidth,
  ease: "none",
  scrollTrigger: {
  scroller: ".smooth-scroll",
    trigger: ".pin-wrap",
    start: "top top",
    end: () => innerWidth * 5,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

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
gsap.set(".lazy", {autoAlpha:0, y: 100});

ScrollTrigger.batch(".lazy", {
  scroller: ".smooth-scroll",
  //interval: 5, // time window (in seconds) for batching to occur. 
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha:1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha:0, y: -100, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {autoAlpha:1, y: 0, stagger: 0.15, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {autoAlpha:0, y: 100, overwrite: true})
  // you can also define things like start, end, etc.
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".lazy", {y: 0}));

	
// ------ ACCORDION
var animations = $(".accordion-group").map(createAnimation);

$(".accordion-menu").click(playAnimation);

function playAnimation(event) {
  
  var selected = this;
  
  animations.each(function(i, animate) {
    animate(selected);
  });
}

function createAnimation(i, element) {
    
  var menu = element.querySelector(".accordion-menu");
  var box  = element.querySelector(".accordion-content");
  
  gsap.set(box, { height: "auto"})
  var tween = gsap.from(box, { duration:0.5, height: 0, ease: Power1.easeInOut }).reverse();
  
  return function(selected) {
    
    var reversed = selected !== menu ? true : !tween.reversed();
    tween.reversed(reversed);
  }
}

	
// ---- HEADER SWITCH
//gsap.registerPlugin(ScrollTrigger);

gsap.to(".infoarea", {
		scrollTrigger: {
     scroller: ".smooth-scroll",
			trigger: ".section-1",
			scrub:1,
			toggleActions: 'play reverse play reverse'
		},
		color: '#fff',
		backgroundColor: '#080808',
		height:'5vh',
		duration: 1, 
	  ease: "power4.inOut",
	});

gsap.to(".menushr", {
		scrollTrigger: {
     scroller: ".smooth-scroll",
					trigger: ".section-1",
			scrub:1,
			toggleActions: 'play reverse play reverse',
		},
  y:-45,
  		color: '#fff',
  scale: 0.6,
	  ease: "power4.inOut",
	});

// SHOW HIDE SCROLLTRIGGER

ScrollTrigger.create({
  trigger: ".arrow-wrap",
    scroller: ".smooth-scroll",
  start: 'top 500',
  end: 99999,
  scrub:2,
  onUpdate: self => {
  console.log("direction:", self.direction);
            let { direction } = self;
            const featureBoxes = document.querySelectorAll('.hidescroll');
            if (direction == -1) {
                featureBoxes[0].classList.remove('is-hidden')
            } else if (direction == 1) {
                featureBoxes[0].classList.add('is-hidden')
            }
      }
});	
	
// --- 005 - MENU TOGGLE FUNCTION MOVE CONTENT TO REVEAL MENU --------------------------------------------------------------------------
// AKO SE KOD NE UČITA PA NE RADI, UBACIMO SVE U OVO
//window.onload=function(){


var trigger = document.querySelector('.whitekrugxxx');
var tl = gsap.timeline({ paused: true, reversed: true })
//var tl_2 = gsap.timeline({ paused: true, reversed: true})

tl.to('.video-bg', { 
 //yPercent:50,
 //color: '#ff0000',
 height: "100%", 
  duration:1,
  ease: "power4.inOut" 
})

/*tl_2.to(".turning", {
  duration:.75,
  ease: "elastic.out(1, 0.3)", 
  rotation:180,
  opacity:0, 
  overwrite: true, 
})
*/
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



//// ---- SIMPLE SLIDER RGB
var imgs =gsap.utils.toArray(".motiv")

var next = 3; // time to change

function crossfade(){
  
  var action = gsap.timeline()
  .to(imgs,  {y:'-=200', duration:1})
  .to(imgs[0], {y:'+=600', duration:0}) // the first to the end

  imgs.push( imgs.shift() ); // the first (shift) to the end (push) from the array
  console.log(imgs);

  // start endless run
  gsap.delayedCall(next, crossfade);

}

// start the crossfade after next = 3 sec
gsap.delayedCall(next, crossfade);

/// ----- MOUSE + CLICK



gsap.set(".h-page", {autoAlpha:1})

var $button = $('.linkclick'),
    $page = $('.h-page'),
    $click = $('.click');

$button.on('mouseenter', function(e) {
  var $thisPage = $(this).attr('id');
  var $thisClick = ($thisPage + "Click");

  gsap.to($thisPage, 1, {autoAlpha:1});
  gsap.to($page.not($thisPage), 0.5, {autoAlpha:0}); // faster
  gsap.to($thisClick, 0.4, {autoAlpha:0});

});


$button.on('click', function() {

  var $thisPage = $(this).attr('id');
  var $thisClick = ($thisPage + "Click");


  gsap.to($thisPage, 0.8, {autoAlpha:1});
  gsap.to($page.not($thisPage), 0.4, {autoAlpha:0});
  gsap.to($click.not($thisClick), 0.4, {autoAlpha:0});
  gsap.to($thisClick, 0.4, {autoAlpha:1});


});

// --- MENU IMAGE OVERLAY
var cursor = $(".cursor"),
    overlay = $(".project-overlay");

gsap.set(cursor, {opacity:0});

function moveCircle(e) {
  gsap.to(cursor, {
    duration:.5,
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(".p-1").hover(function(){
  $(".cursor").css({"background-image": "url(https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5ed694a7d99be97ea1381299_tosja-long-woolblend-coat-side-front-800x1067.png)" });
});

$(".p-2").hover(function(){
  $(".cursor").css({ "background-image": "url(https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5ed694a65ebae463717d52be_zazi-long-printed-dress-side-front-800x1067.jpg)" });
});
$(".p-3").hover(function(){
  $(".cursor").css({ "background-image": "url(https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5ed694a5bf55014325e86f75_romke-hooded-jacket-side-front-800x1067.png)" });
});
$(".p-4").hover(function(){
  $(".cursor").css({ "background-image": "url(https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5ed694a4d1429d2e3a740e4a_oved-straight-dress-side-front-800x1067.jpg)" });
});
$(".p-4").hover(function(){
  $(".cursor").css({ "background-image": "url(https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5ed694a3023d8e2af1a6099c_paskal-long-knitted-vest-side-front-800x1067.jpg)" });
});

var flag = false;
$(overlay).mousemove(function() {
  flag = true;
  gsap.to(cursor, {duration: 0.3, scale: 1, autoAlpha: 1});
  $(overlay).on("mousemove", moveCircle);
});

$(overlay).mouseout(function() {
  flag = false;
  gsap.to(cursor, {duration: 0.3, scale: 0.1, autoAlpha: 0});
});

// --- PROGRES LAJNA ŽUTA
//gsap.set(cursor, {opacity:0});
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".barba-container",
    scroller: ".smooth-scroll",
    scrub: true,
    start: "top top",
    end: "bottom bottom",
   // onUpdate: self => textProgress.innerText = self.progress.toFixed(3) + "%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});

/*
	// BATCH REVEAL LILA BOXES  // NE RADI TESTIRAJ DALJE

gsap.set(".reveal", {opacity: 0});

ScrollTrigger.batch(".reveal", {
  onEnter: batch => gsap.to(batch, {duration:1,  opacity: 1, stagger: 0.1, overwrite: true}),
  onLeave: batch => gsap.set(batch, {duration:1, opacity: 0, overwrite: true}),
  onEnterBack: batch => gsap.to(batch, {duration:1, opacity: 1, stagger: 0.1, overwrite: true}),
  onLeaveBack: batch => gsap.set(batch, {duration:1, opacity: 0, overwrite: true})
});
*/

// --- CUSTOM MOUSE

gsap.set(".c-ball", {xPercent: -50, yPercent: -50});

var ball = document.querySelector(".c-ball");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = .07;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  xSet(pos.x);
  ySet(pos.y);
});

gsap.set(".c-ball2", {xPercent: -50, yPercent: -50});

var ball_2 = document.querySelector(".c-ball2");
var pos_2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse_2 = { x: pos.x, y: pos.y };
var speed_2 = .1;

var xSet_2 = gsap.quickSetter(ball_2, "x", "px");
var ySet_2 = gsap.quickSetter(ball_2, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse_2.x = e.x;
  mouse_2.y = e.y;  
});

gsap.ticker.add(() => {
  pos_2.x += (mouse_2.x - pos_2.x) * speed_2;
  pos_2.y += (mouse_2.y - pos_2.y) * speed_2;
  xSet_2(pos_2.x);
  ySet_2(pos_2.y);
});



$(".link").on("mouseenter", function() {
  
  gsap.to(ball, {
        width: "110px",
        height: "110px",
        opacity:1,
        duration:1,
        ease: "elastic.out(1, 0.3)", 
        border:"2px solid white", 
        background:"none",
        overwrite: true, 
        background:"white"
    });
    
});

$(".link").on("mouseleave", function() {
     gsap.to(ball, {
        width: "30px",
        height: "30px",
        opacity:1,
        duration:1,
        ease: "elastic.out(1, 0.3)", 
        border:"1px solid white", 
        overwrite: true, 
        background:"none"
    });
});

// --- SCROLLTRIGGER FADE IN ELEMENTS

 gsap.utils.toArray('.imagefadein').forEach(box => {
 gsap.fromTo(box, {
      autoAlpha: 0,
      scale:.01
    }, {
      scrollTrigger: {
     scroller: ".smooth-scroll",
      trigger: box,
      toggleActions: 'play stop play reverse',
      once: false,
      scrub:1,
      end:"+=200%"
    },
      scale:1,
      duration: 1, 
      autoAlpha: 1, 
      ease:"power4.out",
  }, 6);
});


	
	
	
	
	
//onaj	
}
	
