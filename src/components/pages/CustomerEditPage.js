import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import LocalAPI from "./../../apis/local";
import Input from "./../forms/fields/Input";
import AddressForm from "../address/AddressForm";
import stringifyAddress from "./../../utility/stringifyAddress";
import { deleteCustomer } from "./../../actions/index";

class CustomerEditPage extends Component {
  onFormSubmit = async formValues => {
    const { name, phone, email, unit } = formValues;
    const add = this.props.address.address;
    const { id } = this.state;

    if (add) {
      const address = stringifyAddress(unit, add);
      await LocalAPI.put(`/customers/${id}`, {
        name,
        phone,
        email,
        address
      })
        .then(() => {
          this.props.reset();
          this.props.history.push("/customers/show");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    }

    await LocalAPI.put(`/customers/${id}`, {
      name,
      phone,
      email
    })
      .then(() => {
        this.props.reset();
        this.props.history.push("/customers/show");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };

  onDeleteButtonClick = async () => {
    const { id } = this.state;
    console.log(id);
    await this.props.deleteCustomer(id).then(() => {
      this.props.history.push("/customers/show")
    }).catch(err => {
      throw new SubmissionError(err.response.data)
    });
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const id = pathname.split("/")[2];
    this.setState({ id: id });
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <>
        <div className="ui container">
          <div className="ui segment">
            <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>Edit Customer</h1>
            <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
              {error}
              <div>
                <label>Name</label>
                <Field name="name" component={Input} type="text" />
              </div>
              <div>
                <label>Phone</label>
                <Field name="phone" component={Input} type="text" />
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
                <input className="ui green button" type="submit" value="Save" />
              </div>
            </form>
            <Link to="/customers/show">
              <div className="button-container">
                <div className="button-wrapper">
                  <button className="ui yellow button">Cancel</button>
                </div>
              </div>
            </Link>

            <div className="button-container">
              <div className="button-wrapper">
                <button
                  className="ui red button"
                  onClick={this.onDeleteButtonClick}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

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
    if (!(/^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/.test(formValues.phone))) {
      errors.phone = "Not a valid Australian mobile number"
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
  { deleteCustomer }
)(WrappedCustomerEditPage);
