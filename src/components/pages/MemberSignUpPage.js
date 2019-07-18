import React, { Component } from "react";
import MemberSignUpForm from "./../forms/MemberSignUpForm";
import {connect} from "react-redux";
import {resetMember} from "./../../actions/index"

class MemberSignUpPage extends Component {
  render() {
    if (this.props.member.isSubmitted) {
      this.props.resetMember();
      this.props.history.push("/thankyou_member")
  }
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
function mapStateToProps(state) {
  return {
    member: state.member
  }
}

export default connect(mapStateToProps, {resetMember})(MemberSignUpPage);
