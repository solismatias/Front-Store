import React, { Component } from 'react'

export default class Square extends Component {
  render() {
    return (
      this.props.type === "swatch" ?
        <span
          className={this.props.selected ?
            this.props.size === "small" ?
              'product__swatch--small product__swatch--selected'
              :
              'product__swatch product__swatch--selected'
            :
            this.props.size === "small" ?
              'product__swatch--small'
              :
              'product__swatch'
          }
          style={{ backgroundColor: this.props.item.value }}
          key={this.props.item.value}
          onClick={this.props.click}
        />
        :

        <span
          className={this.props.selected ?
            this.props.size === "small" ?
              'product__square product__square--small product__square--selected'
              :
              'product__square product__square--selected'
            :
            this.props.size === "small" ?
              'product__square product__square--small'
              :
              'product__square'
          }
          key={this.props.item.value}
          onClick={this.props.click}
        >
          {this.props.item.value}
        </span>
    )
  }
}
