import React, { Component } from 'react'
import * as L from "leaflet";
import './styles.css'
import {addMarkers} from "./markers";

export default class MapContainer extends React.Component {

  componentDidMount() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(map);

    map.zoomControl.setPosition('topright');

    addMarkers(map);
  }

  render() {
    return <div id="map"/>
  }

}