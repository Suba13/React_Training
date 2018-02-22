import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: this.props.cart };
  }
  buttonclick(props) {
    this.setState({
      cart: this.state.cart.filter(el => el.name !== props.name)
    });
    console.log("value", props);
    // console.log(this.state.cart);
  }
  cartlist() {
    return this.state.cart.map((e, index) => {
      return (
        <div key={index} style={{ paddingTop: "100px" }}>
          <h2>Product_Name={e.name}</h2>
          <h2>Product_price={e.price}</h2>
          <button
            style={{ paddingTop: "10px" }}
            onClick={this.buttonclick.bind(this, e)}
          >
            DELETE
          </button>
        </div>
      );
    });
  }
  render() {
    return <div>{this.cartlist()}</div>;
  }
}

export default Cart;
