import React, { Component } from "react";
import { loginUser } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import {searchCustomerByNumber} from "./../../actions/index";


class CustomerSearchForm extends Component {
  onFormSubmit = async(formValues) => {
      const {phone} = formValues;
      this.props.searchCustomerByNumber(phone);

  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
       <>
        {error}
      <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
        <label>Phone Number</label>
        <Field name="phone" component={Input} type="number" />

        <div className="button-container">
          <div className="button-wrapper">
            <input
              className="ui button button-pos"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      </>
    );
  }
}

const WrappedCustomerSearchForm = reduxForm({
  form: "customerSearch",
  validate: formValues => {
    const errors = {};
    if (!formValues.number) {
      errors.email = "Number is required";
    }

    return errors;
  }
})(CustomerSearchForm);
export default connect(null, {searchCustomerByNumber})(WrappedCustomerSearchForm);
