import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reviewSubmission } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import Rating from "react-rating";
import "./../../styles/ReviewForm.css"


class ReviewForm extends Component {
    state = {
      foodRating: null,
      serviceRating: null,
      comment: null
    }
    onFormSubmit = async formValues => {
      const { foodRating, serviceRating, comment } = this.state;
      if (comment) {
        return(
      await this.props.reviewSubmission(foodRating, serviceRating, comment)
        .catch(err => { 
          throw new SubmissionError(err);
        })
        )
      }

      await this.props.reviewSubmission(foodRating, serviceRating)
        .catch(err => { 
          throw new SubmissionError(err);
        })
      this.setstate({
        foodRating: null,
        serviceRating: null,
        comment: null
      }) 
       
      
    };

    onInputChange = (name, event) => {
       this.setState({ [name]: event / 10 })
      
    }

    onCommentChange = (name, event) => {
      this.setState({ [name]: event.target.value })
    }

    render() {
      const { handleSubmit, error} = this.props;
      return (
        <>
        
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
        
          <div className="field">
            <div className="rating-container">
              <label><h2>How was your meal?</h2></label>
            </div>
            <div className="rating-container">
            <Rating className="food-rating" start="0" stop="5" initialRating={this.state.foodRating} onChange={(event) => this.onInputChange("foodRating", event)} />
            </div>
            </div>
          
          
            <div className="field">
              <div className="rating-container">
              <label><h2>How was the service?</h2></label>
              </div>
              <div className="rating-container">
              <Rating className="service-rating" start="0" stop="5" initialRating={this.state.serviceRating}  onChange={(event) => this.onInputChange("serviceRating", event)} />
              </div>
          </div>  
          <div >
            <div className="field">
            <div className="rating-container">
              <label><h3>Any comments?</h3></label>
            </div>
              <div>
                <textarea className="text-area" onInput={(event) => this.onCommentChange("comment", event)}></textarea>
              </div>
            </div>
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

  