// --- REGISTER SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);

// --- SMOOTH SCROLL -----------------------------------------

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  getDirection: true,
   inertia: .6,
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






/////////////////

gsap.set(".circle", {xPercent: -50, yPercent: -50});

let tl = gsap.timeline({
  scrollTrigger: {
  scroller: ".smooth-scroll",
    trigger: ".block--1",
    start: "top top",
    end: "+=100%",
    scrub: 0.5,
    pin: ".circle"
  },
})

tl.from(".circle", {
  scale: 0.1,
  repeat: 1,
  yoyo: true
})



/*------------/ SMANJI SEKCIJU PRIJE FOOTERA /------------*/

gsap.set('.footer-container', { yPercent: -50 })

const uncover = gsap.timeline({ paused:true })

uncover
.to('.footer-container', {yPercent: 0, ease: 'none'})
.to(".conclusion", {width:"80%", height:"80%"} ) 
;

ScrollTrigger.create({  
 scroller: ".smooth-scroll",
  trigger: '.conclusion',
  start: 'top top',
  end: '+=75%',
   animation: uncover,
  scrub: true,  
  
})

/*------------/ IMAGE REVEAL ON SCROLL /------------*/
let revealContainers = document.querySelectorAll(".img-reveal--mask");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
       scroller: ".smooth-scroll",
       invalidateOnRefresh: true,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5,{
     xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.2,
    delay: -1.5,
    rotate:10,
    ease: Power2.out
  });
});




/*------------/ SCROLLTRIGGER INNER IMAGE PARALLAX /------------*/

var inparallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".img__wrapper",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: false,
  },
}); 
inparallax.from(".img__background", {
  yPercent: -80,
  ease: "none",
}).to(".img__background", {
  yPercent: 80,
  ease: "none",
}); 



/*------------/ WEEKND ZOOM IMAGES 01 /------------*/

gsap.set('.pp-parent', { perspective: 400, autoAlpha: 1})

var zoomone = gsap.timeline({
  scrollTrigger: {
  scroller: ".smooth-scroll",
    trigger:'.pp-parent',
    pin:true,
    scrub:true
  }
})
.to('.boxx', { transformOrigin:'0 0 -150', z: 400})

/*------------/ WEEKND ZOOM IMAGES 02 PERSPECTIVE /------------*/

gsap.set('.pp-parenttwo', { perspective: 400, autoAlpha: 1})

var zoomtwo = gsap.timeline({
  scrollTrigger: {
  scroller: ".smooth-scroll",
    trigger:'.pp-parenttwo',
    pin:true,
    scrub:true
  }
})

.to('.boy1', { transformOrigin: "-500% 50% -100px", 
rotationY: 45,z: 1400 })
.to('.boy2', { transformOrigin: "500% 50% -100px",  
rotationY: -45,z: 1400 },0)



/*------------/ WEEKND ZOOM IMAGES 02 /------------*/


    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#ImgWrapper",
            scroller: ".smooth-scroll",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
        .to('#ImgWrapper #img7', { transform: 'translateZ(4500px)', }, 0)
        .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)', }, 0)
        .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)', }, 0)
        .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)', }, 0)
        .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)', }, 0)
        //.set('#ImgWrapper #img3', { opacity: 0 }, 1.5)
        .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)', }, 0)
        .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)', }, 0)
        

/* SCROLLTRIGGER LERP IMAGES - DELAY without LOCOMOTIVE SCROLL*/

const delSections = document.querySelectorAll(".delayed-section");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".inner-container"), {
    y: "100vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scroller: ".smooth-scroll",
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});

/*SCROLLTRIGGER STAGGER BLACK BOXES*/

gsap.set('.grid-element', {autoAlpha: 0, scale: 0}); 

gsap.to(".grid-element", {
  scrollTrigger: {
    trigger: ".palette",
    scroller: ".smooth-scroll",
    start: "top 70%", 
    end: "top",
    scrub: 1, 
    
  },
  scale: 1,
  autoAlpha: 1,
  stagger: {
    each: 0.1,
    from: 'start'
  }
});

/*OUTLINE TEXT OVER IMAGE MASK */

		gsap.to(".filled-text, .outline-text", {
			scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".filled-text, .outline-text", 
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1
			},
			x: 200
		})

		gsap.to(".imagex", {
			scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".imagex",
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1,
                onRefresh: ({progress, direction, isActive}) => console.log(progress, direction, isActive)

				
			},
			x: -200,

		})

/* NUMBER COUNT */

	gsap.to(".imagex", {
			scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".imagex",
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1,
				
			},
			x: -200,

		})
    

/* NUMBER COUNT from zero */
const items = document.querySelectorAll(".data");

gsap.from(items, {
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".counter-container",
				start: "top center", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
  textContent: 0,
  duration: 4,
  ease: "power1.in",
  snap: { textContent: 1 },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    },
  }
});


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/* NUMBER COUNT from some value */

var cont={val:236} , newval = 246 ;

gsap.to(cont,2,{
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".counter-container",
				start: "top 80%", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
      
val:newval,
roundProps:"val",
onUpdate:function(){
  document.getElementById("counterx").innerHTML=cont.val
}});


/* POVEĆAJ LIJEVU/DESNU STRANU ON HOVER*/
		const wrap = document.querySelector(".options-sec");
    const lft = document.querySelector(".moveleft");
    const rgt = document.querySelector(".moveright");
    
      gsap.set(lft, { width: "50%" });
      gsap.set(rgt, { width: "50%" });

    lft.addEventListener("mouseenter", () => {
      gsap.to(lft, {width: "60%" });
      gsap.to(rgt, {width: "40%" });
      
    });

    
    rgt.addEventListener("mouseenter", () => { 
      gsap.to(rgt, {width: "60%" });
      gsap.to(lft, {width: "40%" });
    
    });

    wrap.addEventListener("mouseleave", () => {
      gsap.to(lft, {width: "50%" });
      gsap.to(rgt, {width: "50%" });
     
    });
    
    
  /* rotate asterisk through whole page */
  
  /* =============================================
015  --- PROGRES LAJNA ŽUTA
================================================ */

//gsap.set(cursor, {opacity:0});
gsap.to(".asterisk", {
  scrollTrigger: {
    trigger: "#rot",
    scroller: ".smooth-scroll",
    scrub: true,
    //pin: ".asterisk",
    start: "top top",
    end: "bottom bottom",
   // onUpdate: self => textProgress.innerText = self.progress.toFixed(3) + "%"
  },
  rotate: 1440, 
//  transformOrigin: "center center", 
  ease: "none"
});

  /* =============================================
MARQUEE + SCROLLTRIGGER change direction
================================================ */

let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".rollingtext", {duration: 40}), // ugasi true i mijenja smjer
      roll2 = roll(".rollingtext02", {duration: 60}),
      roll3 = roll(".rollingtext03", {duration: 80}, true);
ScrollTrigger.create({
       /* trigger: '.cd-wrap',*/
        start: "top 30%",
        end: "bottom top",
        scroller: ".smooth-scroll",
       /*  invalidateOnRefresh: true, */
         onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
           
            gsap.to([roll1, roll2, roll3], {
                timeScale: direction, 
                overwrite: true            
            });

            
          }
        }
      });

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  const tl = gsap.timeline({
    repeat: -1,
    onReverseComplete() { 
      this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
    }
  });
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  gsap.utils.toArray(targets).forEach(el => {
    let clone = el.cloneNode(true);
    el.parentNode.appendChild(clone);
    gsap.set(clone, {position: "absolute", top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)});
    tl.to([el, clone], {xPercent: reverse ? 100 : -100, ...vars}, 0);
  });
  return tl;
}

