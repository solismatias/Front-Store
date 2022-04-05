import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/icons/cart.svg'
import down from '../assets/icons/down.svg'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__item'>WOMEN</li>
          <li className='navbar__item'>MEN</li>
          <li className='navbar__item'>KIDS</li>
        </ul>
        <img className='navbar__logo' src={logo} alt="logo" />
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <span className='navbar__currency'>$</span>
            <img className='navbar__down' src={down} />
          </li>
          <li className='navbar__item'>
            <img className='navbar__cart' src={cart} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar