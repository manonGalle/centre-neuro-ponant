import './Main.css';
import curseur from "../../assets/logos/curseur.png";
import curseur_white from "../../assets/logos/curseur-white.png"
import team from "../../assets/images/avengers.jpg";
import diseases from "../../assets/images/neuro-diseases.jpg";
import irm from "../../assets/images/irm.jpg"
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {


  return (
    <>
    <div className='Super-main'>
    <Header/>
      <div className="Main">
        <div className='Main-left'>
          <h1>Centre Neurologique du Ponant</h1>
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
            <h3>02 98 55 55 55</h3>
        </div>
      </div>
      <div className='Main-details'>
        <div className='Main-paragraphe'>
          <div className='Main-details-left'>
            <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
            <h1>Notre équipe</h1>
            <p>Nous sommes 6 neurologues et 2 secrétaires. Chacun s'est spécialisé dans une pathologie afin de vous proposer une prise en charge médicale optimale. Nos parcours patient se basent sur une expérience en centre hospitalier et ont été étudié pour vous permettre de  réaliser l'ensemble de vos examens dans un même lieu et sur une même journée. Cela est possible grâce à l'accompagnement de professionnels médicaux et paramédicaux travaillant en partenariat avec le centre neurologique du Ponant.</p>
            <button className='read-more'> 
              <Link to={'/team'}>
                → Lire plus
              </Link>
            </button>
          </div>
          <div className='Main-details-right'>
            <img src={team} alt="équipe"></img>
            <p>Image de <a href="https://fr.freepik.com/vecteurs-libre/theme-equipe-professionnels-sante_7771987.htm#query=%C3%A9quipe%20m%C3%A9decins&position=4&from_view=search&track=ais&uuid=2e0de45a-9d69-4134-9f44-9a2625fd057e">Freepik</a></p>
          </div>
        </div>

        <div className='Main-paragraphe'>
          <div className='Main-details-left'>
            <img src={diseases} alt="diseases"></img>
            <p><a href="https://fr.freepik.com/vecteurs-libre/cerveau-sante-mentale-icones-vectorielles-set_3438021.htm#query=pathologie&position=5&from_view=search&track=sph&uuid=ecd62dd8-8c71-4eaa-ad90-6621a607bf4d">Image de rawpixel.com</a> sur Freepik</p>
          </div>

          <div className='Main-details-right'>
            <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
              <h1>Pathologies</h1>
              <p>Nous prenons en charge l'ensemble des maladies neurologiques. Les plus fréquentes sont les accidents vasculaires cérébraux, les démences, les céphalées, les scléroses en plaque, Alzheimer, Parkison.</p>
              <button className='read-more'> 
                <Link to={'/diseases'}>
                  → Lire plus
                </Link>
              </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Main