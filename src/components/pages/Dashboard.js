import React, { Component } from "react";
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