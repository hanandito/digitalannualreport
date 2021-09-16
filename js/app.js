$(document).ready(function() {
  AOS.init({
    duration: 1200
   });
  $('.menu-icon').click(function() {
    $('.side-menu').addClass("active");
  })
  $('.close-menu-icon').click(function() {
    $('.side-menu').removeClass("active");
  })
});
  //  Favor
 $('.carousel-homebanner').addClass('owl-carousel owl-theme').owlCarousel({
    animateOut: 'fadeOut',
    navText: ["<img src='images/chevron-left-edge-08.png'>","<img src='images/chevron-right-edge-08.png'>"],
    animateIn: 'fadeIn',
    autoplay:false,
    autoplayTimeout: 5000,
    loop: true,
    responsive:{
     0: {
       items: 1,
       dots: true,
       nav: false,
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 1,
       dots: false,
       nav: true
     }
   }
 })
 $('.carousel-ourbusiness').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-08.png'>","<img src='images/chevron-right-square-08.png'>"],
  items:2,
  responsive:{
   0: {
     stagePadding: 30,
     items: 1,
     dots: false,
     nav: false,
     margin: 15
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
    stagePadding: 40,
     items: 2,
     dots: false,
     nav: true,
     margin: 45
   }
 }
})
$('.carousel-milestone').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
  items:2,
  responsive:{
   0: {
     items: 1,
     dots: true,
     nav: true
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false,
     nav: true
   }
 }
})
$('.carousel-mission-mobile').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
  items:2,
  responsive:{
   0: {
     items: 1,
     dots: true,
     nav: true
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false,
     nav: true
   }
 }
})
$('.carousel-bod').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  margin: 45,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
  items:2,
  responsive:{
   0: {
     stagePadding: 60,
     items: 1,
     dots: false,
     nav: false
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false,
     nav: true
   }
 }
})
$('.carousel-gallery').addClass('owl-carousel owl-theme').owlCarousel({
  loop: false,
  navText: ["<img src='images/chevron-left-square-orange-04.png'>","<img src='images/chevron-right-square-orange-04.png'>"],
  responsive:{
   0: {
     items: 1,
     dots: false,
     nav: false
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     items: 1,
     dots: false,
     nav: true
   }
 }
})
$('.carousel-mobile-projects-list').addClass('owl-carousel owl-theme').owlCarousel({
  loop:false,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: ["<img src='images/chevron-left-square-08.png'>","<img src='images/chevron-right-square-08.png'>"],
  items:2,
  responsive:{
   0: {
     items: 1,
     dots: false,
     nav: true,
     mouseDrag: false,
     touchDrag: false
   },
   600: {
     items: 1,
     nav: false
   },
   1000: {
     stagePadding: 40,
     items: 2,
     dots: false
   }
 }
})
 /*Animation: Moving Ornament on Scroll*/

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
    $('.move-topcontact').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
 // 
 var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-wrapper').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number-counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});