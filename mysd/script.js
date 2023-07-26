 $(window).scroll(function () {
     var wScroll = $(this).scrollTop();
     var heightSc = $('.ket').height() + $('.header').height() + $('.photoCon').height() + $('.about').height() + $('.join').height() + $('.eva').height();
     if (wScroll > heightSc && wScroll < heightSc + $('.photoCaptBg').height()) {
         gsap.to('.join', {
             duration: 1,
             delay: 0.2,
             y: '-100%',
             ease: 'power3InOut'

         })

     } else {
         gsap.to('.join', {
             duration: 0.8,
             delay: 0.2,
             y: 0,
             ease: 'power3InOut'

         })
     }
 })


 $(document).ready(function () {

     $('.close').click(function (e) {
         $('.appear').addClass('d-none');
         e.preventDefault();

     });


     function myFunction(x) {
         if (x.matches) { // If media query matches

             var position = $(window).scrollTop();

             // should start at 0
             var height = $('.nav-second').height() + ($('.nav-second').height() - $('.first-nav').height());
             $(window).scroll(function () {
                 var scroll = $(window).scrollTop();
                 if (scroll > position) {
                     gsap.to('.nav-second', {
                         duration: 0.5,
                         delay: 0.2,
                         y: -height - 1,
                         ease: 'power3InOut'

                     })

                 } else {
                     gsap.to('.nav-second', {
                         duration: 0.5,
                         delay: 0.2,
                         y: 0,
                         ease: 'power3Out'
                     })
                 }
                 position = scroll;
             });
         } else {
             console.log('hello');
         }
     }

     var x = window.matchMedia("(min-width: 768px)")
     myFunction(x) // Call listener function at run time
     x.addListener(myFunction) // Attach listener function on state changes
     gsap.to('.nav-second', {
         duration: 0.3,
         delay: 0.2,
         y: 0,
         ease: 'none'
     })
 });


 const slider = document.querySelectorAll(".photoLine1");
 let isDown = false;
 let startX;
 let scrollLeft;
 slider.forEach(slider => {
     slider.addEventListener("mousedown", e => {
         isDown = true;
         slider.classList.add("active");
         startX = e.pageX - slider.offsetLeft;
         scrollLeft = slider.scrollLeft;
     });
     slider.addEventListener("mouseleave", () => {
         isDown = false;
         slider.classList.remove("active");
     });
     slider.addEventListener("mouseup", () => {
         isDown = false;
         slider.classList.remove("active");
     });
     slider.addEventListener("mousemove", e => {
         if (!isDown) return;
         e.preventDefault();
         const x = e.pageX - slider.offsetLeft;
         const walk = x - startX;
         slider.scrollLeft = scrollLeft - walk;
     });
 });

 gsap.from('.navbar', {
     duration: 1.5,
     y: '-100%',
     opacity: 0,
     ease: 'bounce'
 })
 gsap.registerPlugin(TextPlugin);
 gsap.to('.header .title3', {
     duration: 1,
     delay: 1.5,
     text: 'MEMORIES'
 })
 gsap.from('.header .title2', {
     duration: 0.75,
     x: -200,
     opacity: 0,
     ease: 'back',
     delay: 0.5
 })
 gsap.from('.header .title', {
     duration: 1,
     y: -100,
     opacity: 0
 });
 const imgAppear = document.querySelectorAll('.img-appear');
 imgAppear.forEach((img) => {
     gsap.from(img, {
         duration: 1,
         x: -100,
         opacity: 0,
         delay: 2.5
     });
 })


 const galleryImage2 = document.querySelectorAll('.img-appear2');
 galleryImage2.forEach((img) => {
     img.dataset.aos = 'flip-right';
     //   img.dataset.aosDelay = i * 100;
     img.dataset.duration = 1000;
 })

 AOS.init({
     once: true
 });
