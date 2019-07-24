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
import { Select } from 'semantic-ui-react'

class MemberSignUpForm extends Component {

  state = {
    loading: false
  }
  onFormSubmit = async formValues => {
    const { name, phone, email, unit } = formValues;
    this.setState({loading: true})
    const add = this.props.address.address;
    console.log(formValues);

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
    const birthdayOptions = [
      { key: 'af', value: 'af', text: 'January' },
      { key: 'ax', value: 'ax', text: 'February' },
      { key: 'al', value: 'al', text: 'March' },
      { key: 'dz', value: 'dz', text: 'April' },
      { key: 'as', value: 'as', text: 'May' },
      { key: 'ad', value: 'ad', text: 'June' },
      { key: 'ao', value: 'ao', text: 'July' },
      { key: 'ai', value: 'ai', text: 'August' },
      { key: 'ag', value: 'ag', text: 'September' },
      { key: 'ar', value: 'ar', text: 'October' },
      { key: 'am', value: 'am', text: 'Novemer' },
      { key: 'aw', value: 'aw', text: 'December' },
  ]

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
          <Field  name="birthday" component={Select} placeholder="Get a Free Meal" options={birthdayOptions}>
            
          </Field>

        </div>

        <div>
          <label>Anniversary</label>
          <Field 
          name="anniversary"
          component={Anniversary}
          />
        </div>

        <div className="button-container">
        {!this.state.loading && <input className="ui green button" type="submit" value="Submit" /> }
        {this.state.loading && <button className="ui green loading  button" >Loading</button>}
          
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
      errors.name = <div style={{display: "inline-block", margin: "0.5rem 0 0.5rem 0"}} className="ui yellow message">Name is required!</div>;
    }

    if (!formValues.phone) {
      errors.phone = <div style={{display: "inline-block", margin: "0.5rem 0 0.5rem 0"}} className="ui yellow message">Phone is required!</div>;
    }

    if (!formValues.email) {
      errors.email = <div style={{display: "inline-block", margin: "0.5rem 0 0.5rem 0"}} className="ui yellow message">Email is required!</div>;
    }

    if (!(/^04(\s?[0-9]{2}\s?)([0-9]{3}\s?[0-9]{3}|[0-9]{2}\s?[0-9]{2}\s?[0-9]{2})$/.test(formValues.phone))) {
      errors.phone = <div style={{display: "inline-block", margin: "0.5rem 0 0.5rem 0"}} className="ui yellow message">Not a Valid Australian Mobile Number!</div>;
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
