import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// React Router
import { Link } from 'react-router-dom'
// Components
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import Modal from './Modal'

export class MiniCart extends Component {
  state = {
    isModalOpen: false
  }
  openCloseModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen
    }))
  }
  render() {
    const { products } = this.props.cart
    const { symbol } = this.props.currency
    const { close } = this.props
    const total = {} // {$:100, ¥: 200, etc}
    for (const item of products) {
      for (const price of item.item.prices) {
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
          {products.length > 0 ?
            <div className='minicart__itemcontainer'>
              {products.map(product => (
                <CartItem product={product} key={product.item.id} />
              ))}
            </div>
            :
            <EmptyCart />
          }
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>{symbol}{Math.round(total[symbol] * 100) / 100 || 0}</b>
            {products.length > 0 ?
              <>
                <Link to={"/cart"}>
                  <button className='minicart__button' onClick={close}>VIEW BAG</button>
                </Link>
                <button className='minicart__button minicart__button--right' onClick={close && this.openCloseModal}>CHECK OUT</button>
                {this.state.isModalOpen ? <Modal close={this.openCloseModal} symbol={symbol} amount={Math.round(total[symbol] * 100) / 100} /> : null}
              </>
              :
              null
            }
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