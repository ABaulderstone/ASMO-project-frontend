import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import RosterItem from "./../roster/RosterItem";
import { connect } from "react-redux";
import { fetchStaff } from "./../../actions/index";

class RosterPage extends Component {
  componentDidMount() {
    this.props.fetchStaff();
  }

  render() {
    const { staff } = this.props;
    return (
      <>
        <h1>hahsad</h1>
        <Navbar />
        <div className="ui divided items">
          {staff.map(s => {
            return <RosterItem id={s._id} name={s.name} avatar={s.avatar} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    staff: state.staff
  };
};

export default connect(
  mapStateToProps,
  { fetchStaff }
)(RosterPage);
