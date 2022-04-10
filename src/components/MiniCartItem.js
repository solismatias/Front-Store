import React, { Component } from 'react'
import product from "../assets/product.png"

export class MiniCartItem extends Component {
  render() {
    return (
      <section className='minicartitem'>
        <div className='minicartitem__left'>
          <p className='minicartitem__name'>Apollo Running Short</p>
          <p className='minicartitem__price'><b>$50.00</b></p>
          <div className='minicartitem__size'>
            <span className='minicartitem__square'>S</span>
            <span className='minicartitem__square minicartitem__square--disabled'>M</span>
          </div>
        </div>
        <div className='minicartitem__right'>
          <div className='minicartitem__amount'>
            <span className='minicartitem__square'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 12H16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <b>1</b>
            <span className='minicartitem__square'>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M1 1H9" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
          <img className='minicartitem__image' src={product} alt='product' />
        </div>
      </section>
    )
  }
}

export default MiniCartItem