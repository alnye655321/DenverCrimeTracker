// Build Random GPS data array matching input data array length----------------
var testDataRandom = []; // empty array for random data. !!! possibly perfect random function for more random numbers !!!

  for (var i = 0; i < testData.length; i++) { // build random array of objects --> only index, lat, lon data. Save as fixed string to 7th decimal place, same as original JSON data. testData = full array of JSON objects
    testDataRandom[i] = { //random object i
      INDEX: i,
      GEO_LON: (Math.random() * (maxLon - minLon) + minLon).toFixed(7),
      GEO_LAT: (Math.random() * (maxLat - minLat) + minLat).toFixed(7)
    }
  }
//console.log(testDataRandom);
//End Build Random GPS data array matching input data array length------------

// Set Random Data Object Array nearest neighbor & near neighbor distance values
var nn = 0; //nearest neighbor - index value
var nnd = 1000000; //near neighbor - distance value !!! Metric KM !!!- set to large value 1 million km, will decrease in loop to find min distance
var maxLon = -100000000; var minLon = 0; var maxLat = 0; var minLat = 10000000; // look for min and max values to define random coordinator generator range

  for (var i = 0; i < testDataRandom.length; i++) {
    nn = 0; //reset nearest neighbor
    var nnd = 1000000; // reset nearest neighbor distance
    var index = testDataRandom[i].INDEX;
    var geoLon = testDataRandom[i].GEO_LON;
    var geoLat = testDataRandom[i].GEO_LAT;

    for (var y = 0; y < testDataRandom.length; y++) { //testing selected lat long values against all other lat long values to find nearest neighbor distance, ie. min distance. Using great circle distance formula
      if (index != testDataRandom[y].INDEX && geoLon != testDataRandom[y].GEO_LON && geoLat != testDataRandom[y].GEO_LAT) { // including lat and long conditions here will remove same data points (addresses) from search... !!! Perhaps alter in future !!!
        var geoLon1 = parseFloat(geoLon); //convert string numbers to actual numbers
        var geoLat1 = parseFloat(geoLat); //convert string numbers to actual numbers
        var geoLon2 = parseFloat(testDataRandom[y].GEO_LON); //convert string numbers to actual numbers
        var geoLat2 = parseFloat(testDataRandom[y].GEO_LAT); //convert string numbers to actual numbers
        if (geoLon1 > maxLon) { maxLon = geoLon1; } if (geoLon1 < minLon) { minLon = geoLon1; } if (geoLat1 > maxLat) { maxLat = geoLat1; } if (geoLat1 < minLat) { minLat = geoLat1; } // set min max lat/lon boundary for random data set
        var tempDist = distance(geoLon1, geoLat1, geoLon2, geoLat2);
        //console.log(testDataRandom[y].GEO_LON);
        if (tempDist < nnd) {
          nnd = tempDist;
          nn = testDataRandom[y].INDEX;
        }
      }
    }
    testDataRandom[i].nn = nn;
    testDataRandom[i].nnd = nnd;
  }
  console.log(testDataRandom);
// End Set Random Data Object Array nearest neighbor & near neighbor distance values
