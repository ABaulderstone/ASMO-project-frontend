import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import { connect } from "react-redux";
import { fetchComments } from "./../../actions/index";
import CommentCard from "./../CommentCard";

// import { Link } from "react-router-dom";

class CommentsShowPage extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { reviews } = this.props;
    return (
      <>
        <Navbar />
        <div>
          <h1>Comments</h1>
          <div className="cards">
            {reviews.map(review => {
              if (review.comment){
              return (
                <CommentCard
                  id={review._id}
                  comment={review.comment}
                  foodRating={review.foodRating}
                  serviceRating={review.serviceRating}
                />
              );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.review.reviews
  };
};

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentsShowPage);
