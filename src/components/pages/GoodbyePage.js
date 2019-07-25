import React, { Component } from "react";

export default class GoodbyePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      sessionStorage.removeItem("token");
      this.props.history.push("/login");
    }, 1500);
  }
  render() {
    return (
      <div>
        <h1>Goodbye</h1>
      </div>
    );
  }
}
