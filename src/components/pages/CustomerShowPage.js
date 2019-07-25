import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import { fetchCustomers } from "./../../actions/index";
import { connect } from "react-redux";
import CustomerSearchForm from "./../forms/CustomerSearchForm";
import CustomerItem from "./../../components/CustomerItem";
import { Link } from "react-router-dom";

class CustomerShowPage extends Component {
  state = {
    isClicked: null
  }
  
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    const { customers } = this.props;
    return (
      <>
        <Navbar pages={[]} />
        <div className="ui container">
          <div className="ui segment" style={{ marginBottom: "1rem" }}>
            <h1 className="page-header">Customers</h1>
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
                  key={customer._id}
                  id={customer._id}
                  name={customer.name}
                  email={customer.email}
                  phone={customer.phone}
                />
                
              );
            })}
          </table>
        </div>
                <Link to="member_search">
              <div className="button-container">
                <div className="button-wrapper">
                  <button className="ui primary button">Detailed Lookup</button>
                </div>
              </div>
            </Link>
        </>

    );
  }
}
function mapStateToProps(state) {
  return {
    customers: state.customers
  };
}
export default connect(
  mapStateToProps,
  { fetchCustomers }
)(CustomerShowPage);
