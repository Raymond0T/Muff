import React from 'react';
import './Home.css';
import Hero from './Hero.js';
import About from './About.js';
import Stats from './Stats.js';
import Card from './Card.js';

import AppImg from '../Images/img-one.png';
import Data from './Data.json';

import {RiSecurePaymentLine,RiCommunityLine} from 'react-icons/ri'
import {MdDeveloperMode} from 'react-icons/md';
import {IoAccessibilityOutline} from 'react-icons/io5';
import {BsCalendar} from 'react-icons/bs';



function Home(){

    let match = {
        1: <RiSecurePaymentLine />,
        2: <RiCommunityLine />,
        3: <MdDeveloperMode />,
        4: <IoAccessibilityOutline />,
        5: <BsCalendar />
      }
    return(
        <div className="Home">
            <Hero />
            <About />
            <Stats />
            <div className ="Home_Benefit">
                <div className="Home_Card_Container">
                    {Data.map(box =>{
                    console.log(box.id)
                    return(
                        <Card icon={match[box.id]} title={box.title} detail={box.description}/>
                    )
                    })}
                    
                </div>
                <div className="Home_Card_Img">
                    <h1>Why Muffle Coin?</h1>
                    <img src={AppImg} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Home;