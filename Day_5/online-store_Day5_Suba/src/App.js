import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/Productlist";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Productdetail from "./components/Productdetail";
import Cart from "./components/Cart";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      cartclicked: true,
      numberofitem: 0,
      cart: [],
      products: [
        { name: "p1", price: 300 },
        { name: "p2", price: 500 },
        { name: "p3", price: 600 },
        { name: "p4", price: 700 }
      ]
    };
  }
  handleCartClick = (product, index) => {
    console.log(product);
    this.setState({
      numberofitem: this.state.numberofitem + 1,
      cart: [...this.state.cart, product]
    });
  };

  buttonclick = props => {
    this.setState({ islogged: true });
  };
  render() {
    return (
      <div>
        <Header noofitem={this.state.numberofitem} />
        <button style={{ paddingTop: "200px" }} onClick={this.buttonclick}>
          button
        </button>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ProductList
                {...props}
                products={this.state.products}
                AddToCart={this.handleCartClick}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route
            path="/product-detail/:name/:price"
            render={props =>
              this.state.islogged ? (
                <Productdetail {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/cart"
            render={props => <Cart {...props} cart={this.state.cart} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
