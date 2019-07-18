import React, { Component } from "react";


class ThankyouMemberPage extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/customer")
        }, 3000)
    }
    
    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <h1 style={{fontSize: "30px"}}>Thank you for becoming a member!</h1>
                    <p>Check your email for a promotion!</p>
                </div>
            </div>
        );
    }
}

export default ThankyouMemberPage;
