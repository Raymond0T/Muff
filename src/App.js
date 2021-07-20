import './App.css';

import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import About from './Components/About.js';
import Stats from './Components/Stats.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Stats />
    </div>
  );
}

export default App;
