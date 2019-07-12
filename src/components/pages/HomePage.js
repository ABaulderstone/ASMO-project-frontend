import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Satisfeed HomePage</h1>
                <div>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    <Link to="/dashboard">
                        <button>dashboard</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomePage;