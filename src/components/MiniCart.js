import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// React Router
import { Link } from 'react-router-dom'
// Components
import CartItem from './CartItem'
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
          {products.length > 0 ?
            <div className='minicart__itemcontainer'>
              {this.props.cart.products.map(product => (
                <CartItem product={product} key={product.item.id} />
              ))}
            </div>
            :
            <div className='minicart__emptycart'>
              <svg width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M45.962 35.288a3.125 3.125 0 1 0 -4.425 4.425L48.706 46.875 41.538 54.038a3.125 3.125 0 1 0 4.425 4.425L53.125 51.294l7.162 7.169a3.125 3.125 0 0 0 4.425 -4.425L57.544 46.875l7.169 -7.162a3.125 3.125 0 0 0 -4.425 -4.425L53.125 42.456 45.962 35.288z" /><path d="M3.125 6.25a3.125 3.125 0 0 0 0 6.25h6.938l2.506 10.044 9.363 49.906A3.125 3.125 0 0 0 25 75h6.25a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0 -25h43.75a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0 -25h6.25a3.125 3.125 0 0 0 3.069 -2.55l9.375 -50A3.125 3.125 0 0 0 90.625 18.75H18.063l-2.531 -10.131A3.125 3.125 0 0 0 12.5 6.25H3.125zm24.469 62.5L19.387 25h67.475l-8.206 43.75h-51.063zM37.5 87.5a6.25 6.25 0 1 1 -12.5 0 6.25 6.25 0 0 1 12.5 0zm43.75 0a6.25 6.25 0 1 1 -12.5 0 6.25 6.25 0 0 1 12.5 0z" /></svg>
              <p className='minicart__emptytitle'>Cart is empty</p>
              <p className='minicart__emptytext'>Looks like you have no items in your shopping cart</p>
            </div>
          }
          <section className='minicart__checkout'>
            <b>Total</b>
            <b className='minicart__total'>{this.props.currency.symbol}{Math.round(total[this.props.currency.symbol] * 100) / 100 || 0}</b>
            {products.length > 0 ?
              <>
                <Link to={"/cart"}>
                  <button className='minicart__button' onClick={this.props.close}>VIEW BAG</button>
                </Link>
                <button className='minicart__button minicart__button--right' onClick={this.props.close && this.openCloseModal}>CHECK OUT</button>
                {this.state.isModalOpen ? <Modal close={this.openCloseModal} symbol={this.props.currency.symbol} amount={Math.round(total[this.props.currency.symbol] * 100) / 100} /> : null}
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