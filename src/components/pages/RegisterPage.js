import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";
import { connect } from "react-redux";


class RegisterPage extends Component {
    render() {
        const {error} = this.props;
        console.log();
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <div className="ui segment">
                    <h1 className="text">Register a new user</h1>
                    {error && <div> {error} </div>}
                    <RegisterForm {...this.props} />
                </div>
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