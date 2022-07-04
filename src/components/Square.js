import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    const { selected, size, click, type } = this.props
    const { value } = this.props.item
    return (
      type === "swatch" ?
        <span
          className={selected ?
            size === "small" ?
              'product__swatch--small product__swatch--selected'
              :
              'product__swatch product__swatch--selected'
            :
            size === "small" ?
              'product__swatch--small'
              :
              'product__swatch'
          }
          style={{ backgroundColor: value }}
          key={value}
          onClick={click}
        />
        :

        <span
          className={selected ?
            size === "small" ?
              'product__square product__square--small product__square--selected'
              :
              'product__square product__square--selected'
            :
            size === "small" ?
              'product__square product__square--small'
              :
              'product__square'
          }
          key={value}
          onClick={click}
        >
          {value}
        </span>
    )
  }
}
