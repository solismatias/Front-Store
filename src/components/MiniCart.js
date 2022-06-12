import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { connect } from 'react-redux'
export class MiniCart extends Component {
  state = {
    totalItems: 0,
    totalPrice: 0
  }
  componentDidMount() {
    console.log(this.props.cart.products)
    let products = this.props.cart.products
    let total = 0
    for (let item of products) {
      let prices = item.item.prices
      let index = prices.findIndex(e => e.currency.symbol === this.props.currency.symbol)
      total += prices[index].amount
    }
    this.setState(state => ({
      totalItems: products.length,
      totalPrice: total
    }))
  }
  changeAmmountItems() {

  }
  render() {
    return (
      <div className='minicart__background'>
        <article className='minicart'>
          <p><b>My Bag.</b> {this.state.totalItems} items</p>
          <div className='minicart__itemcontainer'>
            {this.props.cart.products.map(product => (
              <CartItem product={product} key={product.item.id} />
            ))}
          </div>
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>{this.props.currency.symbol}{this.state.totalPrice}</b>
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