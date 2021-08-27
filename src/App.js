import './App.css';

import Nav from './Components/Nav.js';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Footer from './Components/Footer.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
 
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
