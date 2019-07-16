import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reviewSubmission } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import Rating from "react-rating";

class ReviewForm extends Component {
    state = {
      foodRating: null,
      serviceRating: null,
      comment: null
    }
    onFormSubmit = async formValues => {
      const { foodRating, serviceRating, comment } = this.state;
      await this.props.reviewSubmission(foodRating, serviceRating, comment)
        .catch(err => { 
          throw new SubmissionError(err.response.data);
        })
      this.props.reset();
    };

    onInputChange = (name, event) => {
       this.setState({ [name]: event / 10 })
      
    }
  
    render() {
      const { handleSubmit, error} = this.props;
      return (
        <>
        
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
        <div className="field">
        <label><h2>How was your meal?</h2></label>
          <Rating start="0" stop="5" initialRating={this.state.foodRating} onChange={(event) => this.onInputChange("foodRating", event)} />
          </div>
          <div className="field">
            <label><h2>How was your service?</h2></label>
            <Rating start="0" stop="5" initialRating={this.state.serviceRating}  onChange={(event) => this.onInputChange("serviceRating", event)} />
          </div>
          <div className="field">
            <label><h3>Any comments?</h3></label>
            <div></div>
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <input className="ui button" type="submit" value="Send" />
            </div>
          </div>
         
        </form>
        </>
        
      );
    }
  }
  
  const WrappedReviewForm = reduxForm({
    form: "review",
    validate: formValues => {
      const errors = {};
      if (!formValues.foodRating) {
        errors.foodRating = "Food rating is required";
      }
  
      if (!formValues.serviceRating) {
        errors.serviceRating = "Service rating is required";
      }
  
      return errors;
    }
  })(ReviewForm);
  
  
  export default connect(
    null,
    { reviewSubmission }
  )(WrappedReviewForm);

  