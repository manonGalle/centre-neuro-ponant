import './Main.css';
import curseur from "../../assets/logos/curseur.png";
import team from "../../assets/images/avengers.jpeg";
import diseases from "../../assets/images/neuro-diseases.jpeg";
import irm from "../../assets/images/irm.jpg"
import { Link } from 'react-router-dom';

const Main = () => {


  return (
    <>
    <div className="Main">
      <div className='Main-left'>
        <h1>Centre Neurologique du Ponant</h1>
        <h2>à la clinique de Keraudren</h2>
        <button>
          <Link to={'/mapinformation'}> 
            <img className='Main-curseur' src={curseur} alt="curseur carte"/> Voir la carte
          </Link>
        </button>
      </div>
      <div className='Main-right'>
        <h1>Prenez rendez-vous dès aujourd'hui !</h1>
        <p>En contactant le <a href="02 98 55 55 55">02 98 55 55 55</a></p>

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
        </div>
      </div>

      <div className='Main-paragraphe'>
        <div className='Main-details-left'>
          <img src={diseases} alt="diseases"></img>
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

      <div className='Main-paragraphe'>
       <div className='Main-details-left'>
        <h3>CENTRE NEUROLOGIQUE DU PONANT</h3>
          <h1>Plateau technique</h1>
          <p>Notre centre est doté d'un équipement nous permettant de réaliser l'ensemble des examens médicaux liés aux maladies neurologiques. Blablabla IRM, scaner, truc pour les nerfs...</p>
          <button className='read-more'> 
            <Link to={'/diseases'}>
              → Lire plus
            </Link>
          </button>
      </div>
      <div className='Main-details-right'>
        <img src={irm} alt="irm"></img>
      </div>

      </div>

    </div>
    </>
  )
}

export default Main