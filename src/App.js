import React, { Component } from 'react'
import "./sass/main.scss"
import Navbar from './layout/Navbar';
import Cart from "./layout/Cart";
import Category from "./layout/Category";
import { Route, Switch, Redirect } from 'react-router-dom';
import Product from "./layout/Product";
import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from './utils/queries';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return <p>Loading...</p>
            return (
              <Switch>
                <Route path='/category/:title' component={Category} />
                <Route path='/product/:id' component={Product} />
                <Route path='/cart' component={Cart} />
                <Redirect to={`/category/${data.categories[0].name}`} />
                {/* Why data.categories[0].name instead of hardcoding "/all"? Because in the future, the category "all" could be renamed or deleted, so it's better to set the URL dynamically*/}
                {/* and the only link allowed to be hardcoded is "cart" */}
              </Switch>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default App
