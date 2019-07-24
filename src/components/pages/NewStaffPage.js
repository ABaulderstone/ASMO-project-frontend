import React, { Component } from "react";
import StaffForm from "./../forms/StaffForm";
import 'bulma/css/bulma.css';


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