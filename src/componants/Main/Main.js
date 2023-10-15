import './Main.css';
import curseur from "../../assets/logos/curseur.png"
import { Link } from 'react-router-dom';

const Main = () => {


  return (
    <div className="Main">
      <div className='Main-left'>
        <h1>Centre Neurologique du Ponant</h1>
        <h2>à la clinique de Keraudren</h2>
        <button>
          <Link to={'/map'}> 
            <img className='Main-curseur' src={curseur} alt="curseur carte"/> Voir la carte
          </Link>
        </button>
      </div>
      <div className='Main-right'>
        <h1>Prenez rendez-vous dès aujourd'hui !</h1>
        <button>Prendre rendez-vous</button>

      </div>
    </div>
  )
}

export default Main