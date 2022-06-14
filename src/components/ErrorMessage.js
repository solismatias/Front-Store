import React, { Component } from 'react'

export class ErrorMessage extends Component {
  render() {
    return (
      <div className='error'>
        <p className='error__title'><span className='error__span'>Oops...</span> an error has occurred</p>
        <p>but don't reject me yet!</p>
      </div>
    )
  }
}

export default ErrorMessage