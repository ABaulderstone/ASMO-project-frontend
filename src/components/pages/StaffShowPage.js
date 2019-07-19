import React, { Component } from "react";
import { Link } from "react-router-dom";
import StaffForm from "./../forms/StaffForm";
// import StaffList from "../staff/StaffList";
import StaffCard from "./../../components/staff/StaffCard";
import Modal from "react-modal";

import Navbar from "./../navbar/Navbar";

Modal.setAppElement("#root");

class StaffShowPage extends Component {
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
        <div>
          <StaffCard />
        </div>
      </>
    );
  }
}

export default StaffShowPage;
