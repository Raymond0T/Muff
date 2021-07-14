import React from 'react';
import './Hero.css';
import TempImg from '../Images/logo.png';
import HeroBackground from '../Images/hero-img.jpg';
import HeroVideo from '../Images/hero-vid.mp4';

function Hero(){

    let head = "Invest in the future";

    return(
        <div className="Hero">
            <video autoPlay loop muted src={HeroVideo} type="video/mp4" id="Hero_video"></video>
            
            <h1 className="Hero_TextAnimation_One">
                <span aria-label={head}>
                    {head.split("").map((char, index) =>{
                        let style = {animationDelay: `${(0.5 + index / 10)}s`}
                        return <span
                            aria-hidden="true"
                            key={index}
                            style={style}>
                            {char}
                        </span>;
                    })}
                </span>
            </h1>
            
            <div className="Hero_Container" >
                <div className="Hero_Col_1">
                    <h1 className="Hero_TextAnimation_Two"> Muffle <br/> Coin</h1>
                </div>
                <div className="Hero_Col_2">
                    <img src={TempImg} srcSet={`${TempImg} 300w, ${TempImg} 700w`} alt="img"/>
                </div>
            </div>
        </div>
    );
}


export default Hero;