import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import "bulma/css/bulma.css";
import BarChart from "./../chart/BarChart";
import connect from "react-redux";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  

  getChartData() {
    // ajax calls here
    this.setState({
      chartData: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Kitchen",
            data: [1, 2, 5, 4],
            backgroundColor: "#D6E9C6"
          },
          {
            label: "Floor",
            data: [1, 2, 5, 4],
            backgroundColor: "#EBCCD1"
          }
        ]
      }
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div>
          <h1>Dashboard</h1>
          <div>Land of Smiles</div>
          <BarChart chartData={this.state.chartData} legendPosition="bottom" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  chartData: state.chartData

}

export default connect(mapStateToProps) (Dashboard);
