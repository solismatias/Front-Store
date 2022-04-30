import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_PRODUCT } from '../utils/queries';
import { withRouter } from 'react-router-dom';
export class Product extends Component {
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
                  {product.gallery.map(image => {
                    return <img className='product__miniimage' key={image} src={image} alt="product item" />
                  })}
                </aside>
                <div className='product__image-container'>
                  <img className='product__image' src={product.gallery[0]} alt="product item" />
                </div>
                <article className='product__info'>
                  <p className='product__name'><b>{product.brand}</b><br />{product.name}</p>
                  {product.attributes.map(attribute =>
                  (<section className='product__attributes' key={attribute.name}>
                    <b>{attribute.name}:</b>
                    {attribute.type === "swatch" ?
                      <div className='product__options'>
                        {attribute.items.map(item => (
                          <span className='product__square' style={{ backgroundColor: item.value }} key={item.value}></span>
                        ))}
                      </div>
                      :
                      <div className='product__options'>
                        {attribute.items.map(item => (
                          <span className='product__square' key={item.value}>{item.value}</span>
                        ))}
                      </div>
                    }

                  </section>)
                  )}
                  <section className='product__checkout'>
                    <b>PRICE:</b>
                    <b>$50.00</b>
                    {product.inStock ? <button className="product__button">ADD TO CART</button> : <button className="product__button product__button--disabled">OUT OF STOCK</button>}
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

export default withRouter(Product)