//animation at top of landing - onload

gsap.from(".slide-in-left", {duration: 1.5, x: -200, opacity: 0, stagger: .3,});
gsap.from(".slide-in-right", {duration: 1.5, x: 500, opacity: 0, stagger: .3,});


gsap.registerPlugin(ScrollTrigger);

gsap.from(".real-duck-img",{
    scrollTrigger: {
        trigger: ".about-me-content",
        //start: "top center",
        //end: "top 100px",
        //scrub: true,
       // markers: true
},
    duration: 2, 
    x: 500,
    opacity: 0, 
    stagger: .3,
    ease: "power2.out",

});

gsap.from(".about-me-content",{
    scrollTrigger: ".about-me-content",
    duration: 2, 
    x: -500,
    opacity: 0, 
    stagger: .3,
    ease: "power2.out"

});