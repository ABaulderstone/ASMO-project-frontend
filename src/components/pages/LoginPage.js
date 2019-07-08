import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";

class LoginPage extends Component {
    render() {
        return(
            <div>
                <h1>Log In</h1>
                <LoginForm {...this.props} />
            </div>
        );
    }
}

export default LoginPage;