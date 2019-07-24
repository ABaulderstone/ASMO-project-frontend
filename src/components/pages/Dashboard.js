import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import "bulma/css/bulma.css";
import BarChart from "./../chart/BarChart";
import {connect} from "react-redux";
import {fetchChartData} from "./../../actions/index";
import LocalAPI from "./../../apis/local";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    this.props.fetchChartData();
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
    const {chartData} = this.props;
    console.log(chartData);

    return (
      <>
        <Navbar />
        <div>
          <h1>Dashboard</h1>
          <div>Land of Smiles</div>
          {chartData.datasets && <BarChart chartData={chartData} legendPosition="bottom" />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let chartData = {};
  
  if (state.chartData.length > 0) {
    chartData.labels = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    chartData.datasets = [
      {
        label: "Kitchen",
        data: [2, 2, 2, 2, 2, 2, 2],
        backgroundColor: "#D6E9C6"
      },
      {
        label: "Floor",
        data: [2, 2, 2, 2, 2, 2, 2],
        backgroundColor: "#EBCCD1"
      }
    ]
    //create a const that is the current week number 1..52
    //loop through dates and get each dates week number and if that matches our current weeek keep it
    //or start out with array
  }

  return {
    chartData
  };
}

export default connect(mapStateToProps, {fetchChartData}) (Dashboard);
