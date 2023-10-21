import "./Team.css"
import Victor from "../../assets/images/victor.jpeg"

const Team = () => {
  return (
      <div className='Team'>

        <h1>Notre équipe</h1>
        <p>Notre équipe se tient à votre disposition ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <h2>Les neurologues</h2>

        <div className='Team-neuro'>
          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr Quéré</h3>
          </div>

          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr 2</h3>
          </div>

          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr 3</h3>
          </div>

          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr 4</h3>
          </div>

          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr 5</h3>
          </div>

          <div className='doctor'>
            <img src={Victor}/>
            <h3>Dr 6</h3>
          </div>
        </div>
      
      <h2>Les secrétaires</h2>

      <div className='Team-secretaire'>
        <div className='secretary'>
          <img src={Victor}/>
          <h3>Secrétaire 1</h3>
        </div>

        <div className='secretary'>
          <img src={Victor}/>
          <h3>Secrétaire 2</h3>
        </div>
      </div>
      
    </div>

  )
}

export default Team