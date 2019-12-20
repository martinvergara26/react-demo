import React from 'react'
import * as L from "leaflet";
import {addMarkers, markerPoints} from "./markers";
import Layout from "../Layout/index";
import {getQueryParam} from "../../helpers";

export default class MapContainer extends React.Component {

  componentDidMount() {
    let initialView = [51.505, -0.09];
    const selectedMarker = getQueryParam('markerID');
    if(selectedMarker) {
      initialView = markerPoints[selectedMarker - 1];
    }

    const map = L.map('map').setView(initialView, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(map);

    map.zoomControl.setPosition('topright');

    addMarkers(map, selectedMarker);
  }

  render() {
    return (
      <Layout title={'Map'} fullSize>
        <div id="map" style={{height: '90vh'}}/>
      </Layout>
    )
  }

}