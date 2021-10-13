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

// Go Top
$(document).ready(function(){
  $(function () {
    $('a#gotop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 2000);
      return false;
    });
  });
});



function fetchData() {
  fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(response => {
      if (!response.ok) {
        throw Error('ERROR');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.features);

      // ============ Display Loop Data ============
      const html = data.features.map(covid => {
        return `
        <div class='wrapDataCovidAPI'>
          <p class='mb-0'>Provinsi : ${covid.attributes.Provinsi}</p>
          <p class='mb-0'>Kasus Positif : ${covid.attributes.Kasus_Posi}</p>
          <p class='mb-0'>Kasus Sembuh : ${covid.attributes.Kasus_Semb}</p>
          <p class='mb-0'>Kasus Meninggal : ${covid.attributes.Kasus_Meni}</p>
        </div>
        `;
      })
      .join('');
      console.log(html);
      document.querySelector('#targetCovidAPILoop').insertAdjacentHTML('afterbegin', html);

      // ============ Display Single Data ============
      const getData = data.features[10];
      const displayData = `
        <div class='wrapDataCovidAPI'>
          <p class='mb-0'>Provinsi : ${getData.attributes.Provinsi}</p>
          <p class='mb-0'>Kasus Positif : ${getData.attributes.Kasus_Posi}</p>
          <p class='mb-0'>Kasus Sembuh : ${getData.attributes.Kasus_Semb}</p>
          <p class='mb-0'>Kasus Meninggal : ${getData.attributes.Kasus_Meni}</p>
        </div>
      `;
      console.log(displayData);
      document.querySelector('#targetCovidAPISingle').insertAdjacentHTML('afterbegin', displayData);
    })
    .catch(error => {
      console.log(error);
    });
}
fetchData();