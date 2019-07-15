import React, { Component } from "react";
import MemberSignUpForm from "./../forms/MemberSignUpForm";

class MemberSignUpPage extends Component {
  render() {
    return (
      <div>
        <h1>Member Sign Up</h1>
        <MemberSignUpForm {...this.props} />
      </div>
    );
  }
}

export default MemberSignUpPage;
