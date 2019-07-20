import React, { Component } from "react";
import { Link } from "react-router-dom";
import StaffForm from "./../forms/StaffForm";
import StaffCard from "./../../components/staff/StaffCard";
import Modal from "react-modal";
import Navbar from "./../navbar/Navbar";
import { connect } from "react-redux";
import { fetchStaff } from "./../../actions/index";

Modal.setAppElement("#root");

class StaffShowPage extends Component {
  componentDidMount() {
    this.props.fetchStaff();
  }

  state = {
    modalIsOpen: false
  };
  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    const { staff } = this.props;
    return (
      <>
        <Navbar />
        <div className="ui container">
          <div className="ui segment">
            <h1>Staff</h1>
            <button onClick={this.openModal}>Add Staff</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="staffform"
            >
              <StaffForm />
              <button onClick={this.closeModal}>Close</button>
            </Modal>
          </div>
        </div>
        <div className="ui six doubling cards">
          {staff.map(s => {
            return <StaffCard id={s._id} name={s.name} avatar={s.avatar} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    staff: state.staff
  };
};

export default connect(
  mapStateToProps,
  { fetchStaff }
)(StaffShowPage);
