(function($) { "use strict";


  // Preloader
  jQuery(window).on('load',function(){
    //jQuery(".preloader").fadeOut(1000);
    $(".preloader").delay(1600).fadeOut("slow");
  });


  $(document).ready(function(){	
    new WOW().init();
      // sidebar=================
  $('.mobile-menu-btn').click(function(){
    $('.mobile-main-nav').addClass('slide');
  });
  $('.close-btn').click(function(){
    $('.mobile-main-nav').removeClass('slide');
  });
});
$(document).ready(function(){
  $(".mobile-menu-item").click(function () {
      $(".mobile-submenu-home1").toggleClass("nav-open");
      $(".mobile").toggleClass("to-left");
  });
});

  // sticky navabr js
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
          $(".header-area").addClass("sticky");
      } else {
          $(".header-area").removeClass("sticky");
      }
  });

// // hero slider
// $('.brand-wrapper').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   autoplay:true,
//   autoplayTimeout:2000, //2000ms=2s
//   autoplayHoverPause: true,
//   nav: false,
//   dots: false,
//   responsive:{
//       0:{
//           items:2,
//       },
//       600:{
//           items:4
//       },
//       1000:{
//           items:6
//       }
//   }
// })

//listing-catagory
$('.listing-catagory-wraper').slick({
  centerMode: false,
  slidesToShow: 6,
  arrows: true,
  autoplay: true,
  prevArrow:'<i class="prev bx bx-left-arrow-alt"></i>',
  nextArrow:'<i class="next bx bx-right-arrow-alt"></i>',
  autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        slidesToShow: 6
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 4
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});
//Feature Listing
$('.feature-listing-slider').slick({
  centerMode: false,
  slidesToShow: 3,
  arrows: true,
  margin:50,
  // autoplay: true,
  prevArrow:'<i class="prev bx bx-left-arrow-alt"></i>',
  nextArrow:'<i class="next bx bx-right-arrow-alt"></i>',
  // autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: false,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

//User Feedback
$(document).ready(function() {
  var $swiper = $(".user-feedback-slider");
  var $bottomSlide = null; 
  var $bottomSlideContent = null;


var collectionSlider_three = new Swiper('.user-feedback-slider',{
  spaceBetween: 10,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: false,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: '.collection-next3',
    prevEl: '.collection-prev3',
  },

  breakpoints: {
    480:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    992:{ 
      slidesPerView: 2
    },
    1200:{
      slidesPerView: 2
    },
   
  }
});
});


// Latest Post slider

  var swiper = new Swiper(".latest-post-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  
}(jQuery));