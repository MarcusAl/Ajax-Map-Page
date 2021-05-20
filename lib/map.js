import mapboxgl from 'mapbox-gl';

const apiKey = 'pk.eyJ1IjoibWFya3lib3kzMzEiLCJhIjoiY2tvd3F1OWZ3MDJ3cjJ2cG4zdDdjMDg5cSJ9.iwGMpb6VMMH63EsD1c4mvw';

const mapFunction = (array) => {
  mapboxgl.accessToken = apiKey;
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: array, // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
  new mapboxgl.Marker()
    .setLngLat(array)
    .addTo(map);
};

export { mapFunction, apiKey };
