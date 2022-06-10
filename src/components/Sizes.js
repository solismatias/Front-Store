import React, { Component } from 'react'

export class Sizes extends Component {
  render() {
    const { attributes } = this.props
    console.log(attributes)
    return (
      <div className='sizes'>
        {this.props.attributes.map(attribute => (

          <section className='product__attributes' key={attribute.name}>
            <b>{attribute.name}:</b>
            {attribute.type === "swatch" ?
              <div className='product__options'>
                {attribute.items.map((item, index) => (
                  <span
                    //  className={item.value === this.state.selectedAtributes[attribute.name] || index === 0 && !this.state.selectedAtributes[attribute.name] ? 'product__swatch product__swatch--selected' : 'product__swatch'}
                    className='product__swatch'
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
                    // className={item.value === this.state.selectedAtributes[attribute.name] || index === 0 && !this.state.selectedAtributes[attribute.name] ? 'product__square product__square--selected' : 'product__square'}
                    className='product__square'
                    key={item.value}
                    onClick={() => { this.selectItem(index, attribute) }}>
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

export default Sizes