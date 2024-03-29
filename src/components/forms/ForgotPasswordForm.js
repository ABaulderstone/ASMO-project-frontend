import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import YellowAlert from "../alerts/YellowAlert";

class ForgotPasswordForm extends Component {
  onFormSubmit = async formValues => {
    const { email } = formValues;
    await this.props.ForgotPasswordSubmission(email).catch(err => {
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
            <label>Email</label>
            <Field name="email" component={Input} type="text" />
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

const WrappedForgotPasswordForm = reduxForm({
  form: "register",
  validate: formValues => {
    const errors = {};
    if (!formValues.email) {
      errors.email = <YellowAlert message="Email is required!" />
    }

    return errors;
  }
})(ForgotPasswordForm);

export default connect(
  null
  //   { ForgotPasswordSubmission }
)(WrappedForgotPasswordForm);
