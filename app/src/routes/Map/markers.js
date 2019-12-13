import * as L from "leaflet";

const points = [
  [51.5, -0.09], [51.480, -0.005], [51.480, -0.12], [51.520, -0.005], [51.515, -0.16]
];

export const addMarkers = (map) => {
  points.forEach((point, index) => {
    const marker = L.marker(point).addTo(map);
    marker.bindPopup(`I am a popup for marker <b>${index + 1}</b>`);
    marker.on('click', function(e) {
      console.log(e.latlng);
    });
  });
};