import React from 'react';
import './MobileMenu.css';
import {IoClose} from 'react-icons/io5';

function MobileMenu({menu, toggle}){

    return(
        <div className="MobileMenu" >
            <div className="MobileMenu_Container">
                <IoClose className="MobileMenu_Close" onClick={toggle}/>

                <ul className="MobileMenu_Tab_Container" onClick={toggle}>
                    <li>Home</li>
                    <li>About</li>
                    <li>My Wallet</li>
                    <li>Documentation</li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;