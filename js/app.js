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

//  Favor
  

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
    fetch('https://api.covid19api.com/dayone/country/indonesia/status/confirmed')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapCFI => {
        console.log(dataWrapCFI);

        // ============ Display Indonesia Covid 19 Cases 1 ============
        const getDataCFI1 = dataWrapCFI[0];
        const displayDataCFI1 = `${getDataCFI1.Cases}`;
        document.querySelector('#iCFI1').insertAdjacentHTML('afterbegin', displayDataCFI1);
        
        // ============ Display Indonesia Covid 19 Cases 2 ============
        const getDataCFI2 = dataWrapCFI[18];
        const displayDataCFI2 = `${getDataCFI2.Cases}`;
        document.querySelector('#iCFI2').insertAdjacentHTML('afterbegin', displayDataCFI2);
        
        // ============ Display Indonesia Covid 19 Cases 3 ============
        const getDataCFI3 = dataWrapCFI[44];
        const displayDataCFI3 = `${getDataCFI3.Cases}`;
        document.querySelector('#iCFI3').insertAdjacentHTML('afterbegin', displayDataCFI3);
        
        // ============ Display Indonesia Covid 19 Cases 4 ============
        const getDataCFI4 = dataWrapCFI[597];
        const displayDataCFI4 = `${getDataCFI4.Cases}`;
        document.querySelector('#iCFI4').insertAdjacentHTML('afterbegin', displayDataCFI4);
      })
      .catch(error => {
        console.log(error);
      });
  }
  fetchCFI();

// Data Map
  function fetchDataMap() {
    fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapMap => {
        console.log(dataWrapMap.features);

        // ============ Display Default Point 1 ============
        const getDataDP1 = dataWrapMap.features[0];
        const displayDataDP1 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP1.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP1.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD1').insertAdjacentHTML('afterbegin', displayDataDP1);

        // ============ Display Default Point 2 ============
        const getDataDP2 = dataWrapMap.features[3];
        const displayDataDP2 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP2.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP2.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD2').insertAdjacentHTML('afterbegin', displayDataDP2);

        // ============ Display Default Point 3 ============
        const getDataDP3 = dataWrapMap.features[2];
        const displayDataDP3 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP3.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP3.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD3').insertAdjacentHTML('afterbegin', displayDataDP3);

        // ============ Display Default Point 4 ============
        const getDataDP4 = dataWrapMap.features[5];
        const displayDataDP4 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP4.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP4.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD4').insertAdjacentHTML('afterbegin', displayDataDP4);

        // ============ Display Default Point 5 ============
        const getDataDP5 = dataWrapMap.features[15];
        const displayDataDP5 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP5.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP5.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD5').insertAdjacentHTML('afterbegin', displayDataDP5);

        // ============ Display Default Point 6 ============
        const getDataDP6 = dataWrapMap.features[10];
        const displayDataDP6 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP6.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP6.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD6').insertAdjacentHTML('afterbegin', displayDataDP6);

        // ============ Display Default Point 7 ============
        const getDataDP7 = dataWrapMap.features[11];
        const displayDataDP7 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP7.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP7.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD7').insertAdjacentHTML('afterbegin', displayDataDP7);

        // ============ Display Default Point 8 ============
        const getDataDP8 = dataWrapMap.features[12];
        const displayDataDP8 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP8.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP8.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD8').insertAdjacentHTML('afterbegin', displayDataDP8);

        // ============ Display Default Point 9 ============
        const getDataDP9 = dataWrapMap.features[13];
        const displayDataDP9 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP9.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP9.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD9').insertAdjacentHTML('afterbegin', displayDataDP9);

        // ============ Display Default Point 10 ============
        const getDataDP10 = dataWrapMap.features[14];
        const displayDataDP10 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP10.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP10.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD10').insertAdjacentHTML('afterbegin', displayDataDP10);

        // ============ Display Default Point 11 ============
        const getDataDP11 = dataWrapMap.features[16];
        const displayDataDP11 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP11.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP11.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD11').insertAdjacentHTML('afterbegin', displayDataDP11);

        // ============ Display Default Point 12 ============
        const getDataDP12 = dataWrapMap.features[17];
        const displayDataDP12 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP12.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP12.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD12').insertAdjacentHTML('afterbegin', displayDataDP12);

        // ============ Display Default Point 13 ============
        const getDataDP13 = dataWrapMap.features[18];
        const displayDataDP13 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP13.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP13.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD13').insertAdjacentHTML('afterbegin', displayDataDP13);

        // ============ Display Default Point 14 ============
        const getDataDP14 = dataWrapMap.features[18];
        const displayDataDP14 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP14.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP14.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD14').insertAdjacentHTML('afterbegin', displayDataDP14);

        // ============ Display Default Point 15 ============
        const getDataDP15 = dataWrapMap.features[18];
        const displayDataDP15 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP15.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP15.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD15').insertAdjacentHTML('afterbegin', displayDataDP15);

        // ============ Display Default Point 16 ============
        const getDataDP16 = dataWrapMap.features[19];
        const displayDataDP16 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP16.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP16.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD16').insertAdjacentHTML('afterbegin', displayDataDP16);

        // ============ Display Default Point 17 ============
        const getDataDP17 = dataWrapMap.features[20];
        const displayDataDP17 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP17.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP17.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD17').insertAdjacentHTML('afterbegin', displayDataDP17);

        // ============ Display Default Point 18 ============
        const getDataDP18 = dataWrapMap.features[21];
        const displayDataDP18 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP18.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP18.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD18').insertAdjacentHTML('afterbegin', displayDataDP18);

        // ============ Display Default Point 19 ============
        const getDataDP19 = dataWrapMap.features[22];
        const displayDataDP19 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP19.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP19.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD19').insertAdjacentHTML('afterbegin', displayDataDP19);

        // ============ Display Default Point 20 ============
        const getDataDP20 = dataWrapMap.features[23];
        const displayDataDP20 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP20.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP20.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD20').insertAdjacentHTML('afterbegin', displayDataDP20);

        // ============ Display Default Point 21 ============
        const getDataDP21 = dataWrapMap.features[24];
        const displayDataDP21 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP21.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP21.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD21').insertAdjacentHTML('afterbegin', displayDataDP21);

        // ============ Display Default Point 22 ============
        const getDataDP22 = dataWrapMap.features[25];
        const displayDataDP22 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP22.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP22.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD22').insertAdjacentHTML('afterbegin', displayDataDP22);

        // ============ Display Default Point 23 ============
        const getDataDP23 = dataWrapMap.features[26];
        const displayDataDP23 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP23.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP23.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD23').insertAdjacentHTML('afterbegin', displayDataDP23);

        // ============ Display Default Point 24 ============
        const getDataDP24 = dataWrapMap.features[27];
        const displayDataDP24 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP24.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP24.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD24').insertAdjacentHTML('afterbegin', displayDataDP24);

        // ============ Display Default Point 25 ============
        const getDataDP25 = dataWrapMap.features[30];
        const displayDataDP25 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP25.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP25.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD25').insertAdjacentHTML('afterbegin', displayDataDP25);

        // ============ Display Default Point 26 ============
        const getDataDP26 = dataWrapMap.features[30];
        const displayDataDP26 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP26.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP26.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD26').insertAdjacentHTML('afterbegin', displayDataDP26);

        // ============ Display Default Point 27 ============
        const getDataDP27 = dataWrapMap.features[31];
        const displayDataDP27 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP27.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP27.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD27').insertAdjacentHTML('afterbegin', displayDataDP27);

        // ============ Display Default Point 28 ============
        const getDataDP28 = dataWrapMap.features[32];
        const displayDataDP28 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP28.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP28.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD28').insertAdjacentHTML('afterbegin', displayDataDP28);

        // ============ Display Default Point 29 ============
        const getDataDP29 = dataWrapMap.features[32];
        const displayDataDP29 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP29.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP29.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
        `;
        document.querySelector('#iMD29').insertAdjacentHTML('afterbegin', displayDataDP29);

        // ============ Display Default Point 30 ============
        const getDataDP30 = dataWrapMap.features[33];
        const displayDataDP30 = `
          <span class="covPercent">XX,X%</span>
          <span class="covDesc">of Indonesia’s Population</span>
          <p>Province : ${getDataDP30.attributes.Provinsi}
          <p>Positive Cases : ${getDataDP30.attributes.Kasus_Posi}</p>
          <p>Vaccinated : XXX,XXX</p>
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
    fetch('https://covid19.mathdro.id/api/countries/ID/confirmed')
      .then(response => {
        if (!response.ok) {
          throw Error('ERROR');
        }
        return response.json();
      })
      .then(dataWrapMap2 => {
        console.log(dataWrapMap2);

        // ============ Display Indonesia Covid 19 ============
        const getDataPMS = dataWrapMap2[0];
        const displayDataPMS = `
          <span class="num">${getDataPMS.active}</span>
          <span class="desc">Total Positive Cases in Indonesia</span>
          <span class="num">XXXXXXXX</span>
          <span class="desc">Total Fully Vaccinated in Indonesia</span>
          <span class="num">${getDataPMS.confirmed}</span>
          <span class="desc">Total Confirmed Cases in Indonesia</span>
          <span class="num">${getDataPMS.active}</span>
          <span class="desc">Total Active Cases in Indonesia</span>
          <span class="num">${getDataPMS.deaths}</span>
          <span class="desc">Total Deaths in Indonesia</span>
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