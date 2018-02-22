import React, { Component } from "react";
import CartProduct from "./cartproduct";

class Cart extends Component {
  // buttonclick(props) {
  //   this.setState({
  //     cart: this.state.cart.filter(el => el.id !== props.id)
  //   });
  //   console.log("value", props);
  //   // console.log(this.state.cart);
  // }
  cartlist() {
    return this.props.cart.map((e, index) => (
      <CartProduct
        key={index}
        cartproduct={e}
        Delete={this.props.DeleteFromCart}
        index={index}
      />
    ));
  }
  render() {
    return <div className="row products-list">{this.cartlist()}</div>;
  }
}

export default Cart;
