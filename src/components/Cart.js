import React, { Component } from 'react'
import CartItem from './CartItem'

export class Cart extends Component {
  render() {
    return (
      <div className='cart__overlay'>
        <article className='cart'>
          <p><b>My Bag.</b> 2 items</p>
          <div className='cart__itemcontainer'>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <section className='cart__checkout'>
            <b>Total</b>
            <b className='cart__total'>$100.00</b>
            <button className='cart__button'>VIEW BAG</button>
            <button className='cart__button cart__button--right'>CHECK OUT</button>
          </section>
        </article>
      </div>
    )
  }
}

export default Cart