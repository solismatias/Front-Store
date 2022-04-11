import React, { Component } from 'react'
import product from "../assets/product.png"

export class Product extends Component {
  render() {
    return (
      <div className='product'>
        <aside className='product__gallery'>
          <img className='product__miniimage' src={product} alt="product item" />
          <img className='product__miniimage' src={product} alt="product item" />
          <img className='product__miniimage' src={product} alt="product item" />
        </aside>
        <img className='product__image' src={product} alt="product item" />
        <article className='product__info'>
          <p className='product__name'><b>Apollo</b><br />Running Short</p>
          <section className='product__sizes'>
            <b>SIZE:</b>
            <div className='product__options'>
              <span className='product__square'>XS</span>
              <span className='product__square'>S</span>
              <span className='product__square'>M</span>
              <span className='product__square'>L</span>
            </div>
          </section>
          <section className='product__checkout'>
            <b>PRICE:</b>
            <b>$50.00</b>
            <button className='product__button'>ADD TO CART</button>
          </section>
          <p className='product__details'>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
        </article>
      </div>
    )
  }
}

export default Product