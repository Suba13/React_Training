import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  productlist() {
    return this.props.products.map((e, index) => (
      <Product
        key={index}
        product={e}
        AddToCart={this.props.AddToCart}
        index={index}
      />
    ));
  }
  render() {
    return <div className="row products-list">{this.productlist()}</div>;
  }
}

export default ProductList;
