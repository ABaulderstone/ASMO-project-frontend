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
        <div className="ui container">
          <div className="ui segment">
          <h1 style={{textAlign: "center", marginBottom: "1vh", fontSize: "2vw"}}>Comments</h1>
          
         
            {reviews.map(review => {
              if (review.comment){
              return (
                <CommentCard
                  key={review._id}
                  comment={review.comment}
                  foodRating={review.foodRating}
                  serviceRating={review.serviceRating}
                  date={review.date}
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
