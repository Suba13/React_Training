import React, { Component } from "react";
import { Link } from "react-router-dom";
const Productdetail = props => (
  <div>
    <h1 style={{ paddingTop: "100px" }}>Product detail</h1>
    <p>Name:{props.match.params.name}</p>
    <p>Price:{props.match.params.price}</p>
  </div>
);

export default Productdetail;
