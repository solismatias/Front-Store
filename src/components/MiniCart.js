import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { connect } from 'react-redux'

export class MiniCart extends Component {
  render() {
    let products = this.props.cart.products
    let total = {} // {$:100, ¥: 200, etc}
    for (let item of products) {
      for (let price of item.item.prices) {
        if (total[price.currency.symbol] === undefined) {
          total[price.currency.symbol] = price.amount * item.amount
        } else {
          total[price.currency.symbol] += price.amount * item.amount
        }
      }
    }

    return (
      <div className='minicart__background'>
        <article className='minicart'>
          <p><b>My Bag.</b> {products.length} items</p>
          <div className='minicart__itemcontainer'>
            {this.props.cart.products.map(product => (
              <CartItem product={product} key={product.item.id} />
            ))}
          </div>
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>{this.props.currency.symbol}{Math.round(total[this.props.currency.symbol] * 100) / 100}</b>
            <Link to={"/cart"}>
              <button className='minicart__button'>VIEW BAG</button>
            </Link>
            <button className='minicart__button minicart__button--right'>CHECK OUT</button>
          </section>
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps)(MiniCart);