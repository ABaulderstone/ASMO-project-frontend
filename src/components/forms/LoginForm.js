import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import YellowAlert from "./../alerts/YellowAlert";

class LoginForm extends Component {
  state = {
    loading: false
  };

  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    this.setState({ loading: true });
    await this.props
      .loginUser(email, password)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
    this.props.reset();
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
        {error}
        <div className="field">
          <label>Email</label>
          <Field name="email" component={Input} type="text" />
        </div>
        <div className="field">
          <label>Password</label>
          <Field name="password" component={Input} type="password" />
        </div>
        <div className="button-container">
          {!this.state.loading && (
            <div className="button-wrapper">
              <input
                className="ui primary button button-pos"
                type="submit"
                value="Login"
              />
            </div>
          )}
          {this.state.loading && (
            <button className="ui primary loading button">Loading</button>
          )}
        </div>

        {/* <div className="forget-pass-container">
          <div>
            <Link to="forgot_password">
              <button className="button-style button-effect">
                Forgot Password?
              </button>
            </Link>
          </div>
        </div> */}
        <div className="add-new-container">
          <div>
            <Link to="/register">
              <button className="button-style new-account-button">
                Create new account
              </button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

const WrappedLoginForm = reduxForm({
  form: "login",
  validate: formValues => {
    const errors = {};
    if (!formValues.email) {
      errors.email = (

        <YellowAlert 
        message="Email is required!"
        display= "inline-block"
        margin= "0.5rem 0 0.5rem 0"
        padding="8px 16px 8px 16px"
        /> 
 
      );
    }

    if (!formValues.password) {
      errors.password = (
   
        <YellowAlert 
        message="Password is required!"
        display= "inline-block"
        margin= "0.5rem 0 0.5rem 0"
        padding="8px 16px 8px 16px"
        /> 
 
      );
    }

    return errors;
  }
})(LoginForm);

export default connect(
  null,
  { loginUser }
)(WrappedLoginForm);
