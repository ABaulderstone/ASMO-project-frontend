import React, { Component } from "react";
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
            <h1 style={{textAlign: "center", fontSize:"40px"}}>Staff</h1>
            <button className="ui button" onClick={this.openModal}>Add Staff</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="staffform"
            >
              <StaffForm history={this.props.history} />
              <button onClick={this.closeModal}>Close</button>
            </Modal>
          </div>
        </div>
        <div className="ui container">
          <div className="ui six doubling cards" style={{marginTop: "10px"}}>
            {staff.map(s => {
              return <StaffCard id={s._id} name={s.name} avatar={s.avatar} />;
            })}
          </div>
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
