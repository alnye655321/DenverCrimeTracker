function randomMinMax(maxLon, minLon, maxLat, minLat, lon, lat){ // !!! not working !!!

  if (geoLon1 > maxLon) {
    maxLon = geoLon1;
  }
  if (geoLon1 < minLon) {
     minLon = geoLon1;
   }
   if (geoLat1 > maxLat) {
      maxLat = lat;
    }
      if (geoLat1 < minLat) {
         minLat = geoLat1;
        }

}

//get set color based on decimal percentage - from green to red - hsl color can pass into google maps
function getColor(value){
    //value from 0 to 1
    var hue=((1-value)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}
console.log(getColor(.9));
// close get set color based on decimal percentage

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

//untouched google maps code
function initMap() {
  console.log('mapinit');
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 39.7392, lng: -104.9903},
    mapTypeId: 'terrain'
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
      north: 39.747287,
      south: 39.744367,
      east: -104.99192399999994,
      west: -104.99484399999994
    }
  });
}
//untouched google maps code

// New Google map from Wes
window.map;

function initMap() {

  console.log('mapinit');
  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 39.7392, lng: -104.9903},
    mapTypeId: 'terrain'
  });
}

setTimeout(function () {
  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
      north: 39.747287,
      south: 39.744367,
      east: -104.99192399999994,
      west: -104.99484399999994
    }
  });
}, 10000)
//Close New Google map from Wes

//Fill in quad crime data counts - if within gps boundary increase the counts
for (var i = 0; i < testData.length; i++) {
  var index = testData[i].INDEX;
  var geoLon = testData[i].GEO_LON;
  var geoLat = testData[i].GEO_LAT;
  var geoLonNum = parseFloat(geoLon); //convert string numbers to actual numbers
  var geoLatNum = parseFloat(geoLat); //convert string numbers to actual numbers

  for (var y = 0; y < 1; y++) { //quadData.length
    console.log('origLon'); console.log(geoLonNum); console.log('origLon');
    console.log('origLat'); console.log(geoLatNum); console.log('origLat');
    //quadData[y].crimeCount = 0; // set an initial crime count of 0, adds additional with boundary test below
    quadData[y].indexList = ''; // add the index's of each crime to the quadrent data, for verification...
    var nwLatQuadData = quadData[y].nwLat;
    var swLatQuadData = quadData[y].swLat;
    var nwLonQuadData = quadData[y].nwLon;
    var neLonQuadData = quadData[y].neLon;
console.log(nwLatQuadData); console.log(swLatQuadData); console.log(nwLonQuadData); console.log(neLonQuadData);
    if (geoLatNum < nwLatQuadData && geoLatNum > swLatQuadData && geoLonNum > nwLatQuadData && geoLonNum < neLonQuadData) {//testing if point is within quadrent boundary
      //quadData[y].crimeCount = quadData[y].crimeCount + 1; //add an additional crime to this quadrent
      quadData[y].indexList = quadData[y].indexList + ',' + index;
      console.log('xxx');
    }
  }

}

console.log(quadData);
//close Fill in quad crime data counts
