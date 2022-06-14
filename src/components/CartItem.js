import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
// Components
import Amount from './Amount'
import Carousel from './Carousel'
import Sizes from './Sizes'



export class CartItem extends Component {
  render() {
    const { product } = this.props
    return (
      <section className={this.props.big ? "cartitem cartitem--big" : "cartitem"}>
        < div className='cartitem__left' >
          {this.props.big ?
            <p className='cartitem__name'><b>{product.item.brand}</b> <br />{product.item.name}</p>
            :
            <p className='cartitem__name'>{product.item.brand}<br />{product.item.name}</p>
          }
          < p className='cartitem__price' > <b>{this.props.currency.symbol}{product.item.prices[product.item.prices.findIndex((e) => e.currency.symbol === this.props.currency.symbol)].amount}</b></p >
          {this.props.big ?
            <Sizes size="big" attributes={product.item.attributes} selectedAttributes={product.attributes} product={product} />
            :
            <Sizes size="small" attributes={product.item.attributes} selectedAttributes={product.attributes} product={product} />
          }
        </div >
        <div className='cartitem__right'>
          {this.props.big ?
            <Amount id={product.id} big amount={product.amount} />
            :
            <Amount id={product.id} amount={product.amount} />
          }
          {this.props.big ?
            <Carousel images={product.item.gallery} />
            :
            <img className='cartitem__image' src={product.item.gallery[0]} alt='product' />
          }
        </div>
      </section >
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

export default connect(mapStateToProps)(CartItem);