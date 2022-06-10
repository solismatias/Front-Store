import React, { Component } from 'react'
import CartItem from '../components/CartItem'
import { connect } from 'react-redux'


export class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <p className='cart__title'>CART</p>
        {this.props.cart.products.map(product => (
          <CartItem big product={product} key={product.item.id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);