import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logos/logo_CNP.png';

import { NavLink, Link } from "react-router-dom";
import BarInformation from './BarInformation';



const Header = () => {
    const [showLinks, setShowLinks] = useState (false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (

        <div className= {`navbar ${showLinks ? "show-nav" : "hide-nav" } `}>
            <div className='navbar-logo'>
                <Link to={"/"}>
                    <img src={logo} alt= "Logo Centre neurologique du Ponant"/>
                </Link>
                <h1>Centre Neurologique <br/>du Ponant</h1>
            </div>

            <div className="navbar-links" >
                <NavLink
                    to={"/center"}
                    className='navbar-link'
                >
                Le centre
                </NavLink>

                <NavLink
                    to={"/team"}
                    className='navbar-link'
                >
                L'équipe
                </NavLink>

                <NavLink
                    to={"/diseases"}
                    className='navbar-link'
                >
                Votre pathologie
                </NavLink>

                <NavLink
                    to={"/informations"}
                    className='navbar-link'
                >
                Informations pratiques
                </NavLink>

            <button 
                className='navbar_burger'
                onClick={handleShowLinks}
            >
                <span className='burger-bar'></span>
            </button>
            
                
            </div>
        </div>
  )
}

export default Header

/*TUTO A REFAIRE POUR LE MENU BURGER RESPONSIVE : https://www.youtube.com/watch?v=hmoavRdx4YM */