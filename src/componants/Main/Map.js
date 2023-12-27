import 'leaflet/dist/leaflet.css'
import './Map.css';
import curseur from '../../assets/logos/curseur.png'

import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'

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
          center={[48.429957, -4.476515]}
          zoom={15}
          minZoom={3}
          maxBounds={[[-85.06, -180], [85.06, 180]]}
          scrollWheelZoom={true}>
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />              

          <Marker position={[48.429740, -4.474696]} icon={customIcon}>
            <p>Mon curseur est ici!</p>
          </Marker>
          
        </MapContainer>
    </div>
  )
}

export default Map