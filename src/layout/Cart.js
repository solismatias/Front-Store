import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// Component
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart';


export class Cart extends Component {
  render() {
    const { products } = this.props.cart
    return (
      <div className='cart'>
        <p className='cart__title'>CART</p>
        {products.length > 0 ?
          products.map(product => (
            <CartItem big product={product} key={product.id} />
          ))
          :
          <EmptyCart />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);