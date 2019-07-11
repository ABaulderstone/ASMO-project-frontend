import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";



class RegisterPage extends Component {
    render() {
        const {error} = this.props;
        return(
            <div>
                <h1>Register a new user</h1>
                {error && <div> {error} </div>}
                <RegisterForm {...this.props} />
            </div>
        );
    }
}


export default RegisterPage;