import React, { Component } from "react";
import ReviewForm from "./../forms/ReviewForm";

class ReviewPage extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <ReviewForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default ReviewPage;
