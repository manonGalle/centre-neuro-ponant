import "./NotFound.css"
import brain from "../../assets/images/brain.png"

const NotFound = () => {
  return (
    <div className='NotFound'>
      <img src={brain} alt="brain"/>
      <br/>Oups, il semblerait qu'il y a un problème...
      <br/>Nous mettons tout en oeuvre pour le résoudre le plus vite possible
      <br/> --------------
      <br/>Pour prendre rendez-vous : <span>02 98 55 55 55</span>
    </div> 
  )
}

export default NotFound