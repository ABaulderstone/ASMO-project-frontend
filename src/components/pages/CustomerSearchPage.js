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
        <div className="ui container">
          <div className="ui segment">
            <h1 className="page-header">Member Search</h1>
            <CustomerSearchForm />
            {customers.map(customer => {
              return (
                <CustomerCard
                  name={customer.name}
                  email={customer.email}
                  phone={customer.phone}
                  address={customer.address}
                  birthday={customer.birthday}
                  anniversary={customer.anniversary}
                />
              );
            })}
          </div>
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
