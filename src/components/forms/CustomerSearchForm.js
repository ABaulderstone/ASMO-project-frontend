import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { searchCustomerByNumber } from "./../../actions/index";
import YellowAlert from "./../alerts/YellowAlert"

class CustomerSearchForm extends Component {
  state = {
    loading: false,
    error: null
  };

  onFormSubmit = async formValues => {
    this.setState({ loading: true, error: false });
    const { phone } = formValues;
    this.props
      .searchCustomerByNumber(phone)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false, error: "Search Failed!" });
      });
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <>
        {error && <div className="ui red message" id="err-msg">
              {error}
            </div>}
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field
            placeholder="Phone Number"
            name="phone"
            component={Input}
            type="text"
          />

          <div className="button-container">
            {!this.state.loading && (
              <div className="button-wrapper">
                <input
                  style={{ marginBottom: "1.5rem" }}
                  className="ui primary button button-pos"
                  type="submit"
                  value="Search"
                />
              </div>
            )}
            {this.state.loading && (
              <button className="ui primary loading button">Loading</button>
            )}
          </div>
          {this.state.error && (
            <div className="ui red message" id="err-msg">
              {this.state.error}
            </div>
          )}
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
      errors.number = <YellowAlert message="Number is required!" />
    }

    return errors;
  }
})(CustomerSearchForm);
export default connect(
  null,
  { searchCustomerByNumber }
)(WrappedCustomerSearchForm);
