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

  onSaveButtonClick = async (formValues) => {
   
    
    await localAPI
      .post("/staff/duty", formValues)
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };

  render() {
    const { staff, handleSubmit } = this.props;
    return (
      <>
        <h1>Roster</h1>
        <Navbar />
        <form onSubmit={handleSubmit(this.onSaveButtonClick)}>
          <div className="ui divided items">
            {staff.map(s => {
              return <RosterItem id={s._id} name={s.name} avatar={s.avatar} key= {s._id}/>;
            })}
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <input
                className="ui button"
                type="submit"
                value="Save"
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}
const WrappedRosterPage = reduxForm({
  form: "duty"
})(RosterPage);
const mapStateToProps = state => {
  return {
    staff: state.staff
  };
};

export default connect(
  mapStateToProps,
  { fetchStaff }
)(WrappedRosterPage);
