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


<h1>Denver Crime Tracker</h1>
<div class="row">
<form>
  <div class="form-group">
   <label for="dayAPI">Select Day:</label>
   <select class="form-control" id="dayAPI">
     <option>monday</option>
     <option>tuesday</option>
     <option>wednesday</option>
     <option>thursday</option>
     <option>friday</option>
     <option>saturday</option>
     <option>sunday</option>
   </select>
 </div>
  <div class="form-group">
   <label for="hourAPI">Select Hour:</label>
   <select class="form-control" id="hourAPI">
     <option>00</option>
     <option>01</option>
     <option>02</option>
     <option>03</option>
     <option>04</option>
     <option>05</option>
     <option>06</option>
     <option>07</option>
     <option>08</option>
     <option>09</option>
     <option>10</option>
     <option>11</option>
     <option>12</option>
     <option>13</option>
     <option>14</option>
     <option>15</option>
     <option>16</option>
     <option>17</option>
     <option>18</option>
     <option>19</option>
     <option>20</option>
     <option>21</option>
     <option>22</option>
     <option>23</option>
   </select>
 </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
</div>

//Draw Quadrant Rectangles with hotspot coloring----------------------------------------------------
var rectangles = [];
function checkVariable() {

  if(run==true){
    console.log(quadData);
    for (var i = 0; i < quadData.length; i++) { //for loop to draw multiple rectangles
      if(quadData[i].crimeCount == 2) { break; } //when we get to low crime counts break the loop
      var color = getColor(quadData[i].percentageMax);
      if(quadData[i].percentageMax > 1) {color = 'hsl(0,100%,50%)'} //based on +1 tweaking to highCrimeCount above, setting values over 100% to highest intensity color
      console.log(color);
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
    }//close for loop for drawing multiple rectangles
  }

}

setTimeout(checkVariable,1000); //check if run variable is set after every second
//Close Draw Quadrant Rectangles with hotspot coloring----------------------------------------------


// New Google map (Initial Load)--------------------------------------------------------------------
window.map;

function initMap() {

  console.log('mapinit');
  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 39.7392, lng: -104.9903},
    mapTypeId: 'terrain'
  });
}
//close new google map

//correct event listner adding before close of for loop

let rect = rectangles[i];
rectangles[i].addListener('click', function() {
  var ne = rect.getBounds().getNorthEast();
  //var sw = rectangle.getBounds().getSouthWest();
console.log(rect);
  var contentString = '<b>Rectangle moved.</b><br>';

  // Set the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(ne);

  infoWindow.open(map);
});

//close event listner adding before close of for loop
