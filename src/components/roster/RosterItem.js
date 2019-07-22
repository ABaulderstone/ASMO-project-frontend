import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "./../../components/forms/fields/Input";

class RosterItem extends Component {

  
  
  render() {
    return (
      <>
        <div className="item">
          <div className="ui tiny image">
            <img src={this.props.avatar} />
          </div>
          <a class="header">{this.props.name}</a>
          <div className="right aligned content">
            <label>
              Floor
              <div style={{ display: "inline-block" }}>
                <Field
                  name={this.props.id}
                  component={Input}
                  type="radio"
                  value="floor"
                />
              </div>
            </label>
            <label>
              Kitchen
              <Field
                name={this.props.id}
                component={Input}
                type="radio"
                value="kitchen"
              />
            </label>
            <label>
              Off
              <Field
                name={this.props.id}
                component={Input}
                type="radio"
                value="off"
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}


export default(RosterItem);
