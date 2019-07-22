import React, { Component } from "react";
import { newStaffSubmission } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import FileInput from "./fields/FileInput";
import ImageUploadAPI from "./../../apis/image_upload";

class StaffForm extends Component {
  onFormSubmit = async formValues => {
    const { name, image } = formValues;
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await ImageUploadAPI.post("/images/", formData);
      const { imageUrl: avatar } = response.data;
      console.log(avatar);
      await this.props.newStaffSubmission(name, avatar).catch(err => {
        throw new SubmissionError(err.response.data);
      });
      this.props.reset();
    } else {
      await this.props.newStaffSubmission(name).catch(err => {
        throw new SubmissionError(err.response.data);
      });
      this.props.reset();
    }
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <>
        {error}

        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="field">
            <label>Name</label>
            <Field name="name" component={Input} type="text" />
          </div>
          <div className="field">
            <label>Image</label>
            <Field name="image" component={FileInput} type="file" />
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <input className="ui green button" type="submit" value="create" />
            </div>
          </div>
        </form>
      </>
    );
  }
}

const WrappedStaffForm = reduxForm({
  form: "staff",
  validate: formValues => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Name is Required";
    }

    return errors;
  }
})(StaffForm);

export default connect(
  null,
  { newStaffSubmission }
)(WrappedStaffForm);
