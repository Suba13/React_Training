import React, { Component } from "react";
import SearchProduct from "./searchproduct";

class SearchList extends Component {
  productlist() {
    return this.props.searchvaluenew.map((e, index) => (
      <SearchProduct
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

export default SearchList;
