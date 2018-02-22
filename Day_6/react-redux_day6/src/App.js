import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counteraction from "./actionCreators";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.inc}>Increment</button>
        <button onClick={this.props.dec}>Decrement</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
function mapDispatchToprops(dispatch) {
  return {
    inc: () => dispatch(counteraction.inc(2)),
    dec: () => dispatch(counteraction.dec(5))
    // actions: bindActionCreators(counteraction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToprops)(App);
