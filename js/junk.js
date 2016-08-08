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
