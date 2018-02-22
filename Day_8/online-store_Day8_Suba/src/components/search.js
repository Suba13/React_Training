import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form className="search-input">
          <input
            type="search"
            placeholder="Search for Electronics"
            className="search-label"
          />
          <button className="search-iconbutton" type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
