import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import { connect } from "react-redux";
import CustomerSearchForm from "./../forms/CustomerSearchForm";
import CustomerCard from "./../CustomerCard";

class CustomerSearchPage extends Component {
  render() {
    const { customers } = this.props;
    return (
      <>
        <Navbar />
        <div>
          <h1>Search here</h1>
          <CustomerSearchForm />
          {customers.map(customer => {
            return (
              <CustomerCard
                name={customer.name}
                email={customer.email}
                phone={customer.phone}
                address={customer.address}
              />
            );
          })}
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

export default connect(mapStateToProps)(CustomerSearchPage);
