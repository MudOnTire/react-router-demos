import React from 'react';
import {NavLink as Link} from 'react-router-dom'

export default class extends React.Component {
  render() {
    return (
      <div className='leftNav'>
        <ul>
          <li className='navMenu'>
            <Link className='navLink' to='/basic'>Basic Example</Link>
          </li>
          <li className='navMenu'>
            <Link className='navLink' to='/about'>About</Link>
          </li>
          <li className='navMenu'>
            <Link className='navLink' to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}