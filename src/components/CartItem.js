import React, { Component } from 'react'
import product from "../assets/product.png"

export class CartItem extends Component {
  render() {
    return (
      <section className='cartitem'>
        <div className='cartitem__left'>
          <p className='cartitem__name'>Apollo Running Short</p>
          <p className='cartitem__price'><b>$50.00</b></p>
          <div className='cartitem__size'>
            <span className='cartitem__square'>S</span>
            <span className='cartitem__square cartitem__square--disabled'>M</span>
          </div>
        </div>
        <div className='cartitem__right'>
          <div className='cartitem__amount'>
            <span className='cartitem__square'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 12H16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <b>1</b>
            <span className='cartitem__square'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M1 1H9" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <img className='cartitem__image' src={product} alt='product' />
        </div>
      </section>
    )
  }
}

export default CartItem