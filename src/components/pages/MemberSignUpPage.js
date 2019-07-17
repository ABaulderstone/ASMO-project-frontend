import React, { Component } from "react";
import MemberSignUpForm from "./../forms/MemberSignUpForm";

class MemberSignUpPage extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <div className="ui segment">
          <h1>Member Sign Up</h1>
          <MemberSignUpForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default MemberSignUpPage;
