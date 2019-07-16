import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reviewSubmission } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";

class ReviewForm extends Component {
    onFormSubmit = async formValues => {
      const { foodRating, serviceRating, comment } = formValues;
      await this.props.reviewSubmission(foodRating, serviceRating, comment)
        .catch(err => { 
          throw new SubmissionError(err.response.data);
        })
      this.props.reset();
    };
  
    render() {
      const { handleSubmit, error} = this.props;
      
      return (
        <>
        
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
        <div className="field">
            <label>Restaurant Name</label>
            <Field name="restaurantName" component={Input} type="text" />
          </div>
          <div className="field">
            <label>Email</label>
            <Field name="email" component={Input} type="text" />
          </div>
          <div className="field">
            <label>Password</label>
            <Field name="password" component={Input} type="password" />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <Field name="confrimPassword" component={Input} type="password" />
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <input className="ui button" type="submit" value="create" />
            </div>
          </div>
         
        </form>
        </>
        
      );
    }
  }
  
  const WrappedReviewForm = reduxForm({
    form: "register",
    validate: formValues => {
      const errors = {};
      if (!formValues.email) {
        errors.email = "Email is required";
      }
  
      if (!formValues.password) {
        errors.password = "Password is required";
      }
  
  
      if (!formValues.confrimPassword) {
        errors.confrimPassword = " Confirm Password is required";
      }
  
      if (!formValues.restaurantName) {
        errors.restaurantName = " Restaurant name is required";
      }
  
      return errors;
    }
  })(ReviewForm);
  
  
  export default connect(
    null,
    { reviewSubmission }
  )(WrappedReviewForm);