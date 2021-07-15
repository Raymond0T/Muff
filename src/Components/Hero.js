import React, { useEffect, useState } from 'react';
import './Hero.css';
import TempLarge from '../Images/logo-large.png';
import TempMed from '../Images/logo-medium.png';
import TempImg from '../Images/logo.png';
import HeroBackground from '../Images/hero-img.jpg';
import HeroVideo from '../Images/hero-vid.mp4';

function Hero(){

    let head = "Invest in the future";
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);

    //To run our animation in sequence
    useEffect(()=>{
        let timer1 = ()=>{setSecond(true)};
        let myAnimation = new Promise((resolve,reject) =>{
            setFirst(true);
        })
        
        myAnimation
            .then(setTimeout(timer1,3000));

        return() =>{
            clearTimeout(timer1);
        }
    },[])



    /*
                <img src={TempImg} 
                        srcSet={`${TempMed} 375w, ${TempLarge} 600w`} alt="img"
                        sizes="(max-width:700px) 375w, (max-width) 600w"
                    />
    */

    return(
        <div className="Hero">
            <video autoPlay loop muted src={HeroVideo} type="video/mp4" id="Hero_video"></video>
            
            {first && 
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
            }
            
            <div className="Hero_Container" >
                {second && 
                    <div className="Hero_Col_1">
                        <h1 className="Hero_TextAnimation_Two"> Muffle <br/> Coin</h1>
                    </div>
                }
                <div className="Hero_Col_2">
                   
                </div>
            </div>
        </div>
    );
}


export default Hero;