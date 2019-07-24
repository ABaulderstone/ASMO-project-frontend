import React, { Component } from "react";
import { reduxForm, SubmissionError } from "redux-form";
import LocalAPI from "./../../apis/local";
import Rating from "react-rating";

//star white
import est1 from "./../../images/est1.png";
//Smiling face keep it for incase in the future
// import es1 from "./../../images/est1.png";
// import es2 from "./../../images/es2.png";
// import es3 from "./../../images/es3.png";
// import es4 from "./../../images/es4.png";
// import es5 from "./../../images/es5.png";

//Star yello
import fst1 from "./../../images/fst1.png";
//Smiling face keep it for incase in the future
// import fs1 from "./../../images/fst1.png";
// import fs2 from "./../../images/fs2.png";
// import fs3 from "./../../images/fs3.png";
// import fs4 from "./../../images/fs4.png";
// import fs5 from "./../../images/fs5.png";

class ReviewForm extends Component {
  state = {
    foodRating: null,
    serviceRating: null,
    comment: null,
    floorStaff: null,
    kitchenStaff: null,
    warning: null
  };
  onFormSubmit = async () => {
    const {
      foodRating,
      serviceRating,
      comment,
      floorStaff,
      kitchenStaff
    } = this.state;
    if (comment) {
      return await LocalAPI.post(`/reviews`, {
        foodRating,
        serviceRating,
        comment,
        floorStaff,
        kitchenStaff
      })
        .then(() => {
          this.props.reset();
          this.props.history.push("/thankyou");
        })
        .catch(err => {
          throw new SubmissionError(err.response.data);
        });
    }

    await LocalAPI.post(`/reviews`, {
      foodRating,
      serviceRating,
      floorStaff,
      kitchenStaff
    })
      .then(() => {
        this.props.reset();
        this.props.history.push("/thankyou");
      })
      .catch(err => {
        throw new SubmissionError(err.response.data);
      });
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event });
  };

  onCommentChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };
  componentDidMount() {
    const kitchenQuery = LocalAPI.get("/staff?duty=kitchen");
    const floorQuery = LocalAPI.get("/staff?duty=floor");
    Promise.all([kitchenQuery, floorQuery])
      .then(responses => {
        this.setState({ kitchenStaff: responses[0].data });
        this.setState({ floorStaff: responses[1].data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ warning: "No staff set!" });
      });
  }

  render() {
    const { handleSubmit, error } = this.props;
    const { floorStaff, kitchenStaff, warning } = this.state;
    console.log(floorStaff, kitchenStaff);

    return (
      <>
        {error}
        {warning}
        <form className="ui form" onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="field">
            <div className="rating-container" style={{ marginBottom: "20px" }}>
              <label>
                <h2>How was your meal?</h2>
              </label>
            </div>
            <div className="rating-container">
              <Rating
                initialRating={this.state.foodRating}
                onChange={event => this.onInputChange("foodRating", event)}
                emptySymbol={[est1, est1, est1, est1, est1].map(es => (
                  <span className="icon-text">
                    <img style={{ padding: "0 9px 0 9px" }} src={es} alt="empty star" />
                  </span>
                ))}
                fullSymbol={[fst1, fst1, fst1, fst1, fst1].map(fs => (
                  <span className="icon-text">
                    <img style={{ padding: "0 9px 0 9px" }} src={fs} alt="full star" />
                  </span>
                ))}
              />
            </div>
          </div>
          <div className="field">
            <div className="rating-container" style={{ marginBottom: "20px" }}>
              <label>
                <h2>How was the service?</h2>
              </label>
            </div>
            <div className="rating-container">
              <Rating
                initialRating={this.state.serviceRating}
                onChange={event => this.onInputChange("serviceRating", event)}
                emptySymbol={[est1, est1, est1, est1, est1].map(es => (
                  <span className="icon-text">
                    <img style={{ padding: "0 9px 0 9px" }} src={es} alt="empty star" />
                  </span>
                ))}
                fullSymbol={[fst1, fst1, fst1, fst1, fst1].map(fs => (
                  <span className="icon-text">
                    <img style={{ padding: "0 9px 0 9px" }} src={fs} alt="full star" />
                  </span>
                ))}
              />
            </div>
          </div>
          <div>
            <div className="field">
              <div className="rating-container">
                <label>
                  <h3>Any comments?</h3>
                </label>
              </div>
              <div>
                <textarea
                  className="text-area"
                  onInput={event => this.onCommentChange("comment", event)}
                />
              </div>
            </div>
          </div>
          <div>
            <h2> Floor Staff </h2>
            {floorStaff &&
              floorStaff.map(staff => {
                return (
                  <div className="image-container">
                    <img
                      className="ui tiny circular image"
                      src={staff.avatar}
                      alt={staff.name}
                    />
                  </div>
                );
              })}
          </div>
          <div>
            <h2> Kitchen Staff </h2>
            {kitchenStaff &&
              kitchenStaff.map(staff => {
                return (
                  <div className="image-container">
                    <img
                      className="ui tiny circular image"
                      src={staff.avatar}
                      alt={staff.name}
                    />
                  </div>
                );
              })}
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <input className="ui blue button" type="submit" value="Send" />
            </div>
          </div>
        </form>
      </>
    );
  }
}

const WrappedReviewForm = reduxForm({
  form: "review",
  validate: formValues => {
    const errors = {};
    if (!formValues.foodRating) {
      errors.foodRating = "Food rating is required";
    }

    if (!formValues.serviceRating) {
      errors.serviceRating = "Service rating is required";
    }

    return errors;
  }
})(ReviewForm);

export default WrappedReviewForm;
