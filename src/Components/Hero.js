import React, { useEffect, useState } from 'react';
import './Hero.css';
import HeroImgLarge from '../Images/hero-img-500.png';
import HeroImgMedium from '../Images/hero-img-300.png';
import HeroImgSmall from '../Images/hero-img-200.png';


import {IoIosArrowForward} from 'react-icons/io';

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
            .then(setTimeout(timer1,1200));

        return() =>{
            clearTimeout(timer1);
        }
    },[])



    /*
    <video autoPlay loop muted src={HeroVideo} type="video/mp4" id="Hero_video"></video>
            
                <img src={HeroImgSmall}  srcSet={`${HeroImgSmall} 300w, ${HeroImgMedium} 800w, ${HeroImgLarge} 1600w`}
                    sizes="(min-width:700px), 100vw"
                        alt="img"
                    />
    */

    return(
        <div className="Hero">
            <div className="Hero_Backdrop">
                {first && 
                    <h1 className="Hero_TextAnimation_One">
                        <span aria-label={head}>
                            {head.split("").map((char, index) =>{
                                let style = {animationDelay: `${(0.2 + index / 20)}s`}
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
                    {(second && 
                        <div className="Hero_Col_1">
                            <h1 className="Hero_TextAnimation_Two"> Muffle <br/> Coin</h1>
                            <div className="Hero_Button_Container">
                                <button className="Hero_Button">
                                    <h2>Learn <br/>More </h2>
                                    <IoIosArrowForward className="Hero_ArrowIcon"/>
                                </button>
                                <button className="Hero_Button">
                                    <h2>Purchase <br/> Coin</h2>
                                    <IoIosArrowForward className="Hero_ArrowIcon"/>
                                </button>
                            </div>
                        </div>)
                    ||<div className="Hero_Col_1"></div>}
                    <div className="Hero_Col_2">
                        <img src={HeroImgSmall}  srcSet={`${HeroImgSmall} 300w, ${HeroImgMedium} 800w, ${HeroImgLarge} 2250w`}
                            sizes="(min-width:700px), 100vw"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Hero;