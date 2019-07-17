import React, { Component } from "react";
import ReviewForm from "./../forms/ReviewForm";
import { connect } from "react-redux";
import { resetReview } from "../../actions";



class ReviewPage extends Component {
    render() {
        const {error} = this.props;
    if (this.props.review.isSubmitted) {
        this.props.resetReview();
        this.props.history.push("/thankyou")
    }
        return(
            <div className="ui container">
                <div className="ui segment">
                    {error && <div> {error} </div>}
                    <ReviewForm {...this.props} />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      review: state.review
    }
  }

export default connect(mapStateToProps, {resetReview})(ReviewPage);