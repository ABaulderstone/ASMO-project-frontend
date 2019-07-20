import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";

class CustomerShowPage extends Component {
    render() {
        return (
            <>
            <Navbar />
                <h1>Customers</h1>
                <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                </table>
            </>
        );
    }
}

export default CustomerShowPage;