import React, { Component } from "react";
import { newStaffSubmission } from "../../actions";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./fields/Input";
import FileInput from "./fields/FileInput";
import ImageUploadAPI from "./../../apis/image_upload";
import RedAlert from "./../alerts/RedAlert";

class StaffForm extends Component {
  state = {
    loading: false
  };
  onFormSubmit = async formValues => {
    const { name, image } = formValues;
    this.setState({ loading: true });
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await ImageUploadAPI.post("/images/", formData)
      .catch(err => {
        this.setState({ loading: false });
        throw new SubmissionError(err.response.data);
      });
      const { imageUrl: avatar } = response.data;
      await this.props.newStaffSubmission(name, avatar)
      .then (() => {
        this.setState({ loading: false });

      })
      .catch(err => {
        this.setState({ loading: false });
        throw new SubmissionError(err.response.data);
      });
      this.props.reset();
    } else {
      await this.props.newStaffSubmission(name).then (() => {
        this.setState({ loading: false });
        this.setState({ loading: false });

      })
      .catch(err => {
        this.setState({ loading: false });
        throw new SubmissionError(err.response.data);
      });
      this.props.reset();
    }
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <>
        {error && <RedAlert message={error} />}

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
            {!this.state.loading && (
              <div className="button-wrapper">
                <input
                  style={{ marginBottom: "1.5rem" }}
                  className="ui green button button-pos"
                  type="submit"
                  value="Create"
                />
              </div>
            )}
            {this.state.loading && (
              <button className="ui green loading button">Loading</button>
            )}
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
      errors.name = (
        <div id="err-msg" className="ui yellow message err-msg">
          Name is required!
        </div>
      );
    }
    return errors;
  }
})(StaffForm);

export default connect(
  null,
  { newStaffSubmission }
)(WrappedStaffForm);
