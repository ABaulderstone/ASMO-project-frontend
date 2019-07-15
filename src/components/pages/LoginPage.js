import React, { Component } from "react";
import LoginForm from "./../forms/LoginForm";
import "./../../styles/LoginPage.css"

class LoginPage extends Component {
    render() {
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <div className="ui segment">    
                    <h1 className="text">Login</h1>
                    <LoginForm {...this.props} />
                </div>
            </div>
        );
    }
}

export default LoginPage;