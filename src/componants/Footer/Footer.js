import logo_black from '../../assets/logos/logo_CNP_black.png';
import './Footer.css';
import Map from '../Main/Map';

import 'leaflet/dist/leaflet.css'
import { useSelector } from 'react-redux';


const Footer = () => {
  
  const isMenuOpen = useSelector((state) => state.isMenuOpen)

  return (
    <div className='Footer-legals'>

    <div className='Footer'>

      <div className='Footer-left'>
        <img src={logo_black} alt="logo"/>
        <h3>Notre adresse</h3>
        <p>Centre Neurologique du Ponant <br/> Polyclinique de Keraudren <br/> 375 Rue Ernestine de Trémaudan, <br/> 29200 Brest</p>
        <h3>Téléphone :</h3>
        <button className='Footer-rdv'>Prendre rendez-vous <br/>02 52 32 38 18</button>
        <h3>Horaires d'ouverture :</h3>
        <p>Du lundi au vendredi</p>
        <p>de 9h à 18h30</p>
      </div>

      <div className='Footer-right'>
        <div className={`Map-container ${isMenuOpen ? 'hide-map' : ''}`}> 
        <Map/> 
        </div>
      </div>

      </div>

      <div className='Legal-mentions'>
        Tous droits réservés  ©2023 CENTRE NEUROLOGIQUE DU PONANT | Web développement : Manon Galle | <a href="/legalmentions">Mentions légales</a>
      </div>
    </div>
  )
}

export default Footer