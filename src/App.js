import React, { Component } from 'react'
import "./sass/main.scss"
import Navbar from './layout/Navbar';
import Cart from "./layout/Cart";
// import Category from "./layout/Category";
// import Product from "./layout/Product";

export class App extends Component {
  render() {
    return (
      <div className="App" onClick={this.foo}>
        <Navbar />
        {/* <Category /> */}
        {/* <Product /> */}
        <Cart />
      </div>
    )
  }
}

export default App
