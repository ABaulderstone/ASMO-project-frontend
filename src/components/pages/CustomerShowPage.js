import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";
import { fetchCustomers } from "./../../actions/index";
import {connect} from "react-redux";
import LocalAPI from "./../../apis/local";

class CustomerShowPage extends Component {
    state = {
        customers: []
    }
    componentDidMount() {
      LocalAPI.get("/customers")
        .then(response => {
            this.setState({
                customers: response
            })
        })
    }

    
   
    render() {
        // const { customers } = this.state;
        console.log(this.state.customers)
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


export default CustomerShowPage