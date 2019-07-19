import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import { connect } from "react-redux"
import {fetchComments} from "./../../actions/index"

// import { Link } from "react-router-dom";

class CommentsShowPage extends Component {
    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const {reviews} = this.props;
        return (
            <>
                <Navbar />    
                    <div>
                        <h1>Comments</h1>

                        <ul> {reviews.map (review => {
                            return(<li key={review._id}>
                                {review.comment}
                            </li>)
                        })}

                        </ul>
                        
                    </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        reviews: state.review.reviews
    }
}

export default connect(mapStateToProps, {fetchComments})(CommentsShowPage);