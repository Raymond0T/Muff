import React, { useState } from 'react';
import './Nav.css';
import logo from '../Images/logo.png';
import MobileMenu from './MobileMenu';
import {FaBars} from 'react-icons/fa';





function Nav(){

    const [menu, setMenu] = useState(false);

    const toggleMenu = ()=>{
        setMenu(!menu);
        console.log(menu);
    };

    return(
        <div className="Nav">
            {menu && <MobileMenu toggle={toggleMenu} style={{display: menu ? "flex" : "none" }}/> }
            
                <img src={logo} height="75" width="75"/>
                <FaBars className="Nav_Hamburger" onClick={toggleMenu}/>
                
                <ul className="Nav_Tab_Container">
                    <li>Home</li>
                    <li>About</li>
                    <li>Buy Coin</li>
                    <li>Documentation</li>
                </ul>
            </div>
       
    );
}

export default Nav;