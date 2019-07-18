import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reviewSubmission } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import Rating from "react-rating";
import "./../../styles/ReviewForm.css";

//smiling face white
import est1 from "./../../images/est1.png";
import es2 from "./../../images/es2.png";
import es3 from "./../../images/es3.png";
import es4 from "./../../images/es4.png";
import es5 from "./../../images/es5.png";

//smiling face yellow 
import fst1 from "./../../images/fst1.png";
import fs2 from "./../../images/fs2.png";
import fs3 from "./../../images/fs3.png";
import fs4 from "./../../images/fs4.png";
import fs5 from "./../../images/fs5.png";

class ReviewForm extends Component {
  state = {
    foodRating: null,
    serviceRating: null,
    comment: null
  }
  onFormSubmit = async formValues => {
    const { foodRating, serviceRating, comment } = this.state;
    if (comment) {
      return (
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
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event })

  }

  onCommentChange = (name, event) => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { handleSubmit, error } = this.props;


    return (
      <>
        {error}
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>

          <div className="field">
            <div className="rating-container" style={{ marginBottom: "20px" }}>
              <label><h2>How was your meal?</h2></label>
            </div>
            <div className="rating-container">

              <Rating
                initialRating={this.state.foodRating}
                onChange={(event) => this.onInputChange("foodRating", event)}
                emptySymbol={[est1, est1, est1, est1, est1].map(es => <span className="icon-text"><img style={{ padding: "0 9px 0 9px" }} src={es} /></span>)}
                fullSymbol={[fst1, fst1, fst1, fst1, fst1].map(fs => <span className="icon-text"><img style={{ padding: "0 9px 0 9px" }} src={fs} /></span>)}
              />


            </div>
          </div>
          <div className="field">
            <div className="rating-container" style={{ marginBottom: "20px" }}>
              <label><h2>How was your meal?</h2></label>
            </div>
            <div className="rating-container">

              <Rating
                initialRating={this.state.serviceRating}
                onChange={(event) => this.onInputChange("serviceRating", event)}
                emptySymbol={[est1, est1, est1, est1, est1].map(es => <span className="icon-text"><img style={{ padding: "0 9px 0 9px" }} src={es} /></span>)}
                fullSymbol={[fst1, fst1, fst1, fst1, fst1].map(fs => <span className="icon-text"><img style={{ padding: "0 9px 0 9px" }} src={fs} /></span>)}
              />


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

