import React, { Component } from "react";
import AddressItem from "./AddressItem";

class AddressSuggest extends Component {
  render() {
    return (
      <AddressItem
        label="Address 2 (optional)"
        value={this.props.query}
        onChange={this.props.onChange}
        placeholder="Street address, suburb."
      />
    );
  }
}

export default AddressSuggest;
