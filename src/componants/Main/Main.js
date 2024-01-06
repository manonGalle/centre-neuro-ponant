import './Main.css';
import curseur_white from "../../assets/logos/curseur-white.png"
import team from "../../assets/images/avengers.jpg";
import diseases from "../../assets/images/neuro-diseases.jpg";
import exams from "../../assets/images/exams.jpg"
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className='Super-main'>
    <Header />
      <div className="Main">
        <div className='Main-left'>
          <h1>Centre Neurologique 
            <br/>du Ponant</h1>
          <h2>à la clinique de Keraudren</h2>
          <button className='Main-map-button'>
            <Link to={'/informations'}> 
              <img className='Main-curseur' src={curseur_white} alt="curseur carte"/> 
              <p>Voir la carte</p>
            </Link>
          </button>
        </div>
        <div className='Main-right'>
          <h1>Prenez rendez-vous dès aujourd'hui !</h1>
          <p>En contactant le :</p>
            <h3>02 52 32 38 18</h3>
        </div>
      </div>

      <div className='Main-details'>

        <div className='Main-paragraphe'>

          <div className='Main-details-left'>
            <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
            <h1>Notre équipe</h1>
            <p>L'équipe médicale est contituée de 6 neurologues aux profils complémentaires, chacun apportant une expérience précieuse issue de leurs parcours hospitaliers. Deux secrétaires assurent un accueil bienveillant et un soutien administratif efficace, garantissant une prise en charge fluide pour nos patients. </p>
            <button className='read-more' onClick={handleScrollToTop}> 
              <Link to={'/team'}>
                → Lire plus
              </Link>
            </button>
          </div>

          <div className='Main-details-right'>
            <img src={team} alt="équipe"></img>
            <p className='citation'>Image de <a href="https://fr.freepik.com/vecteurs-libre/theme-equipe-professionnels-sante_7771987.htm#query=%C3%A9quipe%20m%C3%A9decins&position=4&from_view=search&track=ais&uuid=2e0de45a-9d69-4134-9f44-9a2625fd057e">Freepik</a></p>
          </div>

        </div>

        <div className='Main-paragraphe'>

          <div className='Main-details-left'>
            <img src={diseases} alt="diseases"></img>
            <p className='citation'><a href="https://fr.freepik.com/vecteurs-libre/cerveau-sante-mentale-icones-vectorielles-set_3438021.htm#query=pathologie&position=5&from_view=search&track=sph&uuid=ecd62dd8-8c71-4eaa-ad90-6621a607bf4d">Image de rawpixel.com</a> sur Freepik</p>
          </div>

          <div className='Main-details-right'>
            <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
              <h1>Pathologies</h1>
              <p>Nous prenons en charge l'ensemble des maladies neurologiques. Les plus fréquentes sont les accidents vasculaires cérébraux, la sclérose en plaques, les céphalées, les troubles cognitifs, la maladie de Parkison, les neuropathies périphériques et l'épilepsie.</p>
              <button className='read-more' onClick={handleScrollToTop}> 
                <Link to={'/diseases'}>
                  → Lire plus
                </Link>
              </button>
          </div>

        </div>


        <div className='Main-paragraphe'>

          <div className='Main-details-left'>
            <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
            <h1>Examens complémentaires</h1>
            <p>Le Centre Neurologique du Ponant propose une gamme variée d'examens complémentaires. Ils comprennent des électroencéphalogrammes (EEG), des électroneuromyogrammes (ENMG) , des analyses du liquide céphalorachidien et des examens de neuro-imagerie. L'équipe utilise ces outils pour détecter et évaluer avec précision les affections du système nerveux afin de poser un diagnostic et initier des traitements adaptés.</p>
            <button className='read-more' onClick={handleScrollToTop}> 
              <Link to={'/exams'}>
                → Lire plus
              </Link>
            </button>
          </div>

          <div className='Main-details-right'>
            <img src={exams} alt="exams" className='exams'></img>
            <p  className='citation'><a href="https://fr.freepik.com/vecteurs-libre/medecin-au-presse-papiers-donnees-seringue-goutte-sang-sida-infection-par-virus-immunodeficience-concept-deficit-immunitaire-fond-blanc-illustration-isolee-bleu-corail-rose_11664334.htm#query=health%20exams&position=0&from_view=search&track=ais&uuid=90f1697f-a8c8-41d7-805a-2bad8004ffd3">Image de vectorjuice</a> sur Freepik</p>
          </div>

        </div>

        
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Main