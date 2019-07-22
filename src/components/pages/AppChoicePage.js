import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";

class AppChoicePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <h1>Choose</h1>
          <div>
            <Link to="/review" target="_blank">
              <button>Survey</button>
            </Link>
            <Link to="/customer" target="_blank">
              <button>Member</button>
            </Link>
            <Link to="/member_search" target="_blank">
              <button>Search</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default AppChoicePage;
