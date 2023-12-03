import Header from "../Header/Header"
import "./Informations.css"
import Map from '../Main/Map';
import Footer from "../Footer/Footer";

const Informations = () => {
  return (
    <div className="Super-Informations">
      <Header/>
      <div className="Informations">
        <div className="Informations-left">
          <h1>Informations pratiques</h1>
          <p>Le centre est ouvert du Lundi au Vendredi <span>de 9h à 18h30</span>.</p>
          <p>Vous pouvez prendre rendez-vous en nous contactant au <span>02 98 55 55 55</span>.</p>
          <p>Nous trouver :
            <br/>Centre Neurologique du Ponant 
            <br/>Polyclinique de Keraudren
            <br/>375 Rue Ernestine de Trémaudan,
            <br/>29200 Brest
          </p>
          <p>
            Pour venir en transport en commun : lignes de bus <span className="violet">4</span>, <span className="pink">66</span>, <span className="blue">23</span>, <span className="yellow">40</span>, <span className="grey">94</span>
          </p>
        </div>

        <div className="Informations-right">
          <Map/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Informations