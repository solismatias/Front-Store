import { Query } from '@apollo/client/react/components';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/Card'
import { GET_PRODUCTS } from '../utils/queries';

class Category extends Component {
  render() {
    const categoryName = this.props.match.params.title;
    return (
      <div className='category'>
        <Query query={GET_PRODUCTS} variables={{ category: categoryName }}>
          {({ loading, data }) => {
            if (loading) return <p>Loading...</p>
            const { products } = data.category
            return (
              <>
                <h2 className='category__name'>{categoryName}</h2>
                <main className='category__container'>
                  {products.map(product => <Card product={product} key={product.id} />)}
                </main>
              </>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default withRouter(Category)