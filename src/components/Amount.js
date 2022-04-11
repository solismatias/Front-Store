import React, { Component } from 'react'

export class Amount extends Component {
  render() {
    return (

      <div className='amount' >
        {/* {this.props.big ?  : } */}
        <span className={this.props.big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 8V16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 12H16" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        {this.props.big ? <p>1</p> : <b>1</b>}

        <span className={this.props.big ? 'amount__square amount__square--big' : 'amount__square'}>
          <svg xmlns="http://www.w3.org/2000/svg" width={this.props.big ? "15" : "10"} height="4" viewBox="0 0 10 2" fill="none">
            <path d="M1 1H9" stroke="#1D1F22" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div >
    )
  }
}

export default Amount