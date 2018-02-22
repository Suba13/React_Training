import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/Productlist";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Productdetail from "./components/Productdetail";
import Cart from "./components/Cart";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/product";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentWillMount() {
    this.props.actions.getProduct();
  }
  handleCartClick = (product, index) => {
    console.log(product);
    this.props.actions.addCart(product);
  };
  deleteClick = (deleteproduct, index) => {
    this.props.actions.CartDelete(deleteproduct);
  };

  buttonclick = props => {
    this.setState({ isloggedIn: true });
  };

  render() {
    console.log("cart", this.props.cart);
    return (
      <div>
        <Header />
        <button style={{ paddingTop: "200px" }} onClick={this.buttonclick}>
          button
        </button>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.props.isLoading ? (
                <p style={{ paddingTop: "100px" }}>Loading...</p>
              ) : (
                <ProductList
                  {...props}
                  products={this.props.products}
                  AddToCart={this.handleCartClick}
                />
              )
            }
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route
            path="/product-detail/:name/:price"
            render={props =>
              this.state.isloggedIn ? (
                <Productdetail {...props} />
              ) : (
                <Redirect to={{ pathname: "/login" }} />
              )
            }
          />
          <Route
            path="/cart"
            render={props => (
              <Cart
                {...props}
                cart={this.props.cart}
                DeleteFromCart={this.deleteClick}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.productState.product,
    isLoading: state.productState.isLoading,
    cart: state.productState.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
