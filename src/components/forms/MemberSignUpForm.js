import React, { Component } from "react";
import { registerMember } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";

class MemberSignUpForm extends Component {
  onFormSubmit = async formValues => {
    const { name, phone, email } = formValues;
    await this.props.registerMember(name, phone, email).catch(err => {
      throw new SubmissionError(err.response.data);
    });
    this.props.reset();
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        {error}
        <div>
          <label>Name</label>
          <Field name="name" component={Input} type="text" />
        </div>
        <div>
          <label>Phone</label>
          <Field name="phone" component={Input} type="number" />
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component={Input} type="text" />
        </div>
        <div>
          <label>Address</label>
          <Field name="address" component={Input} type="text" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const WrappedMemberSignUpForm = reduxForm({
  form: "member",
  validate: formValues => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is required";
    }

    if (!formValues.phone) {
      errors.phone = "Phone is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    }

    return errors;
  }
})(MemberSignUpForm);

export default connect(
  null,
  { registerMember }
)(WrappedMemberSignUpForm);
