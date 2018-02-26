import React, { Component } from "react";
import { bindActionCreators } from "redux";
import * as userActions from "../actionCreators/user";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    //this.state = { username: "bala" };
  }

  componentWillMount() {
    console.log("componentWillMount", this.passwordEle);
  }

  componentDidMount() {
    console.log("componentDidMount", this.passwordEle);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.username, this.passwordEle.value);
  };
  render() {
    console.log("render");
    return (
      <div style={{ paddingTop: "150px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.username}
            onChange={e => {
              this.props.actions.inputChange(e.target.value);
            }}
          />
          <input type="password" ref={e => (this.passwordEle = e)} />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    username: state.userState.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
