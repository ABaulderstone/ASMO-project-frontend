import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./../forms/fields/Input";
import FileInput from "./../forms/fields/FileInput"
import localapi from "./../../apis/local";
import ImageUploadAPI from "./../../apis/image_upload";
import { Link } from "react-router-dom";
import { deleteStaff } from "./../../actions/index";
import { async } from "q";

class EditStaffPage extends Component {
  onFormSubmit = async formValues => {
    const { name, image } = formValues;
    const { id } = this.state;
    if (image){
    const formData = new FormData();
      formData.append("image",image);
      const response = await ImageUploadAPI.post("/images/", formData);
      const {imageUrl:avatar} = response.data
      console.log(avatar);

      await localapi.put(`/staff/${id}`, { name, avatar })
      .then(() => {
        ;
        this.props.reset();
        this.props.history.push("/staff");
      })
      .catch(err => {

        console.log(err);
      });
      
    } else {
      await localapi.put(`/staff/${id}`, { name})
      .then(() => {
        ;
        this.props.reset();
        this.props.history.push("/staff");
      })
      .catch(err => {

        console.log(err);
      });
    }




  };

  onDeleteButtonClick = async () => {
    const { id } = this.state;
    await this.props.deleteStaff(id);
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
                <input className="ui button" value="Cancel" />
              </div>
            </div>
          </Link>

          <Link to="/staff">
            <div className="button-container">
              <div className="button-wrapper">
                <input
                  className="ui button"
                  onClick={this.onDeleteButtonClick}
                  value="Delete"
                />
              </div>
            </div>
          </Link>
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
