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







/* =============================================
000 - INTRO ANIMATION / SPLIT TEXT + FADE IN FADE OUT GALLERY
================================================ */

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



/* =============================================
000 - CLIPPING PATH MASK REVEAL & TEXT REVEAL  
================================================ */

var animation = gsap.timeline({defaults:{duration:2, ease: "power3.inOut"}})
animation
.fromTo(".clip", {y:200, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
{autoAlpha:1, y:0, delay:0.3, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.set(".char", {autoAlpha:1}, "<")
.from(".char", {stagger:0.02, yPercent:108}, "<0.1")




/* =============================================
001 --- SCROLLTRIGGER FOR EACH WHEN ENTER 
================================================ */
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

/* =============================================
002 - PINNING PANELS / .s-snap / panel / galdier
================================================ */

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




/* =============================================
003 - SCROLLTRIGGER FADE IN ELEMENTS
================================================ */

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
  

/* =============================================
004 - SCROLLTRIGGER BATCH - TEXT REVEAL MULTILINE / VERZIJA 1
================================================ */

gsap.set('.b-txt', {autoAlpha: 0, yPercent: 200});

ScrollTrigger.batch(".batch-text", {
scroller: ".smooth-scroll",
  onEnter: batch => {
    batch.forEach((section, i) => {
      gsap.to(section.querySelectorAll(".b-txt"), {
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

/* =============================================
004 - SCROLLTRIGGER BATCH - GALLERY
================================================ */

gsap.defaults({ease: "power3"});
gsap.set(".lazy", {autoAlpha:0, y: 100});

ScrollTrigger.batch(".lazy", {
  scroller: ".smooth-scroll",
  //interval: 5, // time window (in seconds) for batching to occur. 
  batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {autoAlpha:1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
  onLeave: batch => gsap.set(batch, {autoAlpha:0, y: -100, overwrite: true}),
  //onEnterBack: batch => gsap.to(batch, {autoAlpha:1, y: 0, stagger: 0.15, overwrite: true}),
  //onLeaveBack: batch => gsap.set(batch, {autoAlpha:0, y: 100, overwrite: true})
  // you can also define things like start, end, etc.
});


// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".lazy", {y: 0}));


/* =============================================
006 - STICKY FOOTER 
================================================ */

ScrollTrigger.create({
  trigger: "#stickywrap",
  scroller: ".smooth-scroll",
  start: "top 20%",
  end:"bottom 80%",
  pin:'#sticky',
  onEnter: () => gsap.set('#sticky', {autoAlpha:1, rotate:45}),
  onLeaveBack: () => gsap.set('#sticky', {autoAlpha:0, rotate: 270}),
});


/* =============================================
007 - SCROLLTRIGGER - onscroll smanji menu i logo / scrub
================================================ */

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



/* =============================================
007a - SHOW HIDE MENU HEADER SWITCH WITH SCROLLTRIGGER 
================================================ */


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


/* =============================================
007b - SHOW HIDE MENU HEADER SWITCH (first version from locomotive scroll github
================================================ */

locoScroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});

/*
// --- 008 / PARALAX NEK STOJI IAKO JE MOŽDA NEPOTREBNO-----------------------------------------------------------------
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



/* =============================================
009 - MENU TOGGLE FUNCTION MOVE CONTENT TO REVEAL MENU / reversed
================================================ */

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


/* =============================================
012 - OPEN FULLSCREEN VIDEO AND PLAY/PAUSE 
================================================ */

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

// --- 013 - SIMPLE SLIDER RGB  --------------------------------------------------------------------------

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










/* =============================================
015  --- PROGRES LAJNA ŽUTA
================================================ */

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





/* =============================================
019  --- YOUTUBE PLAYER ONAJ FENSI // ugašen 
================================================ */
/*
var ytdefer_ic_w=73;var ytdefer_ic_h=52;var yt_icon='<svg height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#eb3223"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>';var yt_dark_icon='<svg height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg>';function ytdefer_setup()
{var d=document;var els=d.getElementsByClassName('ytdefer');for(var i=0;i<els.length;i++)
{var e=els[i];var ds=e.getAttribute('data-src');if(!ds)
{alert("data-src missing for video");return;}
var w=e.clientWidth;var h=e.clientHeight;var dv=d.createElement('div');dv.id='ytdefer_vid'+i;dv.style.width=w+'px';dv.style.height=h+'px';dv.style.position='relative';dv.onresize=ytdefer_resize;e.appendChild(dv);var im=d.createElement('img');var res='0';if(w>480)
{res='maxresdefault';}
im.src='https://uploads-ssl.webflow.com/5e3ac0099daa812301be51d5/5f00471be68b4fa9a600ad7f_4.jpg';im.id='ytdefer_img'+i;im.style.width='100%';im.style.height='100%';im.style.objectFit='cover';im.style.position='relative';im.onclick=gen_ytdefer_clk(i);dv.appendChild(im);var bt=d.createElement('button');bt.style.backgroundImage="url(data:image/svg+xml;base64,"+window.btoa(yt_dark_icon)+")";bt.id='ytdefer_icon'+i;bt.style.position='absolute';bt.style.border='0';bt.style.backgroundColor='transparent';bt.style.left=(w/2-ytdefer_ic_w/2)+'px';bt.style.top=(h/2-ytdefer_ic_h/2)+'px';bt.style.width=ytdefer_ic_w+'px';bt.style.height=ytdefer_ic_h+'px';bt.style.pointerEvents='none';dv.appendChild(bt);im.onmouseover=gen_mouseover(bt);im.onmouseout=gen_mouseout(bt);}
if(typeof(YT)=='undefined')
{var js=d.createElement("script");js.type="text/javascript";js.src="https://www.youtube.com/player_api";d.body.appendChild(js);}
window.addEventListener('resize',ytdefer_resize);}
function ytdefer_resize()
{var d=document;var els=d.getElementsByClassName('ytdefer');for(var i=0;i<els.length;i++)
{var e=els[i];var w=e.clientWidth;var h=e.clientHeight;var dv=d.getElementById('ytdefer_vid'+i);dv.style.width=w+'px';dv.style.height=h+'px';var ic=d.getElementById('ytdefer_icon'+i);if(null!=ic)
{ic.style.left=(w/2-ytdefer_ic_w/2)+'px';ic.style.top=(h/2-ytdefer_ic_h/2)+'px';}}}
function gen_mouseout(bt)
{return function()
{bt.style.backgroundImage="url(data:image/svg+xml;base64,"+window.btoa(yt_dark_icon)+")";}}
function gen_mouseover(bt)
{return function()
{bt.style.backgroundImage="url(data:image/svg+xml;base64,"+window.btoa(yt_icon)+")";}}
function gen_ytdefer_clk(i)
{return function()
{var d=document;var el=d.getElementById('ytdefer_vid'+i);var vid_id=el.parentNode.getAttribute('data-src');var player=new YT.Player(el.id,{height:el.style.height,width:el.style.width,videoId:vid_id,playerVars:{'color':'white','enablejsapi':1, 'controls':1,'autoplay':1,'mute':1, 'modestbranding': 0},events:{'onReady':function(ev){ev.target.playVideo()}}});}}
    window.addEventListener('load', ytdefer_setup);
*/


/* =============================================
020  --- YOUTUBE CROP + FULLSCREEN bez YT pizdarija 
================================================ */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    host: "https://www.youtube.com",
    /* no need to specify player 
    size here since it is handled 
    by the player-size div */
    videoId: "jkWWJ9W5300",
    playerVars: {
      enablejsapi: 1,
      playsinline: 1,
     /* autoplay:1,
      mute:0,*/
      start: 0,
      disablekb: 0
    },
    events: {
      onStateChange: onPlayerStateChange,
       // call this function when player is ready to use
     'onReady': onPlayerReady
    }
  });
}


function onPlayerStateChange(event) {
  console.log("player state: " + player.getPlayerState());
}

function updateVideoId() {
  let videoId = document.getElementById("videoId").value;
  player.loadVideoById(videoId, -1);
}

function stopVideo() {
  player.stopVideo();
}

// BOTUNI ZA PLAY STOP
 // 3. The API calls this function when the video player is ready.
    function onPlayerReady(event) {
        $('#play-button').click(function(event){
            player.playVideo();
        });
    }

    // 4. The API calls this function when the player's state changes.
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            $('#play-button').click(function(event){
            player.pauseVideo();
 					   });
        }
        else {
            $('#play-button').click(function(event){
                player.playVideo();
            });
        } 
    }


/* ODVOJENI PLAY STOP BOTUNI
function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });
     var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });
}
*/

// --- 021 - MENU ANIMATION - TL - PLAY REVERSE HOVER UTILSTO ARRAY ------------------------------------------------------------------

gsap.utils.toArray(".link-wrapper").forEach(container => {
  let 
  /*info = container.querySelector(".information"),*/
     linkcolor = container.querySelector(".main-link"),
     supscript = container.querySelector(".superscript"),
      tl = gsap.timeline({ paused: true });
  
  tl
  /*.to(info, { yPercent: 20 })*/
    .from(supscript, { ease: "power2.inOut", duration: 0.2, y: 20, autoAlpha:0, color: "#12335B", overwrite:"all" }, 0)
   .to(linkcolor, { ease: "power2.inOut", duration: 0.2, autoAlpha:0.7}, 0);
  
  
  container.addEventListener("mouseenter", () => tl.play() );
  container.addEventListener("mouseleave", () => tl.reverse() );
});

// --- 022 - MENU ANIMATION - TL - UNDERLINE ------------------------------------------------------------------

// Mouseenter function
function enterAnimation(link, e, index) {
  link.tl.tweenFromTo(0, "midway");
}
// Mouseleave function
function leaveAnimation(link, e) {
  link.tl.play();
}
// Animations variables
let workLinkUnderlineAnimEnter;
let workLinkUnderlineAnimLeave;

// Get all links
let workLinks = document.querySelectorAll(".line-wrapper");

workLinks.forEach((link, index, value) => {
  
  let underline = link.querySelector(".underline");
    link.tl = gsap.timeline({paused: true});
  
  link.tl.fromTo(underline, {width: "0%", left: "0%",}, 
  {width: "100%", duration: 0.3, ease: "power1.out",});
  		
  link.tl.add("midway");
  
  link.tl.fromTo(underline, {width: "100%", left: "0%",}, 
  {width: "0%", left: "100%", duration: 0.3, ease: "power1.in", immediateRender: false});

  // Mouseenter
  link.addEventListener("mouseenter", (e) => {
    enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseleave", (e) => {
    leaveAnimation(link, e);
  });

});
	
// --- 022 - MENU ANIMATION - TL - PLAY REVERSE HOVER UTILSTO ARRAY CHANGE COLOR ------------------------------------------------------------------

//gsap.set(".information", {yPercent: 100});

gsap.utils.toArray(".small-link-wrapper").forEach(container => {
  let 
  /*info = container.querySelector(".information"),*/
     linkcolor = container.querySelector(".linko"),
      tl = gsap.timeline({ paused: true });
  
  tl
  /*.to(info, { yPercent: 20 })*/
    .to(linkcolor, { xPercent:3, ease: "power2.inOut", duration: 0.2, color: "#ff0000" }, 0);
  
  
  
  container.addEventListener("mouseenter", () => tl.play() );
  container.addEventListener("mouseleave", () => tl.reverse() );
});




// SWIPERI

// SWIPER 01 ---

// HORIZONTAL SWIPER DRAGGABLE

 var swipera = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
	   autoplay: {
    delay: 3000,
disableOnInteraction: false,
  },
	 freeMode: true,
        //resistanceRatio:0.2,
        slidesPerView: 1,
	 
	// centeredSlides: 0,
      //  longSwipes:true,
      //  longSwipesRatio:0.5,
       // touchRatio:5,
	 loop: true,
	 grabCursor: false,
        //loopFillGroupWithBlank: false,
       // paginationClickable: true,
        spaceBetween: 30,
       // mousewheelControl: true,
       // parallax: true,
       // preloadImages: true,
        //updateOnImagesReady: true,
       // centeredSlides: true,
       //slidesOffsetBefore: 100,
        //speed: 400,
        breakpoints: {
                        500: {
                            spaceBetween: 30,
                            loopedSlides: 3,
                            slidesPerView: 1
                        },
                        1e3: {
                            loopedSlides: 3,
                            spaceBetween: 85,
                            slidesPerView: 1.1
                        },
                        1200: {
                            spaceBetween: 100,
                            slidesPerView: 1.2
                        }
                    }

    });

$('swiper-slide').on('mousedown touchstart', function(event) {
  gsap.to('.swiper-slide', {scale: 0.9, duration: 0.4});
});

$('.swiper-slide').on('mouseup touchend', function(event) {
 gsap.to('.swiper-slide', {scale:1, duration: 0.4, delay:0.2});
});


	






/* =============================================
023  --- SIMPLE FADE IN / FADE OUT / AUTOALPHA 023 simple fadein fadeout 
================================================ */

var action = gsap.timeline({repeat:-1, defaults:{duration:0.8, ease:'none'}})

.to('.fadein-slide', {autoAlpha:1, stagger:5})
.to('.fadein-slide', {autoAlpha:0, stagger:5}, 4)






/* =============================================
026 --- HORIZONTAL SCROLL WITH CHILD ANIMATION 
================================================ */

let sections = gsap.utils.toArray(".h-scroll--slide");
let container = document.querySelector(".h-scroll--wrapper");
let pinner = document.querySelector(".h-scroll--");
let elements = gsap.utils.toArray(document.querySelectorAll(".h-scroll--slide > *"));

let timeline = gsap.timeline();

timeline.to(sections, {
    x: () =>
        -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
	      scroller: ".smooth-scroll",
        //  pin:'.horiz-pin',
	   // pin: true,
	    pin: pinner,
        scrub: 1,
        overwrite: "auto",
        trigger: pinner,
        end: () => container.scrollWidth - document.documentElement.clientWidth
    }
});

let scrollTriggerTimeline = gsap.timeline();

elements.forEach((element) => {
    scrollTriggerTimeline.from(element, {
        yPercent: 50,
        opacity: 0,
        overwrite: "auto",
        scrollTrigger: {
	scroller: ".smooth-scroll",
            scrub: 1,
            start: () => element.parentNode.offsetLeft - window.innerWidth,
            end: () =>
                element.parentNode.offsetLeft -
                window.innerWidth +
                element.parentNode.getBoundingClientRect().width
        }
    });
});

elements.forEach((element) => {
    scrollTriggerTimeline.to(element, {
        yPercent: 50,
        opacity: 0,
        overwrite: "auto",
        scrollTrigger: {
	scroller: ".smooth-scroll",
            scrub: 1,
            immediateRender: false,
            start: () =>
                element.parentNode.offsetLeft -
                element.parentNode.getBoundingClientRect().width / 2,
            end: () =>
                element.parentNode.offsetLeft +
                element.parentNode.getBoundingClientRect().width
        }
    });
});


