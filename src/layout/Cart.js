import React, { Component } from 'react'
import CartItem from '../components/CartItem'

export class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <p className='cart__title'>CART</p>
        <CartItem big />
        <CartItem big />
        <CartItem big />
        <CartItem big />
        <CartItem big />
      </div>
    )
  }
}

export default Cart