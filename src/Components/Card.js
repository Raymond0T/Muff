import React from 'react';
import './Card.css';
import TestImg from '../Images/img-two-450.png';



function Card({icon, title, detail}){
    
    return(
        <div className="Card">
            <div className="Card_Container">
                
                <div className="Card_Icon">
                    {icon}
                </div>
                <h1>{title}</h1>
                <p>{detail}</p>
            </div>
        </div>
    );
}

export default Card;