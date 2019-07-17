import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from 'react-dom';
import Navbar from "./../navbar/Navbar";
import 'bulma/css/bulma.css';






class Dashboard extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div>
                <h1>Dashboard</h1>
                <div>
                    Land of Smiles
                </div>
            </div>
            </>
        );
    }
}

export default Dashboard;