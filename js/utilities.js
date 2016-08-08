(function() {

  'use strict';

  console.log('test');

  var testData = [
    {
      "INDEX": 0,
      "INCIDENT_ID": "201364162",
      "OFFENSE_ID": "201364162220400",
      "OFFENSE_CODE": "2204",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "burglary-residence-no-force",
      "OFFENSE_CATEGORY_ID": "burglary",
      "FIRST_OCCURRENCE_DATE": "2013-02-08 05:29:59",
      "LAST_OCCURRENCE_DATE": "2013-02-08 15:30:00",
      "REPORTED_DATE": "2013-02-08 19:44:00",
      "INCIDENT_ADDRESS": "18841 E 44TH PL",
      "GEO_LON": "-104.7678055",
      "GEO_LAT": "39.7774937",
      "DISTRICT_ID": "5",
      "PRECINCT_ID": "513",
      "NEIGHBORHOOD_ID": "gateway-green-valley-ranch"
    },
    {
      "INDEX": 1,
      "INCIDENT_ID": "2014116870",
      "OFFENSE_ID": "2014116870570700",
      "OFFENSE_CODE": "5707",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "criminal-trespassing",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2014-03-07 05:00:00",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2014-03-07 07:00:59",
      "INCIDENT_ADDRESS": "1719 E 19TH AVE",
      "GEO_LON": "-104.9668141",
      "GEO_LAT": "39.7464602",
      "DISTRICT_ID": "6",
      "PRECINCT_ID": "622",
      "NEIGHBORHOOD_ID": "city-park-west"
    },
    {
      "INDEX": 2,
      "INCIDENT_ID": "2014143835",
      "OFFENSE_ID": "2014143835570700",
      "OFFENSE_CODE": "5707",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "criminal-trespassing",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2014-03-21 05:00:00",
      "LAST_OCCURRENCE_DATE": "2014-03-21 05:10:00",
      "REPORTED_DATE": "2014-03-21 06:18:59",
      "INCIDENT_ADDRESS": "5538 N ABILENE ST",
      "GEO_LON": "-104.8267245",
      "GEO_LAT": "39.7945448",
      "DISTRICT_ID": "5",
      "PRECINCT_ID": "512",
      "NEIGHBORHOOD_ID": "montbello"
    },
    {
      "INDEX": 3,
      "INCIDENT_ID": "2014143842",
      "OFFENSE_ID": "2014143842299900",
      "OFFENSE_CODE": "2999",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "criminal-mischief-other",
      "OFFENSE_CATEGORY_ID": "public-disorder",
      "FIRST_OCCURRENCE_DATE": "2014-03-21 05:25:00",
      "LAST_OCCURRENCE_DATE": "2014-03-21 05:35:00",
      "REPORTED_DATE": "2014-03-21 05:35:00",
      "INCIDENT_ADDRESS": "1705 N FEDERAL BLVD",
      "GEO_LON": "-105.0257001",
      "GEO_LAT": "39.7442168",
      "DISTRICT_ID": "1",
      "PRECINCT_ID": "121",
      "NEIGHBORHOOD_ID": "west-colfax"
    },
    {
      "INDEX": 4,
      "INCIDENT_ID": "20136001941",
      "OFFENSE_ID": "20136001941239900",
      "OFFENSE_CODE": "2399",
      "OFFENSE_CODE_EXTENSION": "1",
      "OFFENSE_TYPE_ID": "theft-bicycle",
      "OFFENSE_CATEGORY_ID": "larceny",
      "FIRST_OCCURRENCE_DATE": "2013-01-25 05:00:00",
      "LAST_OCCURRENCE_DATE": "2013-01-25 15:00:00",
      "REPORTED_DATE": "2013-02-26 00:17:59",
      "INCIDENT_ADDRESS": "1550 PLATTE ST",
      "GEO_LON": "-105.0083776",
      "GEO_LAT": "39.7569606",
      "DISTRICT_ID": "1",
      "PRECINCT_ID": "113",
      "NEIGHBORHOOD_ID": "highland"
    },
    {
      "INDEX": 5,
      "INCIDENT_ID": "2013621876",
      "OFFENSE_ID": "2013621876220400",
      "OFFENSE_CODE": "2204",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "burglary-residence-no-force",
      "OFFENSE_CATEGORY_ID": "burglary",
      "FIRST_OCCURRENCE_DATE": "2013-12-27 05:00:00",
      "LAST_OCCURRENCE_DATE": "2013-12-27 05:04:59",
      "REPORTED_DATE": "2013-12-27 16:21:59",
      "INCIDENT_ADDRESS": "420 W 12TH AVE",
      "GEO_LON": "-104.9936537",
      "GEO_LAT": "39.7351036",
      "DISTRICT_ID": "6",
      "PRECINCT_ID": "611",
      "NEIGHBORHOOD_ID": "civic-center"
    },
    {
      "INDEX": 6,
      "INCIDENT_ID": "2013526637",
      "OFFENSE_ID": "2013526637501600",
      "OFFENSE_CODE": "5016",
      "OFFENSE_CODE_EXTENSION": "1",
      "OFFENSE_TYPE_ID": "violation-of-court-order",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2013-11-01 05:00:00",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2013-11-01 06:15:59",
      "INCIDENT_ADDRESS": "4300 BLOCK W VIRGINIA AVE",
      "GEO_LON": "-105.0434674",
      "GEO_LAT": "39.7080687",
      "DISTRICT_ID": "4",
      "PRECINCT_ID": "412",
      "NEIGHBORHOOD_ID": "westwood"
    },
    {
      "INDEX": 7,
      "INCIDENT_ID": "2016107384",
      "OFFENSE_ID": "2016107384356200",
      "OFFENSE_CODE": "3562",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "drug-marijuana-possess",
      "OFFENSE_CATEGORY_ID": "drug-alcohol",
      "FIRST_OCCURRENCE_DATE": "2016-02-19 05:10:00",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2016-02-19 05:10:00",
      "INCIDENT_ADDRESS": "13TH ST / ARAPAHOE ST",
      "GEO_LON": "-104.9992966",
      "GEO_LAT": "39.7450656",
      "DISTRICT_ID": "6",
      "PRECINCT_ID": "611",
      "NEIGHBORHOOD_ID": "cbd"
    },
    {
      "INDEX": 8,
      "INCIDENT_ID": "201660546",
      "OFFENSE_ID": "201660546549900",
      "OFFENSE_CODE": "5499",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "traf-other",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2016-01-29 05:48:59",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2016-01-29 06:17:00",
      "INCIDENT_ADDRESS": "00 BLOCK S FEDERAL BLVD",
      "GEO_LON": "-105.0251083",
      "GEO_LAT": "39.7197514",
      "DISTRICT_ID": "4",
      "PRECINCT_ID": "411",
      "NEIGHBORHOOD_ID": "barnum"
    },
    {
      "INDEX": 9,
      "INCIDENT_ID": "2015529103",
      "OFFENSE_ID": "2015529103131500",
      "OFFENSE_CODE": "1315",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "aggravated-assault",
      "OFFENSE_CATEGORY_ID": "aggravated-assault",
      "FIRST_OCCURRENCE_DATE": "2015-09-11 05:00:00",
      "LAST_OCCURRENCE_DATE": "2015-09-11 05:29:59",
      "REPORTED_DATE": "2015-09-12 13:34:59",
      "INCIDENT_ADDRESS": "E 52ND AVE / N VASQUEZ BLVD",
      "GEO_LON": "-104.9416515",
      "GEO_LAT": "39.7909071",
      "DISTRICT_ID": "2",
      "PRECINCT_ID": "212",
      "NEIGHBORHOOD_ID": "elyria-swansea"
    },
    {
      "INDEX": 10,
      "INCIDENT_ID": "2015417347",
      "OFFENSE_ID": "2015417347131500",
      "OFFENSE_CODE": "1315",
      "OFFENSE_CODE_EXTENSION": "2",
      "OFFENSE_TYPE_ID": "menacing-felony-w-weap",
      "OFFENSE_CATEGORY_ID": "aggravated-assault",
      "FIRST_OCCURRENCE_DATE": "2015-07-24 05:00:00",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2015-07-24 06:40:59",
      "INCIDENT_ADDRESS": "1600 BLOCK MARKET ST",
      "GEO_LON": "-104.9976339",
      "GEO_LAT": "39.7502992",
      "DISTRICT_ID": "6",
      "PRECINCT_ID": "612",
      "NEIGHBORHOOD_ID": "union-station"
    },
    {
      "INDEX": 11,
      "INCIDENT_ID": "2013563421",
      "OFFENSE_ID": "2013563421131300",
      "OFFENSE_CODE": "1313",
      "OFFENSE_CODE_EXTENSION": "2",
      "OFFENSE_TYPE_ID": "assault-dv",
      "OFFENSE_CATEGORY_ID": "other-crimes-against-persons",
      "FIRST_OCCURRENCE_DATE": "2013-11-22 05:49:59",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2013-11-22 06:52:00",
      "INCIDENT_ADDRESS": "3452 N BRYANT ST",
      "GEO_LON": "-105.0186378",
      "GEO_LAT": "39.7654227",
      "DISTRICT_ID": "1",
      "PRECINCT_ID": "113",
      "NEIGHBORHOOD_ID": "highland"
    },
    {
      "INDEX": 12,
      "INCIDENT_ID": "2013563421",
      "OFFENSE_ID": "2013563421299900",
      "OFFENSE_CODE": "2999",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "criminal-mischief-other",
      "OFFENSE_CATEGORY_ID": "public-disorder",
      "FIRST_OCCURRENCE_DATE": "2013-11-22 05:49:59",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2013-11-22 06:52:00",
      "INCIDENT_ADDRESS": "3452 N BRYANT ST",
      "GEO_LON": "-105.0186378",
      "GEO_LAT": "39.7654227",
      "DISTRICT_ID": "1",
      "PRECINCT_ID": "113",
      "NEIGHBORHOOD_ID": "highland"
    },
    {
      "INDEX": 13,
      "INCIDENT_ID": "2013563422",
      "OFFENSE_ID": "2013563422549900",
      "OFFENSE_CODE": "5499",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "traf-other",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2013-11-22 05:35:00",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2013-11-22 06:26:00",
      "INCIDENT_ADDRESS": "E 52ND AVE / N CROWN BLVD",
      "GEO_LON": "-104.8246444",
      "GEO_LAT": "39.7906621",
      "DISTRICT_ID": "5",
      "PRECINCT_ID": "512",
      "NEIGHBORHOOD_ID": "montbello"
    },
    {
      "INDEX": 14,
      "INCIDENT_ID": "2013575514",
      "OFFENSE_ID": "2013575514239900",
      "OFFENSE_CODE": "2399",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "theft-other",
      "OFFENSE_CATEGORY_ID": "larceny",
      "FIRST_OCCURRENCE_DATE": "2013-11-29 05:00:00",
      "LAST_OCCURRENCE_DATE": "2013-11-29 06:00:00",
      "REPORTED_DATE": "2013-11-29 13:57:59",
      "INCIDENT_ADDRESS": "4760 E EVANS AVE",
      "GEO_LON": "-104.9322724",
      "GEO_LAT": "39.6778582",
      "DISTRICT_ID": "3",
      "PRECINCT_ID": "322",
      "NEIGHBORHOOD_ID": "goldsmith"
    },
    {
      "INDEX": 15,
      "INCIDENT_ID": "20136000608",
      "OFFENSE_ID": "20136000608230500",
      "OFFENSE_CODE": "2305",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "theft-items-from-vehicle",
      "OFFENSE_CATEGORY_ID": "theft-from-motor-vehicle",
      "FIRST_OCCURRENCE_DATE": "2013-01-18 05:45:00",
      "LAST_OCCURRENCE_DATE": "2013-01-18 05:45:00",
      "REPORTED_DATE": "2013-01-18 11:22:00",
      "INCIDENT_ADDRESS": "86 N GRANT ST",
      "GEO_LON": "-104.9834394",
      "GEO_LAT": "39.7180357",
      "DISTRICT_ID": "3",
      "PRECINCT_ID": "311",
      "NEIGHBORHOOD_ID": "speer"
    },
    {
      "INDEX": 16,
      "INCIDENT_ID": "2013586704",
      "OFFENSE_ID": "2013586704521200",
      "OFFENSE_CODE": "5212",
      "OFFENSE_CODE_EXTENSION": "1",
      "OFFENSE_TYPE_ID": "weapon-by-prev-offender-powpo",
      "OFFENSE_CATEGORY_ID": "all-other-crimes",
      "FIRST_OCCURRENCE_DATE": "2013-12-06 05:30:59",
      "LAST_OCCURRENCE_DATE": "0000-00-00 00:00:00",
      "REPORTED_DATE": "2013-12-06 05:30:59",
      "INCIDENT_ADDRESS": "4400 BLK E ILIFF AVE",
      "GEO_LON": "-104.9358971",
      "GEO_LAT": "39.6750974",
      "DISTRICT_ID": "3",
      "PRECINCT_ID": "313",
      "NEIGHBORHOOD_ID": "university-hills"
    },
    {
      "INDEX": 17,
      "INCIDENT_ID": "20136008907",
      "OFFENSE_ID": "20136008907299900",
      "OFFENSE_CODE": "2999",
      "OFFENSE_CODE_EXTENSION": "1",
      "OFFENSE_TYPE_ID": "criminal-mischief-mtr-veh",
      "OFFENSE_CATEGORY_ID": "public-disorder",
      "FIRST_OCCURRENCE_DATE": "2013-09-06 05:35:00",
      "LAST_OCCURRENCE_DATE": "2013-09-06 09:34:59",
      "REPORTED_DATE": "2013-09-06 09:40:59",
      "INCIDENT_ADDRESS": "1350 N LAFAYETTE ST",
      "GEO_LON": "-104.9703716",
      "GEO_LAT": "39.7378232",
      "DISTRICT_ID": "6",
      "PRECINCT_ID": "622",
      "NEIGHBORHOOD_ID": "cheesman-park"
    },
    {
      "INDEX": 18,
      "INCIDENT_ID": "2014371534",
      "OFFENSE_ID": "2014371534299900",
      "OFFENSE_CODE": "2999",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "criminal-mischief-other",
      "OFFENSE_CATEGORY_ID": "public-disorder",
      "FIRST_OCCURRENCE_DATE": "2014-07-18 05:49:59",
      "LAST_OCCURRENCE_DATE": "2014-07-18 06:00:00",
      "REPORTED_DATE": "2014-07-18 06:50:59",
      "INCIDENT_ADDRESS": "W 14TH AVE / N PERRY ST",
      "GEO_LON": "-105.0393118",
      "GEO_LAT": "39.7384702",
      "DISTRICT_ID": "1",
      "PRECINCT_ID": "122",
      "NEIGHBORHOOD_ID": "west-colfax"
    },
    {
      "INDEX": 19,
      "INCIDENT_ID": "2011228130",
      "OFFENSE_ID": "2011228130240400",
      "OFFENSE_CODE": "2404",
      "OFFENSE_CODE_EXTENSION": "0",
      "OFFENSE_TYPE_ID": "theft-of-motor-vehicle",
      "OFFENSE_CATEGORY_ID": "auto-theft",
      "FIRST_OCCURRENCE_DATE": "2011-05-27 05:00:00",
      "LAST_OCCURRENCE_DATE": "2011-05-27 05:29:59",
      "REPORTED_DATE": "2011-05-27 12:37:59",
      "INCIDENT_ADDRESS": "1400 BLK N WOLFF ST",
      "GEO_LON": "-105.048462",
      "GEO_LAT": "39.738702",
      "DISTRICT_ID": "0",
      "PRECINCT_ID": "0",
      "NEIGHBORHOOD_ID": ""
    }];

// http://andrew.hedges.name/experiments/haversine/
function distance(lon1,lat1,lon2,lat2){

  // convert coordinates to radians
  var lat1Rad = deg2rad(lat1);
  var lon1Rad = deg2rad(lon1);
  var lat2Rad = deg2rad(lat2);
  var lon2Rad = deg2rad(lon2);

  // find the differences between the coordinates
  var dlat = lat2Rad - lat1Rad;
  var dlon = lon2Rad - lon1Rad;

  // heavy math
  var a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(dlon/2),2);
  var c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
  //var dk = c * 6373; // great circle distance in km
  return c * 6373; // great circle distance in km

  // round the results down to the nearest 1/1000
  //mi = round(dm);
  //return round(dk);

}

// convert degrees to radians
function deg2rad(deg) {
  var rad = deg * Math.PI/180; // radians = degrees * pi/180
  return rad;
}


// round to the nearest 1/1000
function round(x) {
  return Math.round( x * 1000) / 1000;
}

//console.log(distance(-104.9358971, 39.6750974, -104.9322724, 39.6778582 ));
//var tempDist = distance(geoLon, geoLat, testData[y].GEO_LON, testData[y].GEO_LAN);


// big algo ----------------------------------------------------------------------------------------

// Set Data Object Array nearest neighbor & near neighbor distance values
var nn = 0; //nearest neighbor - index value
var nnd = 1000000; //near neighbor - distance value !!! Metric KM !!!- set to large value 1 million km, will decrease in loop to find min distance
var maxLon = -100000000; var minLon = 0; var maxLat = 0; var minLat = 10000000; // look for min and max values to define random coordinator generator range

  for (var i = 0; i < testData.length; i++) {
    nn = 0; //reset nearest neighbor
    var nnd = 1000000; // reset nearest neighbor distance
    var index = testData[i].INDEX;
    var geoLon = testData[i].GEO_LON;
    var geoLat = testData[i].GEO_LAT;

    for (var y = 0; y < testData.length; y++) { //testing selected lat long values against all other lat long values to find nearest neighbor distance, ie. min distance. Using great circle distance formula
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
  console.log(testData);
// End Set Data Object Array nearest neighbor & near neighbor distance values

  console.log(maxLon); console.log(minLon); console.log(maxLat); console.log(minLat); //we have the radmon min max parameters for gps data points

// Build Random GPS data array matching input data array length----------------
var testDataRandom = []; // empty array for random data. !!! possibly perfect random function for more random numbers !!!

  for (var i = 0; i < testData.length; i++) { // build random array of objects --> only index, lat, lon data. Save as fixed string to 7th decimal place, same as original JSON data
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


// end big algo ------------------------------------------------------------------------------------






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

// end doc ready -----------------------------------------------------------------------------------
}());
