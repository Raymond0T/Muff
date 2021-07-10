import React from 'react';
import './Hero.css';
import GiantCoin from './GiantCoin.js';


function Hero(){
    return(
        <div className="Hero">
            <div className="Hero_Container">
                <h1>Invest In the Future </h1>
                <GiantCoin />
            </div>
        </div>
    );
}


export default Hero;