import './App.css';

import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import About from './Components/About.js';
import Stats from './Components/Stats.js';
import Card from './Components/Card.js';
import Footer from './Components/Footer.js';

import AppImg from './Images/img-one.png';
import Data from './Components/Data.json';

import {RiSecurePaymentLine,RiCommunityLine} from 'react-icons/ri'
import {MdDeveloperMode} from 'react-icons/md';
import {IoAccessibilityOutline} from 'react-icons/io5';
import {BsCalendar} from 'react-icons/bs'

function App() {
  
  let match = {
    1: <RiSecurePaymentLine />,
    2: <RiCommunityLine />,
    3: <MdDeveloperMode />,
    4: <IoAccessibilityOutline />,
    5: <BsCalendar />
  }
  
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Stats />
      <div className ="App_Benefit">
        <div className="App_Card_Container">
          {Data.map(box =>{
            console.log(box.id)
            return(
              <Card icon={match[box.id]} title={box.title} detail={box.description}/>
            )
          })}
          
        </div>
        <div className="App_Card_Img">
          <h1>Why Muffle Coin?</h1>
          <img src={AppImg} alt=""/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
