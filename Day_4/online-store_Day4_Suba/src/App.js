import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/Productlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofitem: 0,
      products: [
        { name: "p1", price: 300, isenable: true },
        { name: "p2", price: 500, isenable: true },
        { name: "p3", price: 600, isenable: true },
        { name: "p4", price: 700, isenable: true }
      ]
    };
  }
  handleCartClick = (product, index) => {
    this.setState({ numberofitem: this.state.numberofitem + 1 });
    console.log("index", index);
  };

  render() {
    return (
      <div>
        <Header noofitem={this.state.numberofitem} />
        <ProductList
          products={this.state.products}
          AddToCart={this.handleCartClick}
        />
      </div>
    );
  }
}

export default App;
