import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import {connect} from "react-redux";
import CustomerSearchForm from "./../forms/CustomerSearchForm"


class CustomerSearchPage extends Component {
    render() {
        const {customers} = this.props;
        return (
            <>
                <Navbar />
                    <div>
                        <h1>Search here</h1>
                        <CustomerSearchForm />
                         
                    </div>
            </>
        );
    }
}
function mapStateToProps (state) {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps) (CustomerSearchPage);