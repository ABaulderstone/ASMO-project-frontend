import React, { Component } from "react";
import { loginUser } from "./../../actions";
import LocalAPI from "./../../apis/local";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends Component {
  onFormSubmit = async formValues => {
    const { email, password } = formValues;
    await this.props.loginUser(email, password);
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
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const WrappedLoginForm = reduxForm({
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
})(LoginForm);

export default connect(
  null,
  { loginUser }
)(WrappedLoginForm);
