import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import { searchCustomerByNumber } from "./../../actions/index";

class CustomerSearchForm extends Component {
  state = {
    loading: false
  };

  onFormSubmit = async formValues => {
    this.setState({ loading: true });
    const { phone } = formValues;
    this.props.searchCustomerByNumber(phone)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <>
        {error}
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field
            placeholder="Phone Number"
            name="phone"
            component={Input}
            type="number"
          />

          <div className="button-container">
            {!this.state.loading && <div className="button-wrapper">
              <input
                style={{ marginBottom: "1.5rem" }}
                className="ui primary button button-pos"
                type="submit"
                value="Search"
              />
            </div>}
            {this.state.loading && <button className= "ui primary loading button">Loading</button>}
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
export default connect(
  null,
  { searchCustomerByNumber }
)(WrappedCustomerSearchForm);
