import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div className="ui segment">
          <h1 className="page-header">Login</h1>
          <LoginForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
