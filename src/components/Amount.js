import React, { Component } from 'react'

export class Amount extends Component {
  render() {
    return (

      <div className='amount' >
        <span className={this.props.big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 8V16" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {this.props.big ? <p>{this.props.amount}</p> : <b>{this.props.amount}</b>}

        <span className={this.props.big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.big ? "15" : "10"} height="4" viewBox="0 0 10 2" fill="none">
            <path d="M1 1H9" stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div >
    )
  }
}

export default Amount