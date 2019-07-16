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
            <h1>Thankyou For Your Feedback!</h1>
        )

    
    }
}

export default ThankyouPage;

 




 
