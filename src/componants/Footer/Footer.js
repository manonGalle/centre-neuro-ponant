import logo_black from '../../assets/logos/logo_CNP_black.png';
import './Footer.css';
import Map from '../Main/Map';

import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";


const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-left'>
        <img src={logo_black} alt="logo"/>
        <h3>Notre adresse</h3>
        <p>Centre Neurologique du Ponant <br/> Polyclinique de Keraudren <br/> 375 Rue Ernestine de Trémaudan, <br/> 29200 Brest</p>
        <h3>Téléphone :</h3>
        <p>02 98 55 55 55</p>
        <h3>Horaires d'ouverture :</h3>
        <p>Du lundi au vendredi</p>
        <p>de 8h30 à 18h30</p>
        <button className='Footer-rdv'>Prendre rendez-vous <br/><a href="02 98 55 55 55">02 98 55 55 55</a></button>
      </div>

      <div className='Footer-right'>
        <Map/> 
      </div>

    </div>
  )
}

export default Footer