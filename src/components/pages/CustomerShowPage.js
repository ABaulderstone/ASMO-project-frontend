import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";
import { fetchCustomers } from "./../../actions/index";
import { connect } from "react-redux";
import CustomerSearchForm from "./../forms/CustomerSearchForm";
import CustomerItem from "./../../components/CustomerItem";

class CustomerShowPage extends Component {
  
    componentDidMount() {
    this.props.fetchCustomers()
  }

  render() {
    const { customers } = this.props;
    console.log(customers);
    return (
      <>
        <Navbar />
        <div className="ui container">
        <div className="ui segment" style={{marginBottom: "1rem"}}>
        <h1>Customers</h1>
        <CustomerSearchForm />
        </div>
        </div>
        <div className="ui container">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
              </tr>
            </thead>
            {customers.map(customer => {
              return (
                <CustomerItem
                  id={customer._id}
                  name={customer.name}
                  email={customer.email}
                  phone={customer.phone}
                />
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    customers: state.customers
  };

}
export default connect(mapStateToProps, {fetchCustomers}) (CustomerShowPage);
