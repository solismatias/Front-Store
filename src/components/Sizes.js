import React, { Component } from 'react'
// Redux
import { connect } from 'react-redux'
import { updateAttribute } from '../redux/cartSlice'
// Component
import Square from './Square'


export class Sizes extends Component {


  changeAttribute(attribute, product, index) {
    this.props.updateAttribute({ name: attribute.name, value: attribute.items[index].value, productId: product.item.id })
  }

  attributeIsSelected(item, attribute, index) {
    return item.value === this.props.selectedAttributes[attribute.name] || (index === 0 && !this.props.selectedAttributes[attribute.name])
  }


  render() {
    const { product, attributes, size } = this.props
    return (
      <div className='sizes'>
        {attributes.map(attribute => (
          <section className='product__attributes' key={attribute.name}>
            <b>{attribute.name}:</b>
            <div className='product__options'>
              {attribute.items.map((item, index) => (
                <Square item={item} key={item.value} type={attribute.type} size={size} selected={this.attributeIsSelected(item, attribute, index)} click={() => this.changeAttribute(attribute, product, index)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  }
}

export default connect(null, { updateAttribute })(Sizes);