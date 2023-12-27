import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logos/logo_CNP.png';

import { NavLink, Link, useLocation } from "react-router-dom";
import BarInformation from './BarInformation';



const Header = ( { handleMapToggle } ) => {
    const [showLinks, setShowLinks] = useState(false);
    /*const [activeLink, setActiveLink] = useState('/center')*/
    const location = useLocation();

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
        /*ajouter la logique SI nous sommes sur la page Informations*/
        if(location.pathname === '/informations') {
            handleMapToggle();
        }
    }

    /*const handleLinkClick = (to) => {
        setActiveLink(to)
    }*/


  return (

    <>
        <BarInformation/>
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className='navbar-logo'>
                <Link to={"/"}>
                    <img src={logo} alt= "Logo Centre neurologique du Ponant"/>
                </Link>
            </div>

            <div className="navbar-links" >
                <NavLink
                    to={"/center"}
                    className="navbar-link"
                    /*onClick={() => handleLinkClick('/center')}
                    className={`navbar-link ${activeLink === '/center' ? 'active' : ''}`}*/
                >
                Le centre
                </NavLink>

                <NavLink
                    to={"/team"}
                    className="navbar-link"
                    /*onClick={() => handleLinkClick('/team')}
                    className={`navbar-link ${activeLink === '/team' ? 'active' : ''}`}*/
                >
                L'équipe
                </NavLink>

                <NavLink
                    to={"/diseases"}
                    className="navbar-link"
                    /*className={`navbar-link ${activeLink === '/diseases' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('/diseases')}*/
                >
                Pathologies
                </NavLink>

                <NavLink
                    to={"/exams"}
                    className="navbar-link"
                    /*className={`navbar-link ${activeLink === '/exams' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('/exams')}*/
                >
                Examens complémentaires
                </NavLink>

                <NavLink
                    to={"/informations"}
                    className="navbar-link"
                    /*onClick={() => handleLinkClick('/informations')}
                    className={`navbar-link ${activeLink === '/informations' ? 'active' : ''}`}*/
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
    </>
  )
}

export default Header
