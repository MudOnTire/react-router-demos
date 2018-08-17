import React from 'react';
import { BrowserRouter as Router, NavLink as Link, Route } from 'react-router-dom';

import BasicExample from './demos/basic';
import resetCss from './css/reset.css';
import styles from './css/app.css';

const App = () => (
  <Router>
    <div className='main'>
      <div className='leftNav'>
        <ul>
          <li className='navMenu'>
            <Link className='navLink' to='/basic'>Basic Example</Link>
          </li>
        </ul>
      </div>

      <Route path='/basic' component={BasicExample} />
    </div>
  </Router>
)

export default App;