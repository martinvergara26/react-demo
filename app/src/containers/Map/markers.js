import React from 'react';
import * as L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {MarkerPopup} from "./MarkerPopup";
import {saveMarker, deleteMarker} from "../../userStorage";

const points = [
  [51.5, -0.09], [51.480, -0.005], [51.480, -0.12], [51.520, -0.005], [51.515, -0.16]
];

export const addMarkers = (map) => {
  points.forEach((point, index) => {
    const id = index + 1;

    const marker = L.marker(point, {uniqueID: id}).addTo(map);

    marker.bindPopup(() => ReactDOMServer.renderToString(<MarkerPopup id={id}/>));

    marker.on('click', function () {
      const deleteButtons = document.getElementsByClassName("delete-marker");
      Array.from(deleteButtons).forEach(function(element) {
        const markerID = element.getAttribute("marker-id");
        element.addEventListener('click', () => {
          deleteMarker(markerID);
          marker.closePopup();
        });
      });

      const saveButtons = document.getElementsByClassName("save-marker");
      Array.from(saveButtons).forEach(function(element) {
        const markerID = element.getAttribute("marker-id");
        element.addEventListener('click', () => {
          saveMarker(markerID);
          marker.closePopup();
        });
      });
    })
  });
};