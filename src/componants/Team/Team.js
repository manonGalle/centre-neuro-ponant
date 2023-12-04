import "./Team.css"
import team from "../../assets/images/avengers.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <div className="Super-team">
      <Header/>
      <div className='Team'>
          <h1>Notre équipe</h1>
          <p>Notre équipe se tient à votre disposition ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img src={team} alt="équipe"></img>
          <p>Image de <a href="https://fr.freepik.com/vecteurs-libre/theme-equipe-professionnels-sante_7771987.htm#query=%C3%A9quipe%20m%C3%A9decins&position=4&from_view=search&track=ais&uuid=2e0de45a-9d69-4134-9f44-9a2625fd057e">Freepik</a></p>
                
      </div>
      <Footer/>
    </div>

  )
}

export default Team