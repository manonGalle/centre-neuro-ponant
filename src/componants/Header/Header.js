import React, { useState } from 'react'
import './Header.css';
import logo from '../../assets/logos/logo_CNP.png';

import { NavLink, Link } from "react-router-dom";
import BarInformation from './BarInformation';
import { useDispatch } from 'react-redux';
import { actionKeepMap, actionMenuOpen } from '../../actions/actions';



const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    const dispatch = useDispatch()

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
        dispatch(actionMenuOpen());
    }

    const handleShowMap = () => {
        dispatch(actionKeepMap())
    }


  return (

    <>
        <BarInformation/>
        <div className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className='navbar-logo'>
                <Link 
                    to={"/"}
                    onClick={handleShowMap}>
                    <img src={logo} alt= "Logo Centre neurologique du Ponant"/>
                </Link>
            </div>

            <div className="navbar-links" >
                <NavLink
                    to={"/"}
                    className="navbar-link"
                    onClick={handleShowMap}
                >
                Le centre
                </NavLink>

                <NavLink
                    to={"/team"}
                    className="navbar-link"
                    onClick={handleShowMap}
                >
                L'équipe
                </NavLink>

                <NavLink
                    to={"/diseases"}
                    className="navbar-link"
                    onClick={handleShowMap}
                >
                Pathologies
                </NavLink>

                <NavLink
                    to={"/exams"}
                    className="navbar-link"
                    onClick={handleShowMap}
                >
                Examens complémentaires
                </NavLink>

                <NavLink
                    to={"/informations"}
                    className="navbar-link"
                    onClick={handleShowMap}
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
