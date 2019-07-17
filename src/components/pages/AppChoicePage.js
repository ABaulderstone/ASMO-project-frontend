import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppChoicePage extends Component {
    render() {
        return (
            <div>
                <h1>Choose</h1>
                <div>
                    <Link to="/review">
                        <button>Survey</button>
                    </Link>
                   
                </div>
            </div>
        );
    }
}

export default AppChoicePage;