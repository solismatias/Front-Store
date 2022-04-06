import React, { Component } from 'react'
import producto from "../assets/product.png"

export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <img className='card__image' alt="product" src={producto} />
        <p className='card__name'>Apollo Running Short</p>
        <p className='card__price'>$50.00</p>
      </div>
    )
  }
}

export default Card