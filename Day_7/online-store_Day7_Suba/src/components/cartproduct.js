import React from "react";
import { Link } from "react-router-dom";
const CartProduct = ({ cartproduct, Delete, index }) => (
  <div className="col-md-3">
    <div className="each-product">
      <div className="product-image-properties">
        <Link to={`product-detail/${cartproduct.name}/${cartproduct.price}`}>
          <img src={cartproduct.image} className="images" />
        </Link>
      </div>
      <h4 className="product-name">{cartproduct.productName}</h4>
      <p className="product-price">{cartproduct.price}</p>
      <div className="product-button">
        <button
          type="button"
          className="cart-add-button"
          onClick={function() {
            Delete(cartproduct, index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default CartProduct;
