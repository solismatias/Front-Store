import React, { Component } from 'react'
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from '../utils/queries';
import { setCurrency } from '../redux/currencySlice';
import { connect } from 'react-redux'
export class Currency extends Component {
  render() {
    return (
      <ul className='currency'>
        <Query query={GET_CURRENCIES}>
          {({ data, loading, error }) => {
            if (loading) return <span>Loading...</span>
            const { currencies } = data
            return currencies.map(currency => <li onClick={() => this.props.setCurrency({ label: currency.label, symbol: currency.symbol })} className='currency__item' key={currency.symbol}>{currency.symbol} {currency.label}</li>)
          }}
        </Query>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

export default connect(mapStateToProps, { setCurrency })(Currency);
