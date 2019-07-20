import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./../../components/forms/fields/Input";

function RosterItem(props) {
  return (
    <>
      <div className="item">
        <div className="ui tiny image">
          <img src={props.avatar} />
        </div>
        <a class="header">{props.name}</a>
        <div className="right aligned content">
          <label>
            Floor
            <div style={{ display: "inline-block" }}>
              <Field
                name="status"
                component={Input}
                type="radio"
                value="floor"
              />
            </div>
          </label>
          <label>
            Kitchen
            <Field
              name="status"
              component={Input}
              type="radio"
              value="kitchen"
            />
          </label>
          <label>
            Off
            <Field name="status" component={Input} type="radio" value="off" />
          </label>
        </div>
        <div className="button-container">
          <div className="button-wrapper">
            <input className="ui button" type="submit" value="Save" />
          </div>
        </div>
      </div>
    </>
  );
}

const WrappedRosterItem = reduxForm({
  form: "roster",
  validate: formValues => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is Required";
    }

    return errors;
  }
})(RosterItem);

export default connect(
  null,
  { RosterItem }
)(WrappedRosterItem);
