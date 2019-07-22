import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import LocalAPI from "./../../apis/local";
import Input from "./fields/Input";
import AddressForm from "../address/AddressForm";
import "./../../styles/MemberSignUpForm.css";
import stringifyAddress from "./../../utility/stringifyAddress";
import Birthday from "./../birthday/Birthday";
import Anniversary from "./../anniversary/Anniversary";

class MemberSignUpForm extends Component {
  onFormSubmit = async formValues => {
    const { name, phone, email, unit } = formValues;
    const add = this.props.address.address;

    if (add) {
      const address = stringifyAddress(unit, add);
      await LocalAPI.post(`/customers`, {
        name,
        phone,
        email,
        address
      })
        .then(() => {
          this.props.reset();
          this.props.history.push("/thankyou_member");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    } else

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

        <div>
          <label>Birthday</label>
          <Birthday />
        </div>

        <div>
          <label>Anniversary</label>
          <Anniversary />
        </div>

        <div className="button-container">
          <input className="ui button" type="submit" value="Submit" />
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
