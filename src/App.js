import React from 'react';
import { BrowserRouter as Router, NavLink as Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import BasicExample from './demos/basic';
import Navigation from './Navigation';
import resetCss from './css/reset.css';
import styles from './css/app.css';

const App = () => (
  <Router>
    <div className='main'>
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/basic' component={BasicExample} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
)

export default App;