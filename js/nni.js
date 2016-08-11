// Set Data Object Array nearest neighbor & near neighbor distance values---------------------------
var nn = 0; //nearest neighbor - index value
var nnd = 1000000; //near neighbor - distance value !!! Metric KM !!!- set to large value 1 million km, will decrease in loop to find min distance
var maxLon = -100000000; var minLon = 0; var maxLat = 0; var minLat = 10000000; // look for min and max values to define random coordinator generator range

  for (var i = 0; i < testData.length; i++) {
    nn = 0; //reset nearest neighbor
    var nnd = 1000000; // reset nearest neighbor distance
    var index = testData[i].INDEX;
    var geoLon = testData[i].GEO_LON;
    var geoLat = testData[i].GEO_LAT;
    testData[i].multiCount = 0;

    for (var y = 0; y < testData.length; y++) { //testing selected lat long values against all other lat long values to find nearest neighbor distance, ie. min distance. Using great circle distance formula
      if (index != testData[y].INDEX && geoLon == testData[y].GEO_LON && geoLat == testData[y].GEO_LAT) { //count the number of crimes at same GPS data point - used for intensity later
        testData[i].multiCount = testData[i].multiCount +1;
      }
      if (index != testData[y].INDEX && geoLon != testData[y].GEO_LON && geoLat != testData[y].GEO_LAT) { // including lat and long conditions here will remove same data points (addresses) from search... !!! Perhaps alter in future !!!
        var geoLon1 = parseFloat(geoLon); //convert string numbers to actual numbers
        var geoLat1 = parseFloat(geoLat); //convert string numbers to actual numbers
        var geoLon2 = parseFloat(testData[y].GEO_LON); //convert string numbers to actual numbers
        var geoLat2 = parseFloat(testData[y].GEO_LAT); //convert string numbers to actual numbers
        if (geoLon1 > maxLon) { maxLon = geoLon1; } if (geoLon1 < minLon) { minLon = geoLon1; } if (geoLat1 > maxLat) { maxLat = geoLat1; } if (geoLat1 < minLat) { minLat = geoLat1; } // set min max lat/lon boundary for random data set
        var tempDist = distance(geoLon1, geoLat1, geoLon2, geoLat2);
        //console.log(testData[y].GEO_LON);
        if (tempDist < nnd) {
          nnd = tempDist;
          nn = testData[y].INDEX;
        }
      }
    }
    testData[i].nn = nn;
    testData[i].nnd = nnd;
  }
  //console.log(testData);
  console.log(testData.length);
// End Set Data Object Array nearest neighbor & near neighbor distance values-----------------------
