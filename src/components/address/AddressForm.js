import React, { Component } from "react";
import AddressSuggest from "./AddressSuggest";
import AddressInput from "./AddressInput";
import axios from "axios";
import { connect } from "react-redux";
import { setAddress } from "./../../actions"


const APP_ID_HERE = process.env.REACT_APP_ID;
const APP_CODE_HERE = process.env.REACT_APP_CODE;

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }
  // User has entered something in the address bar
  onQuery = evt => {
    const query = evt.target.value;

    if (!query.length > 0) {
      this.setState(this.getInitialState());
      return;
    }

    const self = this;
    axios
      .get("https://autocomplete.geocoder.api.here.com/6.2/suggest.json", {
        params: {
          app_id: APP_ID_HERE,
          app_code: APP_CODE_HERE,
          query: query + " Australia",
          maxresults: 1
        }
      })
      .then(function (response) {
        if (response.data.suggestions.length > 0) {
          const id = response.data.suggestions[0].locationId;
          const address = response.data.suggestions[0].address;
          self.setState({
            address: address,
            query: query,
            locationId: id
          });
        } else {
          const state = self.getInitialState();
          self.setState(state);
        }
      });
  };

  getInitialState() {
    return {
      address: {
        houseNumber: "",
        unit: "",
        street: "",
        district: "",
        city: "",
        state: "",
        postalCode: "",
        country: ""
      },
      query: "",
      locationId: "",
      isChecked: false,
      coords: {}
    };
  }
  // User has clicked the clear button
  // onClear = evt => {
  //   const state = this.getInitialState();
  //   this.setState(state);
  // };
  // User has entered something in an address field
  onAddressChange = evt => {
    const id = evt.target.id;
    const val = evt.target.value;

    let state = this.state;
    state.address[id] = val;
    this.setState(state);
  };
  // User has clicked the check button
  onCheck = evt => {
    evt.preventDefault();
    let params = {
      app_id: APP_ID_HERE,
      app_code: APP_CODE_HERE
    };

    if (this.state.locationId.length > 0) {
      params["locationId"] = this.state.locationId;
    } else {
      params["searchtext"] =
        this.state.address.houseNumber +
        this.state.address.unit +
        this.state.address.street +
        this.state.address.district +
        this.state.address.city +
        this.state.address.state +
        this.state.address.postalCode +
        this.state.address.country;
    }

    const self = this;
    axios
      .get("https://geocoder.api.here.com/6.2/geocode.json", { params: params })
      .then(function (response) {
        const view = response.data.Response.View;
        if (view.length > 0 && view[0].Result.length > 0) {
          const location = view[0].Result[0].Location;

          self.setState({
            isChecked: "true",
            locationId: "",
            query: location.Address.Label
            // address: {
            //   street:
            //     location.Address.HouseNumber + " " + location.Address.Street,
            //   district: location.Address.Disctrict,
            //   city: location.Address.City,
            //   state: location.Address.State,
            //   postalCode: location.Address.PostalCode,
            //   country: location.Address.Country
            // },
          });
        } else {
          this.setState({ isChecked: true, coords: null });
        }
      })
      .catch(function (error) {
        console.log("caught failed query");
        self.setState({
          isChecked: true,
          coords: null
        });
      });

    const { address } = this.state;
    this.props.setAddress(address);
  };

  alert() {
    if (!this.state.isChecked) {
      return;
    }

    if (this.state.coords === null) {
      return (
        <div className="alert alert-warning" role="alert">
          <b>Invalid.</b> The address is not recognized.
        </div>
      );
    } else {
      return (
        <div className="alert alert-success" role="alert">
          <b>Valid Address.</b>
        </div>
      );
    }
  }

  render() {
    let result = this.alert();
    return (
      <div className="container">
        <AddressInput
          houseNumber={this.state.address.houseNumber}
          unit={this.state.address.unit}
          street={this.state.address.street}
          district={this.state.address.district}
          city={this.state.address.city}
          state={this.state.address.state}
          postalCode={this.state.address.postalCode}
          country={this.state.address.country}
          onChange={this.onAddressChange}
        />
        <AddressSuggest query={this.state.query} onChange={this.onQuery} />
        <br />
        {result}
        <button className="btn btn-primary" onClick={this.onCheck} style={{ display: "block", margin: "auto" }}>
          Check Address
        </button>
        {/* <butto
          type="submit"
          className="btn btn-outline-secondary"
          onClick={this.onClear}
        >
          Clear
        </button> */}
      </div>
    );
  }
}

export default connect(null, { setAddress })(AddressForm);
