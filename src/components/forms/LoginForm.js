import React, { Component } from "react";
import { loginUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
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
    await this.props.loginUser(email, password).catch(err => {
      throw new SubmissionError(err.response.data);
    });
    this.props.reset();
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Form size="large" onSubmit={handleSubmit(this.onFormSubmit)}>
              {error}
              <div>
                <label>Email</label>
                <Field name="email" component={Input} type="text" />
              </div>
              <div>
                <label>Password</label>
                <Field component={Input} type="password" />
              </div>
              <Button color="red" fluid size="large" type="submit">
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
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
