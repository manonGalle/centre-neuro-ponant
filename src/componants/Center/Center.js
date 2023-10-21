import "./Center.css"
import keraudren from "../../assets/images/keraudren.jpeg"

const Center = () => {
  return (
    <div className="Center">
      <h1>Le Centre Neurologique du Ponant</h1>
      <div className="Center-content">
        <p>Notre Centre Neurologique rassemble l'activité de 6 neurologues pouvant traiter toutes les pathologies neurologiques.
        <br/>Vous pourrez bénéficier de tous les examens complémentaires dont blablablabla
        <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <img src={keraudren} alt="polyclinique-keraudren"/>
      </div>
    </div>
  )
}

export default Center