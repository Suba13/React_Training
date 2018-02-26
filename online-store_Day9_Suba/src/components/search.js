import React, { Component } from "react";
import * as productActions from "../actionCreators/product";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Link} from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form className="search-input">
          <input
            type="search"
            placeholder="Search for Electronics"
            value={this.props.searchValue}
            onChange={e => {
              this.props.SubmitClick(e.target.value)
            }}
            className="search-label"
          />
          <Link to="/search-page"><button className="search-iconbutton" type="submit" onClick={() => {
            
          }}/>
          </Link>
        </form>
      </div>
    );
  }
}
export default (Search);
