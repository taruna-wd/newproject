
    mapboxgl.accessToken = maptoken  ;

	// mapboxgl.accessToken = 'pk.eyJ1IjoidGFydW5hMjIyIiwiYSI6ImNsd2hxNzJpeDBqMTYycW1td283cmZmaTcifQ.YZ_UjVrHE_CI5SHaa9E0JQ   '  ;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [77.2088, 28.6139], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

  // Create a default Marker and add it to the map.
  const marker = new mapboxgl.Marker()
  .setLngLat(coordinates) // Listing.geometry.coordinates 
  .addTo(map);
