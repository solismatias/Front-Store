import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// Component
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart';


export class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <p className='cart__title'>CART</p>
        {this.props.cart.products.length > 0 ?
          this.props.cart.products.map(product => (
            <CartItem big product={product} key={product.item.id} />
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