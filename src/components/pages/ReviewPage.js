import React, { Component } from "react";
import ReviewForm from "./../forms/ReviewForm";



class ReviewPage extends Component {
    render() {
        const {error} = this.props;
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <div className="ui segment">
                    {error && <div> {error} </div>}
                    <ReviewForm {...this.props} />
                </div>
            </div>
        );
    }
}


export default ReviewPage;