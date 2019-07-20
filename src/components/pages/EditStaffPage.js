import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./../forms/fields/Input";
import renderFile from "./../../components/RenderFile";
import localapi from "./../../apis/local";

class EditStaffPage extends Component {
  onFormSubmit = async formValues => {
    const { name, avatar } = formValues;
    const { id } = this.state;
    const response = await localapi
      .put(`/staff/${id}`, { name })
      .then(() => {
        this.props.reset();
        this.props.history.push("/staff");
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const id = pathname.split("/")[2];
    this.setState({ id: id });
  }

  render() {
    const { handleSubmit, error, name } = this.props;
    console.log(this.props);
    return (
      <>
        {error}
        <>
          <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
            <div className="field">
              <label>Name</label>
              <Field
                name="name"
                component={Input}
                type="text"
                placeholder={this.props.location.state.name}
              />
            </div>
            <div className="field">
              <label>Image</label>
              <Field name="avatar" component={renderFile} type="file" />
            </div>
            <div className="button-container">
              <div className="button-wrapper">
                <input className="ui button" type="submit" value="Save" />
              </div>
            </div>
          </form>
        </>
      </>
    );
  }
}

const WrappedEditStaffForm = reduxForm({
  form: "edit staff",
  validate: formValues => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is Required";
    }

    return errors;
  }
})(EditStaffPage);

export default connect(
  null,
  {}
)(WrappedEditStaffForm);
