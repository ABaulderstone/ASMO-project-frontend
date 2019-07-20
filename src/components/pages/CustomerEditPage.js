import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import LocalAPI from "./../../apis/local";
import Input from "./../forms/fields/Input";
import AddressForm from "../address/AddressForm";
import stringifyAddress from "./../../utility/stringifyAddress";
import { deleteCustomer } from "./../../actions/index/";

class CustomerEditPage extends Component {
  onFormSubmit = async formValues => {
    const { name, phone, email, unit } = formValues;
    const add = this.props.address.address;

    if (add) {
      const address = stringifyAddress(unit, add);
      await LocalAPI.put(`/customers`, {
        name,
        phone,
        email,
        address
      })
        .then(() => {
          this.props.reset();
          this.props.history.push("/customer");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    }

    await LocalAPI.post(`/customers`, {
      name,
      phone,
      email
    })
      .then(() => {
        this.props.reset();
        this.props.history.push("/thankyou_member");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };

  onDeleteButtonClick = async () => {
    const { id } = this.state;
    await this.props.deleteCustomer(id);
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <>
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
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
            <label>Unit</label>
            <Field
              name="unit"
              component={Input}
              type="text"
              placeholder="optional"
            />
          </div>
          <div>
            <AddressForm />
          </div>
          <div className="button-container">
            <input className="ui button" type="submit" value="Submit" />
          </div>
        </form>
        <Link to="/customers/show">
          <div className="button-container">
            <div className="button-wrapper">
              <input className="ui button" value="Cancel" />
            </div>
          </div>
        </Link>
        <Link to="/customer/show">
          <div className="button-container">
            <div className="button-wrapper">
              <input
                className="ui button"
                onClick={this.onDeleteButtonClick}
                value="Delete"
              />
            </div>
          </div>
        </Link>
      </>
    );
  }
}

const WrappedCustomerEditPage = reduxForm({
  form: "customer edit",
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
})(CustomerEditPage);

function mapStateToProps(state) {
  return {
    address: state.address
  };
}

export default connect(
  mapStateToProps,
  null
)(WrappedCustomerEditPage);
