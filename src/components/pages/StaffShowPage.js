import React, { Component } from "react";
import StaffForm from "./../forms/StaffForm";
import StaffCard from "./../../components/staff/StaffCard";
import Navbar from "./../navbar/Navbar";
import { connect } from "react-redux";
import { fetchStaff } from "./../../actions/index";

class StaffShowPage extends Component {
  componentDidMount() {
    this.props.fetchStaff();
  }

  render() {
    const { staff } = this.props;
    return (
      <>
        <Navbar />
        <div className="ui container">
          <div className="ui segment">
            <h1 className="page-header">Staff</h1>
            <StaffForm history={this.props.history} />
          </div>
        </div>
        <div className="ui container">
          <div className="ui six doubling cards" style={{ marginTop: "10px" }}>
            {staff.map(s => {
              return <StaffCard id={s._id} name={s.name} avatar={s.avatar} />;
            })}
          </div>
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
)(StaffShowPage);
