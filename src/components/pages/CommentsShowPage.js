import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
// import { Link } from "react-router-dom";

class CommentsShowPage extends Component {
    render() {
        return (
            <>
                <Navbar />    
                    <div>
                        <h1>Comments</h1>
                    </div>
            </>
        );
    }
}

export default CommentsShowPage;