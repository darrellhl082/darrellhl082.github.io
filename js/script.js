 var height = $('.nav').height();
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll > height) {
         $('.nav').removeClass('nav-hide');
         $('.nav').addClass('nav-normal');




     } else if (scroll <= height) {
         $('.nav').removeClass('nav-normal');
         $('.nav').addClass('nav-hide');


     }
     position = scroll;
 });