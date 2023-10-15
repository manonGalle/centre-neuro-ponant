import React from 'react'
import './Map.css';

import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {
  return (
    <div className='Map'>
        <div className='Map-find'>
            <h1>Nous trouver</h1>
            <h2>Notre adresse : </h2>
            <p>Centre neurologique du Ponant <br/>Polyclinique de Keraudren</p>
        </div>
        <div className='Map-map'>
            <MapContainer
                className='full-height-map'
                center={[48.429740, -4.474696]}
                zoom={15}
                minZoom={3}
                maxBounds={[[-85.06, -180], [85.06, 180]]}
                scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

            {/* TODO: Add markers */}
            </MapContainer>
        </div>
    </div>
  )
}

export default Map