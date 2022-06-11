import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, updateAttribute } from '../redux/cartSlice'


export class Sizes extends Component {


  changeAttribute(attribute, product, index) {
    this.props.updateAttribute({ name: attribute.name, value: attribute.items[index].value, productId: product.item.id })
  }


  render() {
    const { attributes } = this.props
    const { selectedAttributes } = this.props
    const { product } = this.props
    return (
      <div className='sizes'>
        {this.props.attributes.map(attribute => (
          <section className='product__attributes' key={attribute.name}>
            <b>{attribute.name}:</b>
            {attribute.type === "swatch" ?
              <div className='product__options'>
                {attribute.items.map((item, index) => (
                  <span
                    className={item.value === selectedAttributes[attribute.name] || index === 0 && !selectedAttributes[attribute.name] ? 'product__swatch product__swatch--selected' : 'product__swatch'}
                    style={{ backgroundColor: item.value }}
                    key={item.value}
                    onClick={() => this.changeAttribute(attribute, product, index)}>
                  </span>
                ))}
              </div>
              :
              <div className='product__options'>
                {attribute.items.map((item, index) => (
                  <span
                    className={item.value === selectedAttributes[attribute.name] || index === 0 && !selectedAttributes[attribute.name] ? 'product__square product__square--selected' : 'product__square'}
                    key={item.value}
                    onClick={() => this.changeAttribute(attribute, product, index)}>
                    {item.value}
                  </span>
                ))}
              </div>
            }
          </section>


        ))}
        {/* <span className={this.props.big ? 'sizes__square sizes__square--big' : 'sizes__square'}>S</span>
        <span className={this.props.big ? 'sizes__square sizes__square--big sizes__square--selected' : 'sizes__square'}>M</span>
        <span className={this.props.big ? 'sizes__square sizes__square--big sizes__square--disabled' : 'sizes__square'}>L</span> */}
        {/* <span className='sizes__square sizes__square--disabled'>M</span> */}
      </div>
    )
  }
}

export default connect(null, { updateAttribute })(Sizes);