import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import LocalAPI from "./../../apis/local";
import Input from "./fields/Input";
import AddressForm from "../address/AddressForm";
import stringifyAddress from "./../../utility/stringifyAddress";

import ReduxMonthDropdown from "./fields/ReduxMonthDropdown";
import YellowAlert from "../alerts/RedAlert";


class MemberSignUpForm extends Component {
  state = {
    loading: false
  };
  onFormSubmit = async formValues => {
    const { name, phone, email, unit, birthday = "not given", anniversary = "not given" } = formValues;
    this.setState({ loading: true });
    const add = this.props.address.address;
  

    if (add) {
      const address = stringifyAddress(unit, add);
      await LocalAPI.post(`/customers`, {
        name,
        phone,
        email,
        address,
        birthday,
        anniversary
      })
        .then(() => {
          this.setState({ loading: false });
          this.props.reset();
          this.props.history.push("/thankyou_member");
        })
        .catch(err => {
          this.setState({ loading: false });
          throw new SubmissionError(err.response.data);
        });
    } else
      await LocalAPI.post(`/customers`, {
        name,
        phone,
        email,
        birthday,
        anniversary
      })
        .then(() => {
          this.setState({ loading: false });
          this.props.reset();
          this.props.history.push("/thankyou_member");
        })
        .catch(err => {
          this.setState({ loading: false });
          throw new SubmissionError(err.response.data);
        });
  };

  render() {
    const { handleSubmit, error } = this.props;
    

    return (
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
          <label>Address 1 (optional)</label>
          <Field
            name="unit"
            component={Input}
            type="text"
            placeholder="Apartment, suite, unit number."
          />
        </div>
        <div>
          <AddressForm />
        </div>

        <div>
          <label>Birthday</label>
          <Field
            name="birthday"
            component={ReduxMonthDropdown}
            label="Eat for free on your birthday!"
            
          />
        </div>

        <div>
          <label>Anniversary</label>
          <Field
            name="anniversary"
            component={ReduxMonthDropdown}
            label="Free bottle of wine on your anniversary!"
            
          />
        </div>

        <div className="button-container">
          {!this.state.loading && (
            <input className="ui green button" type="submit" value="Submit" />
          )}
          {this.state.loading && (
            <button className="ui green loading  button">Loading</button>
          )}
        </div>
      </form>
    );
  }
}

const WrappedMemberSignUpForm = reduxForm({
  form: "membersignup",
  validate: formValues => {
    const errors = {};
    if (!formValues.name) {
      errors.name = <YellowAlert message="Name is required!" />
    }

    if (!formValues.phone) {
      errors.phone = <YellowAlert message="Phone is required!" />
    }

    if (!formValues.email) {
      errors.email = <YellowAlert message="Email is required!" />
    }

    if (
      !/^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/.test(
        formValues.phone
      )
    ) {
      errors.phone = <YellowAlert message="Not a valid Australian mobile number!" />
    }

    return errors;
  }
})(MemberSignUpForm);

function mapStateToProps(state) {
  return {
    address: state.address
  };
}

export default connect(
  mapStateToProps,
  null
)(WrappedMemberSignUpForm);
