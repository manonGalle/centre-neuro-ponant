import "./Team.css"
import team from "../../assets/images/avengers.jpeg";

const Team = () => {
  return (
      <div className='Team'>

        <h1>Notre équipe</h1>
        <p>Notre équipe se tient à votre disposition ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={team} alt="équipe"></img>
      
    </div>

  )
}

export default Team