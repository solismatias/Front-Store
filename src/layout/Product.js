import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from '../utils/queries';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addItem } from '../redux/cartSlice';

export class Product extends Component {

  state = {
    selectedImage: 0,
    selectedAtributes: {},
  }

  setSelectedImage(index) {
    this.setState({ selectedImage: index })
  }

  selectItem(index, attribute) {
    let name = attribute.name
    let item = attribute.items[index].value
    this.setState(state => (
      state.selectedAtributes[name] = item
    ))
  }

  addToCart(product) {
    this.props.addItem({ attributes: this.state.selectedAtributes, item: product })
  }

  render() {
    const productId = this.props.match.params.id;
    return (
      <div className='product'>
        <Query query={GET_PRODUCT} variables={{ id: productId }}>
          {({ loading, data }) => {
            if (loading) return <p>loading</p>
            const { product } = data
            return (
              <>
                <aside className='product__gallery'>
                  {product.gallery.map((image, index) => {
                    return <img className='product__miniimage' key={image} src={image} alt="product item" onClick={() => this.setSelectedImage(index)} />
                  })}
                </aside>
                <div className='product__image-container'>
                  <img className='product__image' src={product.gallery[this.state.selectedImage]} alt="product item" />
                </div>
                <article className='product__info'>
                  <p className='product__name'><b>{product.brand}</b><br />{product.name}</p>
                  {product.attributes.map(attribute => (
                    <section className='product__attributes' key={attribute.name}>
                      <b>{attribute.name}:</b>

                      {attribute.type === "swatch" ?
                        <div className='product__options'>
                          {attribute.items.map((item, index) => (
                            <span
                              className={item.value === this.state.selectedAtributes[attribute.name] || index === 0 && !this.state.selectedAtributes[attribute.name] ? 'product__swatch product__swatch--selected' : 'product__swatch'}
                              style={{ backgroundColor: item.value }}
                              key={item.value}
                              onClick={() => this.selectItem(index, attribute)}>
                            </span>
                          ))}
                        </div>
                        :
                        <div className='product__options'>
                          {attribute.items.map((item, index) => (
                            <span
                              className={item.value === this.state.selectedAtributes[attribute.name] || index === 0 && !this.state.selectedAtributes[attribute.name] ? 'product__square product__square--selected' : 'product__square'}
                              key={item.value}
                              onClick={() => { this.selectItem(index, attribute) }}>
                              {item.value}
                            </span>
                          ))}
                        </div>

                      }

                    </section>
                  ))}
                  <section className='product__checkout'>
                    <b>PRICE:</b>
                    <b>{this.props.currency.symbol}{product.prices[product.prices.findIndex((e) => e.currency.symbol === this.props.currency.symbol)].amount}</b>
                    {product.inStock ? <button className="product__button" onClick={() => this.addToCart(product)}>ADD TO CART</button> : <button className="product__button product__button--disabled">OUT OF STOCK</button>}
                  </section>
                  <span className='product__details' dangerouslySetInnerHTML={{ __html: product.description }} />
                </article>
              </>
            )
          }}
        </Query>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency
});



export default withRouter(connect(mapStateToProps, { addItem })(Product))