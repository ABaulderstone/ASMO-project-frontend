import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import RosterItem from "./../roster/RosterItem";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { fetchStaff } from "./../../actions/index";
import localAPI from "./../../apis/local";

class RosterPage extends Component {
  componentDidMount() {
    this.props.fetchStaff();
  }

  onSaveButtonClick = async () => {
    const { id } = this.state;
    await localAPI
      .put(`/staff/${id}`)
      .then(() => {
        this.props.history.push("/roster");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };

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
        <div className="button-container">
          <div className="button-wrapper">
            <input
              className="ui button"
              onClick={this.onSaveButtonClick}
              type="submit"
              value="Save"
            />
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
)(RosterPage);
