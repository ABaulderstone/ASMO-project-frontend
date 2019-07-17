import React, { Component } from "react";
import AddressItem from "./AddressItem";

class AddressInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <AddressItem
            label="House Number"
            id="houseNumber"
            value={this.props.houseNumber}
            onChange={this.handleChange}
            placeholder=""
          />
          <AddressItem
            label="Unit Number"
            id="unitNumber"
            value={this.props.unit}
            onChange={this.handleChange}
            placeholder=""
          />
          <AddressItem
            label="Street"
            id="street"
            value={this.props.street}
            onChange={this.handleChange}
            placeholder=""
          />
          <AddressItem
            label="District"
            id="district"
            value={this.props.district}
            onChange={this.handleChange}
            placeholder=""
          />
          <AddressItem
            label="Postal Code"
            id="postalCode"
            value={this.props.postalCode}
            onChange={this.handleChange}
            placeholder=""
          />
        </div>
      </div>
    );
  }
}

export default AddressInput;
