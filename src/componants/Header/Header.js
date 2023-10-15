import React from 'react'
import './Header.css';
import logo from '../../assets/logos/logo_CNP.png';

import { NavLink, Link } from "react-router-dom";
import BarInformation from './BarInformation';

const Header = () => {
  return (
    <>
        <BarInformation/>
        <div className="header">
            <div className='header-logo'>
                <Link to={"/"}>
                    <img src={logo} alt= "Logo Centre neurologique du Ponant"/>
                </Link>
                <h1>Centre Neurologique <br/>du Ponant</h1>
            </div>
            <div className='header-nav'>
                <NavLink
                    to={"/center"}
                    className='link'
                >
                Le centre
                </NavLink>;

                <NavLink
                    to={"/team"}
                    className='link'
                >
                L'équipe
                </NavLink>;

                <NavLink
                    to={"/diseases"}
                    className='link'
                >
                Votre pathologie
                </NavLink>;

                <NavLink
                    to={"/informations"}
                    className='link'
                >
                Informations pratiques
                </NavLink>;

            </div>
        </div>
    </>
  )
}

export default Header