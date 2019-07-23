import React, { Component } from "react";

export default class GoodbyePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/login");
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>Goodbye</h1>
      </div>
    );
  }
}
