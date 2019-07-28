import React, { Component } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import YellowAlert from "./../alerts/YellowAlert";

class RegisterForm extends Component {
  state = {
    loading: false
  };
  onFormSubmit = async formValues => {
    const { email, password, confrimPassword } = formValues;
    this.setState({ loading: true });
    await this.props
      .registerUser(email, password, confrimPassword)
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
      <>
        {error}
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="field">
            <label>Restaurant Name</label>
            <Field name="restaurantName" component={Input} type="text" />
          </div>
          <div className="field">
            <label>Email</label>
            <Field name="email" component={Input} type="text" />
          </div>
          <div className="field">
            <label>Password</label>
            <Field name="password" component={Input} type="password" />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <Field name="confrimPassword" component={Input} type="password" />
          </div>
          <div className="button-container">
            {!this.state.loading && (
              <div className="button-wrapper">
                <input
                  className="ui primary button"
                  type="submit"
                  value="Create"
                />
              </div>
            )}
            {this.state.loading && (
              <button className="ui primary loading button">Loading</button>
            )}
          </div>
          <Link to="/login">
            <button className="button-style new-account-button button-effect">
              Already have an Account?
            </button>
          </Link>
        </form>
      </>
    );
  }
}

const WrappedRegisterForm = reduxForm({
  form: "register",
  validate: formValues => {
    const errors = {};
    if (!formValues.email) {
      errors.email = (
        <YellowAlert 
        message="Email is required!"
        id="err-msg"
        /> 
      );
    }

    if (!formValues.password) {
      errors.password = (
        <YellowAlert 
        message="Password is required!"
        id="err-msg"
        /> 
      );
    }

    if (!formValues.confrimPassword) {
      errors.confrimPassword = (
        <YellowAlert 
        message="Confirm password is required!"
        id="err-msg"
        /> 
      );
    }

    if (!formValues.restaurantName) {
      errors.restaurantName = (
        <YellowAlert 
        message="Restaurant Name is required!"
        id="err-msg"
        /> 
      );
    }

    if (formValues.password !== formValues.confrimPassword) {
      errors.confrimPassword = (
        <YellowAlert 
        message="Must match password"
        id="err-msg"
        /> 
      );
    }

    return errors;
  }
})(RegisterForm);

export default connect(
  null,
  { registerUser }
)(WrappedRegisterForm);
