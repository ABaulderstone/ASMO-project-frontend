import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./../forms/fields/Input";
import FileInput from "./../forms/fields/FileInput";
import localapi from "./../../apis/local";
import ImageUploadAPI from "./../../apis/image_upload";
import { Link } from "react-router-dom";
import { deleteStaff } from "./../../actions/index";
import { async } from "q";

class EditStaffPage extends Component {
  onFormSubmit = async formValues => {
    const { name, image } = formValues;
    const { id } = this.state;
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const response = await ImageUploadAPI.post("/images/", formData);
      const { imageUrl: avatar } = response.data;
      console.log(avatar);

      await localapi
        .put(`/staff/${id}`, { name, avatar })
        .then(() => {
          this.props.reset();
          this.props.history.push("/staff");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    } else {
      const avatar = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
      await localapi
        .put(`/staff/${id}`, { name, avatar })
        .then(() => {
          this.props.reset();
          this.props.history.push("/staff");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    }
  };

  onDeleteButtonClick = async () => {
    const { id } = this.state;
    await this.props.deleteStaff(id)
    .then(() => {
      this.props.history.push("/staff");
    }).catch(err => {
      throw new SubmissionError(err.response.data);
    })
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const id = pathname.split("/")[2];
    this.setState({ id: id });
  }

  render() {
    const { handleSubmit, error, name } = this.props;
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
              <Field name="image" component={FileInput} type="file" />
            </div>
            <div className="button-container">
              <div className="button-wrapper">
                <input className="ui button" type="submit" value="Save" />
              </div>
            </div>
          </form>
          <Link to="/staff">
            <div className="button-container">
              <div className="button-wrapper">
                <button className="ui button"> Cancel </button>
              </div>
            </div>
          </Link>

          
            <div className="button-container">
              <div className="button-wrapper">
                <button 
                  className="ui button"
                  onClick={this.onDeleteButtonClick}
                > Delete </button>
              </div>
            </div>
          
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
  { deleteStaff }
)(WrappedEditStaffForm);
