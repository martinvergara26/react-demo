import React from 'react';
import * as L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import {MarkerPopup} from "./MarkerPopup";
import {saveMarker, deleteMarker, getSavedMarkers} from "../../userStorage";
import {notSavedIcon, savedIcon} from "./icons";

export const markerPoints = [[51.495, -0.09], [51.480, -0.005], [51.480, -0.12], [51.520, -0.005], [51.515, -0.16], [51.53849954608532,-0.29803634346039376],[51.49343886653642,-0.37988250278193453],[51.347685880278426,-0.3182861425056315],[51.441804389485526,-0.1610537027548724],[51.33896978889334,-0.004858825499486963],[51.39227410520729,-0.4498106027881141],[51.47195310969113,0.11197866722060618],[51.55257365040317,-0.05270089700525915],[51.48837109643594,-0.38979966977319375],[51.58176537231822,-0.08546263267718651],[51.462559034498376,-0.0037223579600006995],[51.527739599848815,-0.23989721112830942],[51.49979031944829,-0.2112436316713029],[51.55564928718282,-0.14741524208860202],[51.34363502562114,-0.3286796916159937],[51.58393771530352,-0.21405709079380847],[51.38441407059101,-0.33824094374416025],[51.391969755751916,0.15962727753849365],[51.5203358951226,-0.3579492180673675],[51.42881700979288,-0.021813878370253392],[51.31291791102519,-0.4170267315300399],[51.52580198409186,-0.26389190981357213],[51.56611936395258,-0.06506811195797102],[51.60475749506824,0.12055087026877814],[51.366124076690795,-0.3106988038818828],[51.656815302874406,-0.2824887403881077],[51.59616828258708,0.0042182798431988355],[51.45354392326681,0.1078588329226648],[51.61061437089517,-0.1345904154888924],[51.41567778088044,-0.2600208386855401],[51.348971357749264,-0.4112985318499625],[51.388569103179904,-0.29809891850187453],[51.47084266837646,-0.00400138985323123],[51.38418060233722,0.06504705904808522],[51.63974557602739,-0.1759278792031348]];

export function addMarkers (map, selectedMarker) {
  const savedMarkers = getSavedMarkers();
  const iconFor = markerID => savedMarkers.includes(markerID) ? savedIcon : notSavedIcon;

  markerPoints.forEach((point, index) => {
    const id = index + 1;

    const marker = L.marker(point, {uniqueID: id, icon: iconFor(id)}).addTo(map);

    marker.bindPopup(() => ReactDOMServer.renderToString(<MarkerPopup id={id}/>));

    if(id === parseInt(selectedMarker)) {
      marker.openPopup();
      handleOnClick(marker);
    }

    marker.on('click', () => handleOnClick(marker));
  });
};

function handleOnClick(marker) {
  const deleteButtons = document.getElementsByClassName("delete-marker");
  Array.from(deleteButtons).forEach(function (element) {
    const markerID = element.getAttribute("marker-id");
    element.addEventListener('click', () => {
      deleteMarker(markerID);
      marker.setIcon(notSavedIcon);
      marker.closePopup();
    });
  });

  const saveButtons = document.getElementsByClassName("save-marker");
  Array.from(saveButtons).forEach(function (element) {
    const markerID = element.getAttribute("marker-id");
    element.addEventListener('click', () => {
      saveMarker(markerID);
      marker.closePopup();
      marker.setIcon(savedIcon);
    });
  });
}
