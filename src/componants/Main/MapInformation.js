import './MapInformation.css';
import Map from './Map';

const MapInformation = () => {
  return (
    <div className='Map'>
        <div className='Map-find'>
            <h1>Nous trouver</h1>
            <h2>Notre adresse : </h2>
            <p>Centre neurologique du Ponant <br/>Polyclinique de Keraudren</p>
        </div>
        <div className='Map-map'>
          <Map/>
        </div>
    </div>
  )
}

export default MapInformation