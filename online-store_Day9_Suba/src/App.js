import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/Productlist";
import SearchList from "./components/searchlist";
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
  submitClick = (value) => {
    console.log("clicked");
    this.props.actions.search(value);
  };
  

  render() {
    console.log("cart", this.props.cart);
    return (
      <div>
        <Header SubmitClick={this.submitClick}/>
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
          <Route
            exact
            path="/search-page"
            render={props =>
              this.props.issearching ? (
                <p style={{ paddingTop: "100px" }}>Searchig...</p>
              ) : (
                <SearchList
                  {...props}
                  searchvaluenew={this.props.searchvalue}
                  AddToCart={this.handleCartClick}
                />
              )
            }
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
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
    cart: state.productState.cart,
    searchvalue: state.productState.searchItem,
    issearching: state.productState.issearching,
  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
