<script> 

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  //smoothMobile: true,
  lerp: .07
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

// --- INTRO PANEL --------------------------------------------------------------------------

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
var animation = gsap.timeline({defaults:{duration:2, ease: "power4.inOut"}})
animation
.fromTo(".clip", {y:200, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
{autoAlpha:1, y:0, delay:0.3, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.set(".char", {autoAlpha:1}, "<")
.from(".char", {stagger:0.02, yPercent:108}, "<0.1")


// --- PANEL 1 --- FOR EACH --------------------------------------------------------------------------
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


// --- PANEL 2 --------------------------------------------------------------------------

//gsap.registerPlugin(ScrollTrigger);

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


// --- PANEL 3 / PARALAX--------------------------------------------------------------------------
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

	
</script> 
