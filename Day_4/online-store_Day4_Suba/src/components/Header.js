import React, { Component } from "react";
import Search from "./search";
const Header = ({ noofitem }) => (
  <div className="container">
    <header>
      <div className="container">
        <div className="heading">
          <span style={{ fontSize: 30 }}>E</span>store
        </div>
        <Search />
        <div className="cart-items">
          <div className="cart-property">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{noofitem}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>0</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <a class="cart-icon" href="#">
               <span class="icons"><i class="zmdi zmdi-shopping-basket" style="font-size: 40px;"></i></span>
               </a> */}
          <a
            className="cart-icon"
            data-toggle="popover"
            data-container="body"
            data-placement="bottom"
            type="button"
            data-html="true"
            href="#"
            id="logout"
          >
            <span className="icons">
              <i
                className="zmdi zmdi-shopping-basket"
                style={{ fontSize: 40 }}
              />
            </span>
          </a>
          <div id="popover-content-logout" className="hide">
            <ul className="cart-products">
              <li className="item-image">
                <img
                  src="assets/images/lcd.jpg"
                  className="cart-image-properties"
                />
                <div className="cart-add-product-properties">
                  <p className="cart-add-product-name">Lcd tv</p>
                  <p className="cart-add-product-price">RS.100</p>
                </div>
                <div className="cart-add-product-total">
                  <p className="cart-add-product-type">1 No.</p>
                  <p className="cart-add-product-total-amount">Rs.100</p>
                </div>
                <a href="#" className="cart-add-product-close">
                  X
                </a>
              </li>
              <hr />
              <li className="item-image">
                <img
                  src="assets/images/lcd.jpg"
                  className="cart-image-properties"
                />
                <div className="cart-add-product-properties">
                  <p className="cart-add-product-name">Lcd tv</p>
                  <p className="cart-add-product-price">RS.100</p>
                </div>
                <div className="cart-add-product-total">
                  <p className="cart-add-product-type">1 No.</p>
                  <p className="cart-add-product-total-amount">Rs.100</p>
                </div>
                <a href="#" className="cart-add-product-close">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="log in.html" className="button-login">
          Log in
        </a>
        <a href="sign up.html" className="button-signup">
          Sign up
        </a>
      </div>
    </header>
  </div>
);

export default Header;
