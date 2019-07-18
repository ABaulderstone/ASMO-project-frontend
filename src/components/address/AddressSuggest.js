import React, { Component } from "react";
import AddressItem from "./AddressItem";

class AddressSuggest extends Component {
  render() {
    return (
      <AddressItem
        label="Street Address"
        value={this.props.query}
        onChange={this.props.onChange}
        placeholder="e.g. house number, street, suburb"
      />
    );
  }
}

export default AddressSuggest;
