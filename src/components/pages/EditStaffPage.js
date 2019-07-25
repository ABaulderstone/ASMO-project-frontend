import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "./../forms/fields/Input";
import FileInput from "./../forms/fields/FileInput";
import localapi from "./../../apis/local";
import ImageUploadAPI from "./../../apis/image_upload";
import { Link } from "react-router-dom";
import { deleteStaff } from "./../../actions/index";


class EditStaffPage extends Component {
  state = {
    loading: null
  }
  
  onFormSubmit = async formValues => {
    const { name, image } = formValues;
    const { id } = this.state;
    if (image) {
      this.setState({loading: true});
      const formData = new FormData();
      formData.append("image", image);
      const response = await ImageUploadAPI.post("/images/", formData);
      const { imageUrl: avatar } = response.data;
      

      await localapi
        .put(`/staff/${id}`, { name, avatar })
        .then(() => {
          this.setState({loading:false});
          this.props.reset();
          this.props.history.push("/staff");
        })
        .catch(err => {
          this.setState({loading:false});
          throw new SubmissionError(err.response.data);
        });
    } else {
      
      this.setState({loading: true});
      await localapi
        .put(`/staff/${id}`, { name })
        .then(() => {
          this.setState({loading:false});
          this.props.reset();
          this.props.history.push("/staff");
        })
        .catch(err => {
          this.setState({loading:false});
          throw new SubmissionError(err.response.data);
        });
    }
  };

  onDeleteButtonClick = async () => {
    const { id } = this.state;
    this.setState({loading: true});
    await this.props.deleteStaff(id)
      .then(() => {
        this.setState({loading: false});
        this.props.history.push("/staff");
      }).catch(err => {
        this.setState({loading: false});
        throw new SubmissionError(err.response.data);
      })
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const id = pathname.split("/")[2];
    this.setState({ id: id });
  }

  render() {
    const { handleSubmit, error } = this.props;
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
              {!this.state.loading && (
            <input className="ui green button" type="submit" value="Submit" />
          )}
          {this.state.loading && (
            <button className="ui green loading  button">Loading</button>
          )}
              </div>
            </div>
          </form>
          <Link to="/staff">
            <div className="button-container">
              <div className="button-wrapper">
                <button className="ui yellow button"> Cancel </button>
              </div>
            </div>
          </Link>


          <div className="button-container">
            <div className="button-wrapper">
              <button
                className="ui red button"
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
