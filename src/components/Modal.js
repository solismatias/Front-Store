import React, { Component } from 'react'

export class Modal extends Component {
  render() {
    return (
      <div className='modal__background'>
        <div className='modal'>
          <p className='modal__title'>Check Out Completed!</p>
          <p className='modal__text'>Total: {this.props.symbol}{this.props.amount}</p>
          <div className='modal__buttons'>
            <button className='minicart__button' onClick={this.props.close}>CLOSE</button>
            <button className='minicart__button minicart__button--right' onClick={this.props.close}>OKEY</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal