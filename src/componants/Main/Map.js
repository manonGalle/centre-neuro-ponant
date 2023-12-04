import 'leaflet/dist/leaflet.css'
import './Map.css';
import curseur from '../../assets/logos/curseur-white.png'

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {

  const customIcon = L.icon({
    iconUrl: curseur,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <div className='Map'>
        <MapContainer
          className='full-height-map'
          style={{ width: '100%', height: '400px' }}
          center={[48.429740, -4.474696]}
          zoom={15}
          minZoom={3}
          maxBounds={[[-85.06, -180], [85.06, 180]]}
          scrollWheelZoom={true}>
          
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

          <Marker position={[48.429740, -4.474696]} icon={customIcon}>
            <p>Mon curseur est ici!</p>
          </Marker>
          
        </MapContainer>
    </div>
  )
}

export default Map