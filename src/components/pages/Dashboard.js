import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import 'bulma/css/bulma.css';
import BarChart from "../chart/BarChart"

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

                    <BarChart />
                </div>
            </>
        );
    }
}

export default Dashboard;