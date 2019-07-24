import React, { Component } from "react";
import { Field } from "redux-form";
import Input from "./../../components/forms/fields/Input";

class RosterItem extends Component {
  render() {
    return (
      
        <div className="card">
          <div className="content">
            <div className="right floated mini ui image">
              <img src={this.props.avatar} alt={this.props.name} />
            </div>
            <div className= "header">{this.props.name}</div>
            <div className ="meta"> {this.props.duty}</div>
          </div>
          <div className="extra content">
            <label>
              Floor
              <Field
                name={this.props.id}
                component={Input}
                type="radio"
                value="floor"
              />
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
      
    );
  }
}

export default RosterItem;
