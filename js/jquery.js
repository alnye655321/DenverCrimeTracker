$(document).ready(function() {

//example request: http://www.nyedesign.org/DenverCrimeAPI/index.php?day=friday&hour=05
  $('form').on('submit', function(event){
    event.preventDefault();
    var hourAPI = $('#hourAPI').val();
    //set constants from advanced options form
    var sqMeterBoxUser = parseInt($('#sqMeterBox').val());
    if (sqMeterBoxUser < 100 || sqMeterBoxUser > 2000) { var SQUAREmeterBox = 0.00292; } //set default value to 250 sq m if user input is weird
    else { var SQUAREmeterBox = sqMeterBoxUser * 0.00001168; }

    //close constants from advanced options form
    $.ajax({
    method: 'GET',
    dataType: 'json',
    url: 'http://www.nyedesign.org/DenverCrimeAPI/index.php?day=friday&hour=' + hourAPI
    }).done(function (result){
      var testData = result.data;
//After DPD API Call------------------------------------------------------------
window.map = new google.maps.Map(document.getElementById('map'), {
  zoom: 14,
  center: {lat: 39.7392, lng: -104.9903},
  styles: [
    {
      featureType: 'all',
      stylers: [
        { saturation: -80 }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ],
  mapTypeId: 'terrain'
});

//functions---------------------------------------------------------------------
//start distance between 2 gps coordinates
function distance(lon1,lat1,lon2,lat2){

  // convert coordinates to radians
  var lat1Rad = deg2rad(lat1);
  var lon1Rad = deg2rad(lon1);
  var lat2Rad = deg2rad(lat2);
  var lon2Rad = deg2rad(lon2);

  // find the differences between the coordinates
  var dlat = lat2Rad - lat1Rad;
  var dlon = lon2Rad - lon1Rad;

  // great circle math
  var a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(dlon/2),2);
  var c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
  //var dk = c * 6373; // great circle distance in km
  return c * 6373; // great circle distance in km
}
// close distance between 2 gps coordinates

// convert degrees to radians
function deg2rad(deg) {
  var rad = deg * Math.PI/180; // radians = degrees * pi/180
  return rad;
}

function rad2deg(radians) {
  var rad = radians * 180 / Math.PI;
  return rad;
}

function percentCalc (value,total){
  return (value / total) * 100;
}


// round to the nearest 1/1000
function round(x) {
  return Math.round( x * 1000) / 1000;
}

//Construct .25km or 250m quadrents covering Denver, or max GPS bounday-----------------------------
  function boundBuilder(lon, lat) {

    var nwLon = lon;
    var nwLat = lat;
    var seLon = lon + SQUAREmeterBox;
    var seLat = lat - SQUAREmeterBox;
    var swLon = lon;
    var swLat = lat - SQUAREmeterBox;
    var neLon = lon + SQUAREmeterBox;
    var neLat = lat;
//250 m should be 0.00292 in above value

  return [nwLon,nwLat,seLon,seLat,swLon,swLat,neLon,neLat];

  }
//Close Construct .25km or 250m quadrents covering Denver, or max GPS bounday-----------------------

//median function for array of numbers - returns average if even length array
function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}
//close median function

//average function - returns average from array of numbers
function average(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total / arr.length;
}
//close average function

//get set color based on decimal percentage - from green to red - hsl color can pass into google maps
function getColor(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}
// close get set color based on decimal percentage

//close functions---------------------------------------------------------------

// main logic-------------------------------------------------------------------

// Set Data Object Array
var maxLon = -100000000; var minLon = 0; var maxLat = 0; var minLat = 10000000; // look for min and max values to define random coordinator generator range

  for (var i = 0; i < testData.length; i++) {
    var index = testData[i].INDEX;
    var geoLon = testData[i].GEO_LON;
    var geoLat = testData[i].GEO_LAT;
    testData[i].multiCount = 0;

    for (var y = 0; y < testData.length; y++) { //testing selected lat long values against all other lat long values to find nearest neighbor distance, ie. min distance. Using great circle distance formula
      if (index != testData[y].INDEX && geoLon == testData[y].GEO_LON && geoLat == testData[y].GEO_LAT) { //count the number of crimes at same GPS data point - used for intensity later
        testData[i].multiCount = testData[i].multiCount +1;
      }
      if (index != testData[y].INDEX) { // skip the same record in the loop
        var geoLon1 = parseFloat(geoLon); //convert string numbers to actual numbers
        var geoLat1 = parseFloat(geoLat); //convert string numbers to actual numbers
        var geoLon2 = parseFloat(testData[y].GEO_LON); //convert string numbers to actual numbers
        var geoLat2 = parseFloat(testData[y].GEO_LAT); //convert string numbers to actual numbers
        if (geoLon1 > maxLon) { maxLon = geoLon1; } if (geoLon1 < minLon) { minLon = geoLon1; } if (geoLat1 > maxLat) { maxLat = geoLat1; } if (geoLat1 < minLat) { minLat = geoLat1; } // set min max lat/lon boundary for building quadrant array
      }
    }
  }
// End Set Data Object Array

  if(maxLat > 39.791087) { maxLat = 39.791087; } // set max range of denver city limits
  if(minLat < 39.653177) { minLat = 39.653177; }
  if(minLon < -105.053244) { minLon = -105.053244; }
  if(maxLon > -104.825191) { maxLon = -104.825191; }

// calc area of all data - return iteration number to fill quadrents------------
var dist1 = distance(minLon,maxLat,maxLon,maxLat);
var dist2 = distance(minLon,maxLat,minLon,minLat);
var iAmount = (dist1 * dist2) / (0.25 * 0.25); //get the total sq km of area and divide by 0.25km^2 (250m^2) quadrents to get amount of quadrents to create
//end calc area of all data - return iteration number to fill quadrents---------

//Construct .25km or 250m quadrents covering Denver, or max GPS bounday(could be neighborhood or less)
var quadData = []; // array of quadrent objects
var newLon = minLon; // -105.048462
var newLat = maxLat; // 39.7945448
var rowCnt = 1; // used as a multiplier to shift down to next level of latitude once we reach the end of a quadrent row

for (var i = 0; i < iAmount; i++) { //iAmount generated above from distance formula

  var returnArr = boundBuilder(newLon, newLat); // to start min lon and max lat ==> NW corner newLon, newLat
  quadData[i] = {nwLon:0};
  quadData[i].crimeCount = 0; // set an initial crime count of 0, adds additional with boundary test below
  quadData[i].indexList = ''; // add the index's of each crime to the quadrent data, for verification...
  quadData[i].percentageMax = 0; // set initial property of the percentage of max crime quadrent
  quadData[i].allOtherCrimes = 0; //set initial counts for types of crimes
  quadData[i].aggravatedAssault = 0; //set initial counts for types of crimes...
  quadData[i].autoTheft = 0; quadData[i].burglary = 0; quadData[i].drugAlcohol = 0;
  quadData[i].larceny = 0; quadData[i].publicDisorder = 0; quadData[i].robbery = 0; quadData[i].theftFromVehicle = 0;
  quadData[i].nwLon = returnArr[0]; quadData[i].nwLat = returnArr[1]; quadData[i].seLon = returnArr[2];
  quadData[i].seLat = returnArr[3];  quadData[i].swLon = returnArr[4];  quadData[i].swLat = returnArr[5];
  quadData[i].neLon = returnArr[6];  quadData[i].neLat = returnArr[7];

  quadData[i].allData = returnArr[1] + ', ' + returnArr[0] + ' ' + returnArr[3] + ', ' + returnArr[2] + ' ' + returnArr[5] + ', ' + returnArr[4] + ' ' + returnArr[7] + ', ' + returnArr[6];

  if (quadData[i].neLon > maxLon ) { //if we exceed max distance east (maxLon) then reset to furthest west (minLon) and drop 250m in latitude
    var newLat = maxLat - SQUAREmeterBox * rowCnt;
    var newLon = minLon;
    rowCnt++;
  }
  else { //keep building quadrents in eastward direction
    var newLon = returnArr[6];
    var newLat = returnArr[7];
  }

}
//End Construct .25km or 250m quadrents covering Denver, or max GPS bounday-----

//Fill in quad crime data counts - if within gps boundary increase the counts---
for (var i = 0; i < testData.length; i++) {
  var index = testData[i].INDEX;
  var crimeType = testData[i].OFFENSE_CATEGORY_ID;
  var geoLon = testData[i].GEO_LON;
  var geoLat = testData[i].GEO_LAT;
  var geoLonNum = parseFloat(geoLon); //convert string numbers to actual numbers
  var geoLatNum = parseFloat(geoLat); //convert string numbers to actual numbers

  for (var y = 0; y < quadData.length; y++) { //quadData.length

    var nwLonQuadData = quadData[y].nwLon;
    var nwLatQuadData = quadData[y].nwLat;
    var seLonQuadData = quadData[y].seLon;
    var seLatQuadData = quadData[y].seLat;

    if (nwLonQuadData <= geoLonNum && geoLonNum <= seLonQuadData && nwLatQuadData >= geoLatNum && geoLatNum >= seLatQuadData) { //testing if point is within quadrent boundary
      quadData[y].crimeCount = quadData[y].crimeCount + 1; //add an additional crime to this quadrent
      quadData[y].indexList = quadData[y].indexList + ',' + index;
      //start checking for crime types
      if(crimeType == 'aggravated-assault' || crimeType == 'murder'){ quadData[y].aggravatedAssault++; } //set crime counts to quadrant data
      else if(crimeType == 'auto-theft'){ quadData[y].autoTheft++; }
      else if(crimeType == 'burglary'){ quadData[y].burglary++; }
      else if(crimeType == 'drug-alcohol'){ quadData[y].drugAlcohol++; }
      else if(crimeType == 'larceny'){ quadData[y].larceny++; }
      else if(crimeType == 'public-disorder'){ quadData[y].publicDisorder++; }
      else if(crimeType == 'robbery'){ quadData[y].robbery++; }
      else if(crimeType == 'theft-from-motor-vehicle'){ quadData[y].theftFromVehicle++; }
      else { quadData[y].allOtherCrimes++; }
      //end checking for crime types
    }
  }

}
//close Fill in quad crime data counts------------------------------------------

//Set crime as percentage of highest crime count per quandrent------------------
quadData.sort(function(a, b) { // sort by descending crime count --> quadData[0].crimeCount = highest amount of crime in quadrent
    return b.crimeCount - a.crimeCount;
});

var highCrimeCount = quadData[1].crimeCount; // !!! tweaking [+1] to avoid abnormally high LoDo max !!!
var CrimeCountArray = []; //push crime count values to array to find median, avg etc. later

for (var i = 0; i < quadData.length; i++) {
  if(quadData[i].crimeCount == 0) { break; } // stop loop once we start getting to empty data
  quadData[i].percentageMax = (quadData[i].crimeCount / highCrimeCount); //set percentage of max crime quadrent
  CrimeCountArray.push(quadData[i].crimeCount); //push crime count to array
}
//Close Set crime as percentage of highest crime count per quandrent------------
var average = average(CrimeCountArray);
var run = true; //running the google map

//Draw Quadrant Rectangles with hotspot coloring--------------------------------
var rectangles = [];
function checkVariable() {

    for (var i = 0; i < quadData.length; i++) { //for loop to draw multiple rectangles
      if(quadData[i].crimeCount == 2) { break; } //when we get to low crime counts break the loop
      var color = getColor(quadData[i].percentageMax);
      if(quadData[i].percentageMax > 1) {color = 'hsl(0,100%,50%)'} //based on +1 tweaking to highCrimeCount above, setting values over 100% to highest intensity color
      rectangles[i] = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map: map,
        bounds: {
          north: quadData[i].neLat,
          south: quadData[i].seLat,
          east:  quadData[i].neLon,
          west:  quadData[i].nwLon
        }
      });
      //start adding event listners - still in loop for each quadrant box
      let rect = rectangles[i];
      let quadTemp = quadData[i];
      rectangles[i].addListener('click', function() {
        var ne = rect.getBounds().getNorthEast();
        //var sw = rectangle.getBounds().getSouthWest();
        let total = quadTemp.allOtherCrimes + quadTemp.aggravatedAssault + quadTemp.autoTheft + quadTemp.burglary + quadTemp.drugAlcohol + quadTemp.larceny + quadTemp.publicDisorder + quadTemp.robbery + quadTemp.theftFromVehicle;
        var contentString = '<div id="container" style="min-width: 600px; height: 400px; max-width: 600px; margin: 0 auto"></div>';

        // Set the info window's content and position.
        infoWindow.setContent(contentString);
        infoWindow.setPosition(ne);

        infoWindow.open(map);
        makeChart(percentCalc(quadTemp.allOtherCrimes,total), percentCalc(quadTemp.aggravatedAssault,total), percentCalc(quadTemp.autoTheft,total), percentCalc(quadTemp.burglary,total), percentCalc(quadTemp.drugAlcohol,total), percentCalc(quadTemp.larceny,total), percentCalc(quadTemp.publicDisorder,total), percentCalc(quadTemp.robbery,total), percentCalc(quadTemp.theftFromVehicle,total), quadTemp.crimeCount );
      });
      //close adding event listners
    }//close for loop for drawing multiple rectangles
}

setTimeout(checkVariable,1000);
//Close Draw Quadrant Rectangles with hotspot coloring--------------------------

// end main logic---------------------------------------------------------------
//CloseAfter DPD API Call
    });
  });//Close form submit

  function displayColorLegend(value){ //build color legend display
      //value from 0 to 1
      var hue=((1-value)*120).toString(10);
      return ["hsl(",hue,",100%,50%)"].join("");
  }
  var len=20;
  for(var i=0; i<=len; i++){
      var value=i/len;
      var d=document.createElement('div');
      //d.textContent="value="+value;
      d.style.backgroundColor=displayColorLegend(value);
      d.style.width = "4.6%";
      d.style.height = "50px";
      d.style.cssFloat = "left";
      document.getElementById("colorLegend").appendChild(d);

  }

});//close Doc Ready


// New Google map (Initial Load)------------------------------------------------
window.map;

function initMap() {

  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 39.7392, lng: -104.9903},
    styles: [
      {
        featureType: 'all',
        stylers: [
          { saturation: -80 }
        ]
      },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { hue: '#00ffee' },
          { saturation: 50 }
        ]
      },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ],
    mapTypeId: 'terrain'
  });
  infoWindow = new google.maps.InfoWindow();

}

//Chart Generator Function -----------------------------------------------------
function makeChart (allOtherCrimes,aggravatedAssault,autoTheft,burglary,drugAlcohol,larceny,publicDisorder,robbery,theftFromVehicle, crimeTots) {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Crime Quadrant Data'
        },
        subtitle: {
            text: 'Total Crime Count: ' + crimeTots
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Of Total',
            colorByPoint: true,
            data: [{
                name: 'All Other Crimes',
                y: allOtherCrimes
            }, {
                name: 'Aggravated Assault',
                y: aggravatedAssault,
                selected: true
            }, {
                name: 'GTA',
                y: autoTheft
            }, {
                name: 'Burglary',
                y: burglary
            }, {
                name: 'Drug / Alcohol',
                y: drugAlcohol
            }, {
                name: 'Larceny',
                y: larceny
            }, {
                name: 'Public Disorder',
                y: publicDisorder

            }, {
                name: 'Robbery',
                y: robbery

            }, {
                name: 'Theft From Vehicle',
                y: theftFromVehicle

            }]
        }]
    });
}
