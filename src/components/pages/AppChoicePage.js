import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";
class AppChoicePage extends Component {
    render() {
        return (
            <>
                <Navbar />
                    <div>
                        <h1>Choose</h1>
                        <div>
                            <Link to="/review">
                                <button>Survey</button>
                            </Link>
                        
                        </div>
                    </div>
            </>
        );
    }
}

export default AppChoicePage;