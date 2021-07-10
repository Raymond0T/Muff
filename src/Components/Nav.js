import React from 'react';
import './Nav.css';
import logo from '../Images/logo.png';

function Nav(){
    return(
        <div className="Nav">
            <img src={logo} height="50" width="75"/>
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