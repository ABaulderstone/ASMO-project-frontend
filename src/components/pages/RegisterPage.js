import React, { Component } from "react";
import RegisterForm from "./../forms/RegisterForm";



class RegisterPage extends Component {
    render() {
        const {error} = this.props;
        if (this.props.review.isSubmitted) {
            this.props.resetReview();
            this.props.history.push("/thankyou")
          }
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


export default RegisterPage;