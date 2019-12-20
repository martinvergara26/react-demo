import React from 'react';
import * as L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {MarkerPopup} from "./MarkerPopup";
import {saveMarker, deleteMarker, getSavedMarkers} from "../../userStorage";
import {notSavedIcon, savedIcon} from "./icons";

const points = [
  [51.5, -0.09], [51.480, -0.005], [51.480, -0.12], [51.520, -0.005], [51.515, -0.16]
];

const savedMarkers = getSavedMarkers();
const iconFor = markerID => savedMarkers.includes(markerID) ? savedIcon : notSavedIcon;

export const addMarkers = (map) => {
  points.forEach((point, index) => {
    const id = index + 1;

    const marker = L.marker(point, {uniqueID: id, icon: iconFor(id)}).addTo(map);

    marker.bindPopup(() => ReactDOMServer.renderToString(<MarkerPopup id={id}/>));

    marker.on('click', function () {
      const deleteButtons = document.getElementsByClassName("delete-marker");
      Array.from(deleteButtons).forEach(function(element) {
        const markerID = element.getAttribute("marker-id");
        element.addEventListener('click', () => {
          deleteMarker(markerID);
          marker.setIcon(notSavedIcon);
          marker.closePopup();
        });
      });

      const saveButtons = document.getElementsByClassName("save-marker");
      Array.from(saveButtons).forEach(function(element) {
        const markerID = element.getAttribute("marker-id");
        element.addEventListener('click', () => {
          saveMarker(markerID);
          marker.closePopup();
          marker.setIcon(savedIcon);
        });
      });
    })
  });
};