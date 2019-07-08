import React, { Component } from "react";
import { registerUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

class RegisterForm extends Component {
  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    await this.props.registerUser(email, password);
    this.props.reset();
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label>Email</label>
          <Field name="email" component={Input} type="text" />
        </div>
        <div>
          <label>Password</label>
          <Field name="password" component={Input} type="password" />
        </div>
        <input type="submit" value="Register" />
      </form>
    );
  }
}

const WrappedRegisterForm = reduxForm({
  form: "register",
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
})(RegisterForm);

export default connect(
  null,
  { registerUser }
)(WrappedRegisterForm);
