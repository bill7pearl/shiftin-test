tailwind.config = {
    theme: {
        extend: {
            
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.to(".logo", {y: 0, opacity: 1, duration: 2, ease: "power1.inOut"})
  .to(".header", {y: 0, opacity: 1, duration: 2, ease: "power1.inOut"})
  
  .to(".right-lantern", {y: 0, x: 0,  duration: 2, ease: "power1.inOut"})
  .to(".left-lantern", {y: 0, x: 0,  duration: 2, ease: "power1.inOut"}, "<")
  .to(".hero-left-img", {x: 0, opacity: 1, duration: 2, ease: "power1.inOut"}, "<")
  .to(".hero-right-img", {x: 0, opacity: 1, duration: 2, ease: "power1.inOut"}, "<")

  .to(".right-lantern", {x: 50, rotate: 0, duration: 2, ease: "power1.inOut"})
  .to(".left-lantern", {x: -50, rotate: 0, duration: 2, ease: "power1.inOut"}, "<")
  .to(".hero-text1", {y: 100, duration: 2, ease: "power1.inOut"}, "<")
  .to(".hero-text2", {y: 100, duration: 2.2, ease: "power1.inOut"}, "<")

  .to(".steps-section", {
    y: () => window.innerWidth <= 768 ? -100 : -160,
    duration: 2,
    ease: "back.out(1.5)"
  })
  .to(".animate-arrow-down", {
    y: () => window.innerWidth <= 768 ? 5 : 10,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut"
  })

  ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom+=300px top",
  pin: true,
  pinSpacing: false,
  scrub: 1,
  markers: false
});

/*const tlFade = gsap.timeline({
    scrollTrigger: {
        trigger: ".steps-section",
        start: "top+=10px bottom",
        scrub: 1,
        pin: '.fade-on-scroll',
        pinSpacing: false,
        markers: true
    }
});
tlFade.to(".fade-on-scroll", {
    scale: 1.5,
    ease: 'power1.in'
});
*/

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".steps-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  }
});

tl2.to([".lanterns", ".logo"], {
  y: -400,
  ease: "power1.out",
  })

const path = document.getElementById('Path_170');
const hoverText = document.querySelector('.hover-text');
const mapContainer = document.querySelector('.map-container');

path.addEventListener('mouseenter', () => {
    path.style.fill = 'red';
    hoverText.style.display = 'block';
    });

mapContainer.addEventListener('mousemove', (e) => {
    if (hoverText.style.display === 'block') {
        const rect = mapContainer.getBoundingClientRect();
        const hoverRect = hoverText.getBoundingClientRect();
        hoverText.style.left = (e.clientX - rect.left - hoverRect.width/2) + 'px';
        hoverText.style.top = (e.clientY - rect.top - hoverRect.height - 10) + 'px';
        }
    });

 path.addEventListener('mouseleave', () => {
    path.style.fill = '';
    hoverText.style.display = 'none';
    });
});