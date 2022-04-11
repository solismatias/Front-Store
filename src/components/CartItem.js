import React, { Component } from 'react'
import product from "../assets/product.png"
import Amount from './Amount'
import Carousel from './Carousel'
import Sizes from './Sizes'

export class CartItem extends Component {
  render() {
    return (
      <section className={this.props.big ? "cartitem cartitem--big" : "cartitem"
      }>
        {/* {this.props.big ?  : } */}
        < div className='cartitem__left' >
          {this.props.big ?
            <p className='cartitem__name'><b>Apollo</b> <br /> Running Short</p>
            :
            <p className='cartitem__name'>Apollo <br /> Running Short</p>
          }
          < p className='cartitem__price' > <b>$50.00</b></p >
          {this.props.big ?
            <Sizes big />
            :
            <Sizes />
          }
        </div >
        <div className='cartitem__right'>
          {this.props.big ?
            <Amount big />
            :
            <Amount />
          }
          {this.props.big ?
            <Carousel />
            :
            <img className='cartitem__image' src={product} alt='product' />
          }

        </div>
      </section >
    )
  }
}

export default CartItem