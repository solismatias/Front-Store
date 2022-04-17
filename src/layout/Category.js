import React, { Component } from 'react'
import Card from '../components/Card'

class Category extends Component {
  render() {
    return (
      <div className='category'>
        <h2 className='category__name'>Category Name</h2>
        <main className='category__container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </div>
    )
  }
}

export default Category