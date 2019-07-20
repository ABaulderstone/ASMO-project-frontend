import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";
import { fetchCustomers } from "./../../actions/index";
import {connect} from "react-redux";
import LocalAPI from "./../../apis/local";
import CustomerItem from "./../../components/CustomerItem";

class CustomerShowPage extends Component {
    state = {
        customers: []
    }
    componentDidMount() {
      LocalAPI.get("/customers")
        .then(response => {
            this.setState({
                customers: response.data
            })
        })
    }

    
   
    render() {
         const { customers } = this.state;
        console.log(customers)
        return (
            <>
            <Navbar />
                <h1>Customers</h1>
                <div className="ui container">
                
                <table className="ui celled table">
                <thead>
                    <tr><th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                {customers.map(customer => {
                    return <CustomerItem id={customer.id} name={customer.name} email={customer.email} phone={customer.phone} />
                })}
                </table>
                
                </div>
            </>
        );
    }
}


export default CustomerShowPage