// Page
  $(document).ready(function() {
    AOS.init({
      duration: 1200
    });
    $('nav .burger').click(function() {
      $('.sideNav').addClass("active");
    })
    $('.closeSideNav').click(function() {
      $('.sideNav').removeClass("active");
    })
    $('.menu-icon').click(function() {
      $('.side-menu').addClass("active");
    })
    $('.close-menu-icon').click(function() {
      $('.side-menu').removeClass("active");
    })
  });

//  Carousel

$('.carousel-most').addClass('owl-carousel owl-theme').owlCarousel({
  navText: ["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
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
     nav: true,
     loop: true
   }
 }
})
  

// Animation: Moving Ornament on Scroll
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

// Uncaught TypeError: Cannot read properties of undefined (reading 'top')
/*
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
*/

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


// ===================================
// ==========FETCH API================
// ===================================

// Data Covid 19 first step in Indonesia
  function fetchCFI() {
    fetch('https://pass-prox.herokuapp.com/https://data.covid19.go.id/public/api/update.json')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapCFI => {
        console.log(dataWrapCFI);

        // ============ Display Indonesia Covid 19 Cases 1 ============
        const getDataCFI1 = dataWrapCFI.update.harian[0];
        const displayDataCFI1 = `${getDataCFI1.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI1').insertAdjacentHTML('afterbegin', displayDataCFI1);
        
        // ============ Display Indonesia Covid 19 Cases 2 ============
        const getDataCFI2 = dataWrapCFI.update.harian[18];
        const displayDataCFI2 = `${getDataCFI2.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI2').insertAdjacentHTML('afterbegin', displayDataCFI2);
        
        // ============ Display Indonesia Covid 19 Cases 3 ============
        const getDataCFI3 = dataWrapCFI.update.harian[44];
        const displayDataCFI3 = `${getDataCFI3.jumlah_positif_kum.value}`;
        document.querySelector('#iCFI3').insertAdjacentHTML('afterbegin', displayDataCFI3);
        
        // ============ Display Indonesia Covid 19 Cases 4 ============
        const getDataCFI4 = dataWrapCFI.update;
        const displayDataCFI4 = `${getDataCFI4.total.jumlah_positif}`;
        document.querySelector('#iCFI4').insertAdjacentHTML('afterbegin', displayDataCFI4);
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchCFI();

// Data Map
  function fetchDataMap() {
    fetch('https://pass-prox.herokuapp.com/https://data.covid19.go.id/public/api/prov.json')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapMap => {
        console.log(dataWrapMap);

        // ============ Display Default Point 1 ============
        const getDataDP1 = dataWrapMap.list_data[21];
        const displayDataDP1 = `
          <span class="covPercent"> ${getDataDP1.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP1.key}</p>
        `;
        document.querySelector('#iMD1').insertAdjacentHTML('afterbegin', displayDataDP1);

        // ============ Display Default Point 2 ============
        const getDataDP2 = dataWrapMap.list_data[7];
        const displayDataDP2 = `
          <span class="covPercent">${getDataDP2.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP2.key}</p>
        `;
        document.querySelector('#iMD2').insertAdjacentHTML('afterbegin', displayDataDP2);

        // ============ Display Default Point 3 ============
        const getDataDP3 = dataWrapMap.list_data[11];
        const displayDataDP3 = `
          <span class="covPercent">${getDataDP3.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP3.key}</p>
        `;
        document.querySelector('#iMD3').insertAdjacentHTML('afterbegin', displayDataDP3);

        // ============ Display Default Point 4 ============
        const getDataDP4 = dataWrapMap.list_data[14];
        const displayDataDP4 = `
          <span class="covPercent">${getDataDP4.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP4.key}</p>
        `;
        document.querySelector('#iMD4').insertAdjacentHTML('afterbegin', displayDataDP4);

        // ============ Display Default Point 5 ============
        const getDataDP5 = dataWrapMap.list_data[6];
        const displayDataDP5 = `
          <span class="covPercent">${getDataDP5.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP5.key}</p>
        `;
        document.querySelector('#iMD5').insertAdjacentHTML('afterbegin', displayDataDP5);

        // ============ Display Default Point 6 ============
        const getDataDP6 = dataWrapMap.list_data[0];
        const displayDataDP6 = `
          <span class="covPercent">${getDataDP6.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP6.key}</p>
        `;
        document.querySelector('#iMD6').insertAdjacentHTML('afterbegin', displayDataDP6);

        // ============ Display Default Point 7 ============
        const getDataDP7 = dataWrapMap.list_data[1];
        const displayDataDP7 = `
          <span class="covPercent">${getDataDP7.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP7.key}</p>
        `;
        document.querySelector('#iMD7').insertAdjacentHTML('afterbegin', displayDataDP7);

        // ============ Display Default Point 8 ============
        const getDataDP8 = dataWrapMap.list_data[2];
        const displayDataDP8 = `
          <span class="covPercent">${getDataDP8.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP8.key}<p>
        `;
        document.querySelector('#iMD8').insertAdjacentHTML('afterbegin', displayDataDP8);

        // ============ Display Default Point 9 ============
        const getDataDP9 = dataWrapMap.list_data[3];
        const displayDataDP9 = `
          <span class="covPercent">${getDataDP9.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP9.key}</p>
        `;
        document.querySelector('#iMD9').insertAdjacentHTML('afterbegin', displayDataDP9);

        // ============ Display Default Point 10 ============
        const getDataDP10 = dataWrapMap.list_data[5];
        const displayDataDP10 = `
          <span class="covPercent">${getDataDP10.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP10.key}</p>
        `;
        document.querySelector('#iMD10').insertAdjacentHTML('afterbegin', displayDataDP10);

        // ============ Display Default Point 11 ============
        const getDataDP11 = dataWrapMap.list_data[8];
        const displayDataDP11 = `
          <span class="covPercent">${getDataDP11.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP11.key}</p>
        `;
        document.querySelector('#iMD11').insertAdjacentHTML('afterbegin', displayDataDP11);

        // ============ Display Default Point 12 ============
        const getDataDP12 = dataWrapMap.list_data[26];
        const displayDataDP12 = `
          <span class="covPercent">${getDataDP12.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP12.key}</p>
        `;
        document.querySelector('#iMD12').insertAdjacentHTML('afterbegin', displayDataDP12);

        // ============ Display Default Point 13 ============
        const getDataDP13 = dataWrapMap.list_data[26];
        const displayDataDP13 = `
          <span class="covPercent">${getDataDP13.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP13.key}</p>
        `;
        document.querySelector('#iMD13').insertAdjacentHTML('afterbegin', displayDataDP13);

        // ============ Display Default Point 14 ============
        const getDataDP14 = dataWrapMap.list_data[26];
        const displayDataDP14 = `
          <span class="covPercent">${getDataDP14.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP14.key}</p>
        `;
        document.querySelector('#iMD14').insertAdjacentHTML('afterbegin', displayDataDP14);

        // ============ Display Default Point 15 ============
        const getDataDP15 = dataWrapMap.list_data[13];
        const displayDataDP15 = `
          <span class="covPercent">${getDataDP15.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP15.key}</p>
        `;
        document.querySelector('#iMD15').insertAdjacentHTML('afterbegin', displayDataDP15);

        // ============ Display Default Point 16 ============
        const getDataDP16 = dataWrapMap.list_data[20];
        const displayDataDP16 = `
          <span class="covPercent">${getDataDP16.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP16.key}</p>
        `;
        document.querySelector('#iMD16').insertAdjacentHTML('afterbegin', displayDataDP16);

        // ============ Display Default Point 17 ============
        const getDataDP17 = dataWrapMap.list_data[19];
        const displayDataDP17 = `
          <span class="covPercent">${getDataDP17.jumlah_kasus}/span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP17.key}</p>
        `;
        document.querySelector('#iMD17').insertAdjacentHTML('afterbegin', displayDataDP17);

        // ============ Display Default Point 18 ============
        const getDataDP18 = dataWrapMap.list_data[12];
        const displayDataDP18 = `
          <span class="covPercent">${getDataDP18.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP18.key}</p>
        `;
        document.querySelector('#iMD18').insertAdjacentHTML('afterbegin', displayDataDP18);

        // ============ Display Default Point 19 ============
        const getDataDP19 = dataWrapMap.list_data[4];
        const displayDataDP19 = `
          <span class="covPercent">${getDataDP19.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP19.key}</p>
        `;
        document.querySelector('#iMD19').insertAdjacentHTML('afterbegin', displayDataDP19);

        // ============ Display Default Point 20 ============
        const getDataDP20 = dataWrapMap.list_data[22];
        const displayDataDP20 = `
          <span class="covPercent">${getDataDP20.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP20.key}</p>
        `;
        document.querySelector('#iMD20').insertAdjacentHTML('afterbegin', displayDataDP20);

        // ============ Display Default Point 21 ============
        const getDataDP21 = dataWrapMap.list_data[23];
        const displayDataDP21 = `
          <span class="covPercent">${getDataDP21.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP21.key}</p>
        `;
        document.querySelector('#iMD21').insertAdjacentHTML('afterbegin', displayDataDP21);

        // ============ Display Default Point 22 ============
        const getDataDP22 = dataWrapMap.list_data[18];
        const displayDataDP22 = `
          <span class="covPercent">${getDataDP22.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP22.key}</p>
        `;
        document.querySelector('#iMD22').insertAdjacentHTML('afterbegin', displayDataDP22);

        // ============ Display Default Point 23 ============
        const getDataDP23 = dataWrapMap.list_data[9];
        const displayDataDP23 = `
          <span class="covPercent">${getDataDP23.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP23.key}</p>
        `;
        document.querySelector('#iMD23').insertAdjacentHTML('afterbegin', displayDataDP23);

        // ============ Display Default Point 24 ============
        const getDataDP24 = dataWrapMap.list_data[29];
        const displayDataDP24 = `
          <span class="covPercent">${getDataDP24.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP24.key}</p>
        `;
        document.querySelector('#iMD24').insertAdjacentHTML('afterbegin', displayDataDP24);

        // ============ Display Default Point 25 ============
        const getDataDP25 = dataWrapMap.list_data[30];
        const displayDataDP25 = `
          <span class="covPercent">${getDataDP25.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP25.key}</p>
        `;
        document.querySelector('#iMD25').insertAdjacentHTML('afterbegin', displayDataDP25);

        // ============ Display Default Point 26 ============
        const getDataDP26 = dataWrapMap.list_data[30];
        const displayDataDP26 = `
          <span class="covPercent">${getDataDP26.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP26.key}</p>
        `;
        document.querySelector('#iMD26').insertAdjacentHTML('afterbegin', displayDataDP26);

        // ============ Display Default Point 27 ============
        const getDataDP27 = dataWrapMap.list_data[32];
        const displayDataDP27 = `
          <span class="covPercent">${getDataDP27.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP27.key}</p>
        `;
        document.querySelector('#iMD27').insertAdjacentHTML('afterbegin', displayDataDP27);

        // ============ Display Default Point 28 ============
        const getDataDP28 = dataWrapMap.list_data[24];
        const displayDataDP28 = `
          <span class="covPercent">${getDataDP28.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP28.key}</p>
        `;
        document.querySelector('#iMD28').insertAdjacentHTML('afterbegin', displayDataDP28);

        // ============ Display Default Point 29 ============
        const getDataDP29 = dataWrapMap.list_data[24];
        const displayDataDP29 = `
          <span class="covPercent">${getDataDP29.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP29.key}</p>
        `;
        document.querySelector('#iMD29').insertAdjacentHTML('afterbegin', displayDataDP29);

        // ============ Display Default Point 30 ============
        const getDataDP30 = dataWrapMap.list_data[27];
        const displayDataDP30 = `
          <span class="covPercent">${getDataDP30.jumlah_kasus}</span>
          <span class="covDesc">Positive<br> Cases</span>
          <p>Province : ${getDataDP30.key}</p>
        `;
        document.querySelector('#iMD30').insertAdjacentHTML('afterbegin', displayDataDP30);

      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchDataMap();

// Data Map 2
  function fetchDataMap2() {
    Promise.all([
    fetch("https://pass-prox.herokuapp.com/https://data.covid19.go.id/public/api/update.json")
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      }),
      fetch("https://pass-prox.herokuapp.com/https://data.covid19.go.id/public/api/pemeriksaan-vaksinasi.json")
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
    ])
      .then(([dataWrapMap2, dataWrapMap3]) => {
        console.log(dataWrapMap2, dataWrapMap3);

        // ============ Display Indonesia Covid 19 ============
        const getDataPMS = dataWrapMap2.update;
        const getDataPMA = dataWrapMap2.data;
        const getDataPMB = dataWrapMap3.vaksinasi;
        const displayDataPMS = `
          <span class="num">${getDataPMA.total_spesimen}</span>
          <span class="desc">Total Positive Cases in Indonesia</span>
          <span class="num">${getDataPMB.total.jumlah_vaksinasi_1}</span>
          <span class="desc">Total Fully Vaccinated in Indonesia</span>
        `;
        document.querySelector('#iTD').insertAdjacentHTML('afterbegin', displayDataPMS);
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchDataMap2();

// Data Public Debt
  charPD();
  async function charPD() {
    const data = await fetchDataPD();
    const ctx = document.getElementById('chartPD').getContext('2d');
    const chartPD = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.xs,
        datasets: [{
          label: 'Value of GDP',
          data: data.ys,
          backgroundColor: ['#00adee'],
          borderColor: ['rgba(0, 173, 238, 0.5'],
          pointBackgroundColor: ['#00adee'],
          pointBorderColor: ['#00adee'],
          borderWidth: 10,
          pointBorderWidth: 20,
          pointHitRadius: 20,
          pointHoverBorderWidth: 20
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#fff'
            }
          },
          tooltip: {
            callbacks: {
              labelColor: function(context) {
                return {
                  borderColor: '#00adee',
                  backgroundColor: '#00adee',
                  borderWidth: 2,
                  borderRadius: 2,
                };
              },
              labelTextColor: function(context) {
                return '#fff';
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function(value, index, values) {
                return value + '';
              }
            }
          }
        }
      }
    });
  }
  async function fetchDataPD() {
    const xs = [];
    const ys = [];
    const response = await fetch('https://api.tradingeconomics.com/historical/country/indonesia/indicator/gdp?c=guest:guest&format=json');
    const data = await response.json();
    data.forEach(row => {
      const columns = row.DateTime;
      const year = columns.substring(0, 4);
      xs.push(year);
      const value = row.Value;
      ys.push(value);
      console.log(year, value);
    });
    return { xs, ys };
  }

// Data Unemployment Rate
  var ctx2 = document.getElementById('chartUR').getContext('2d');
  var chartUR = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Become Unemployed', 'Working Reduced Hours Due to COVID-19'],
      datasets: [{
        label: 'The Working Age Population',
        data: [5100000, 24000000],
        backgroundColor: ['#00adee'],
        borderColor: ['#00adee'],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// Data Gross Domestic Product (GDP)
  var ctx3 = document.getElementById('chartGDP').getContext('2d');
  var chartGDP = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: [2019, 2020, 2021, 2022],
      datasets: [{
        label: 'Percent of GDP',
        data: [5.0, -2.2, 4.4, 4.8],
        backgroundColor: ['#00adee'],
        borderColor: ['#fff'],
        pointBackgroundColor: ['#00adee'],
        pointBorderColor: ['#00adee'],
        borderWidth: 2,
        pointBorderWidth: 10,
        pointHitRadius: 10,
        pointHoverBorderWidth: 10
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#00adee'
          }
        },
        tooltip: {
          callbacks: {
            labelColor: function(context) {
              return {
                borderColor: '#00adee',
                backgroundColor: '#00adee',
                borderWidth: 2,
                borderRadius: 2,
              };
            },
            labelTextColor: function(context) {
              return '#fff';
            }
          }
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function(value, index, values) {
              return value + '';
            }
          }
        }
      }
    }
  });

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
    $('.move-bottom').css({
      'transform':'translateY('+(windowTop) * 0.1 +'px)'
    });
  });

  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.image-header').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


$(window).scroll(function(){
  var scroll =  $(document).height() - $(window).height() - $(window).scrollTop();
  $(".ninth-section").css({
    backgroundSize:(100 + scroll/5) + "%"
  })
}
)
