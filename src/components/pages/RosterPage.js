import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import RosterItem from "./../roster/RosterItem";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { fetchStaff } from "./../../actions/index";
import localAPI from "./../../apis/local";

class RosterPage extends Component {
  state = {
    loading: false,
    error: null
  };

  componentDidMount() {
    this.props.fetchStaff();
  }

  onSaveButtonClick = async formValues => {
    await localAPI
      .post("/staff/duty", formValues)
      .then(() => {
        this.setState({ loading: true });
      })
      .then(() => {
        this.props.fetchStaff();
      })
      .then(() => {
        this.setState({ loading: false });
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
          <div className="ui cards">
            {staff.map(s => {
              return (
                <RosterItem
                  id={s._id}
                  name={s.name}
                  avatar={s.avatar}
                  key={s._id}
                  duty={s.duty}
                />
              );
            })}
          </div>
          <div className="button-container">
            {!this.state.loading && (
              <div className="button-wrapper">
                <input
                  style={{ marginBottom: "1.5rem" }}
                  className="ui primary button button-pos"
                  type="submit"
                  value="Save"
                />
              </div>
            )}
            {this.state.loading && (
              <button className="ui primary loading button">Loading</button>
            )}
          </div>
          {this.state.error}
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
