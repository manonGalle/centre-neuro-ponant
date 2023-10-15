import React from 'react'
import Victor from "../../assets/images/canoe.jpg"

const Team = () => {
  return (
    <div>
      <div className='Team-neuro'>
        <h1>Les neurologues</h1>
        <div className='Team-neuro-photo'>
          <div className='DrQuere'>
            <img src={Victor}/>
            <h2>Dr Quéré</h2>
          </div>
        </div>
      </div>

      <div className='Team-secretaire'>
        <h1>Les secrétaires</h1>
      </div>
      
    </div>
  )
}

export default Team