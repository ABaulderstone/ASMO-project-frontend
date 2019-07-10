import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";
import { connect } from "react-redux";


class RegisterPage extends Component {
    render() {
        const {error} = this.props;
        console.log();
        return(
            <div>
                <h1>Register a new user</h1>
                {error && <div> {error} </div>}
                <RegisterForm {...this.props} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      error: state.auth.error 
    };
  };

export default connect(mapStateToProps)(RegisterPage);