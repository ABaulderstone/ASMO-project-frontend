import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import "./../../styles/LoginForm.css";

class LoginForm extends Component {
  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    await this.props.loginUser(email, password).catch(err => {
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
          <div className="button-wrapper">
            <input
              className="ui button button-pos"
              type="submit"
              value="Login"
            />
          </div>
        </div>
        <div className="forget-pass-container">
          <div className="forget-pass-wrapper">
          <Link to="forgot_password">
              <button className="button-style button-effect">
                Forgot Password?
              </button>
          </Link>
            </div>
         
        </div>
        <div className="add-new-container">
          <div className="add-new-wrapper">
            <Link to="/register">
              <button className="button-style new-account-button button-effect">
                Create new account
              </button>
            </Link>
            
            {/* <a title="Create new Account"><i className="universal access icon large"></i></a> */}
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
      errors.email = "Email is required";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    }

    return errors;
  }
})(LoginForm);

export default connect(
  null,
  { loginUser }
)(WrappedLoginForm);
