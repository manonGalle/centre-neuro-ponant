import Header from "../Header/Header"
import "./Informations.css"
import Map from '../Main/Map';
import Footer from "../Footer/Footer";
import React from 'react'
import { useSelector } from "react-redux";

const Informations = () => {

  const isMenuOpen = useSelector((state) => state.isMenuOpen)

  return (
    <div className="Super-Informations">
      <Header/>
      <div className="Informations">
      <h1>Informations pratiques</h1>
        <div className="Informations-content">
          <div className="Informations-left">
            <p>Le centre est ouvert du Lundi au Vendredi <span>de 9h à 18h30</span>.</p>
            <p>Vous pouvez prendre rendez-vous en nous contactant au <span>02 52 32 38 18</span>.</p>
            <p>Nous trouver :
              <br/>Centre Neurologique du Ponant 
              <br/>Polyclinique de Keraudren
              <br/>375 Rue Ernestine de Trémaudan,
              <br/>29200 Brest
            </p>
            <p>
              Pour venir en transport en commun : lignes de bus <a href="https://www.bibus.fr/se-deplacer/lignes/ligne-bus-4"><span className="violet">4</span></a>, <a href="https://www.bibus.fr/se-deplacer/lignes/ligne-bus-66"><span className="pink">66</span></a>, <a href="https://www.bibus.fr/se-deplacer/lignes/ligne-bus-23"><span className="blue">23</span></a>, <a href="https://www.bibus.fr/se-deplacer/lignes/ligne-bus-40"><span className="yellow">40</span></a>, <a href="https://www.bibus.fr/se-deplacer/lignes/ligne-transport-la-demande-94"><span className="grey">94</span></a>
            </p>
            <p>
              Pour venir en voiture :
              <br/>Depuis la RN12 / D112 en direction de Brest, prendre la sortie 99 (dernière sortie avant Brest)
            </p>
          </div>

          <div className={`Informations-right ${isMenuOpen ? 'hide-map' : ''}`}>
            <Map/>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Informations