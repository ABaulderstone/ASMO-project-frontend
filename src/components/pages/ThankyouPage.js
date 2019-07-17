import React from "react"
import { Link } from "react-router-dom";
import { Component } from "react";

class ThankyouPage extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/reviews")
        }, 3000)
    }

    render () {
        return (
            <div className="ui container">
                <div className="ui segment" style={{textAlign: "center"}}>
                    <h1>Thankyou For Your Feedback!</h1>
                </div> 
            </div>       
            
        )

    
    }
}

export default ThankyouPage;

 




 
