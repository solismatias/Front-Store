import React, { Component } from 'react'

export class Sizes extends Component {
  render() {
    return (
      <div className='sizes'>
        <span className={this.props.big ? 'sizes__square sizes__square--big' : 'sizes__square'}>S</span>
        <span className={this.props.big ? 'sizes__square sizes__square--big sizes__square--selected' : 'sizes__square'}>M</span>
        <span className={this.props.big ? 'sizes__square sizes__square--big sizes__square--disabled' : 'sizes__square'}>L</span>
        {/* <span className='sizes__square sizes__square--disabled'>M</span> */}
      </div>
    )
  }
}

export default Sizes