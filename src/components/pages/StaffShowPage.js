import React, { Component } from "react";
import { Link } from "react-router-dom";


import Navbar from "./../navbar/Navbar";

class StaffShowPage extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="ui container">
                <div className="ui segment">
                    <h1 className= {{fontSize: "30px"}}>Staff</h1>
                    <Link to="/staff/new">
                        <button>Add Staff</button>
                    </Link>
                        
                    </div>
            </div>

             
            </>
        );
    }
}

export default StaffShowPage;