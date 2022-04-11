import React, { Component } from 'react'
import CartItem from './CartItem'

export class MiniCart extends Component {
  render() {
    return (
      <div className='minicart__background'>
        <article className='minicart'>
          <p><b>My Bag.</b> 2 items</p>
          <div className='minicart__itemcontainer'>
            <CartItem />
          </div>
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>$100.00</b>
            <button className='minicart__button'>VIEW BAG</button>
            <button className='minicart__button minicart__button--right'>CHECK OUT</button>
          </section>
        </article>
      </div>
    )
  }
}

export default MiniCart