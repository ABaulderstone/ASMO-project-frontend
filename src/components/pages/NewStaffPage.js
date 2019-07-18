import React, { Component } from "react";
import { Link } from "react-router-dom"
import StaffForm from "./../forms/StaffForm";


class NewStaffPage extends Component {
    render() {
        return (
            <>
            <h1>New Staff Member</h1>
            <div className="ui container" style={{marginTop: "10px"}}>
                <div className="ui segment">
                    <StaffForm  />
                </div>
            </div>
           
            </>
        )
    }
}




export default NewStaffPage;