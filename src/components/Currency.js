import React, { Component } from 'react'

export class Currency extends Component {
  render() {
    return (
      <ul className='currency'>
        <li className='currency__item'>$ USD</li>
        <li className='currency__item'>€ EUR</li>
        <li className='currency__item'>¥ JPY</li>
      </ul>
    )
  }
}

export default Currency