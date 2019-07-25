import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import "bulma/css/bulma.css";
import BarChart from "./../chart/BarChart";
import {connect} from "react-redux";
import {fetchChartData} from "./../../actions/index";
import moment from "moment";
import "moment-timezone";



class Dashboard extends Component {


  componentDidMount() {
    this.props.fetchChartData();
  }
 



  render() {
    const {chartData} = this.props;

    return (
      <>
        <Navbar pages={[]} />
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
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#D6E9C6"
      },
      {
        label: "Floor",
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#EBCCD1"
      }
    ]
    //create a const that is the current week number 1..52
    const currentWeek = moment().week();
    console.log(currentWeek);
    //loop through dates and get each dates week number and if that matches our current weeek keep it
    state.chartData.forEach(val => {
      const week = moment(val.date, "DD MM YYYY").week();
       if (week===currentWeek) { 
         switch ((moment(val.date, "DD MM YYY").day())) {
         case 0:
           chartData.datasets[0].data[6] = val.kitchen.avg;
           chartData.datasets[1].data[6] = val.floor.avg;
           break;
         case 1:
            chartData.datasets[0].data[0] = val.kitchen.avg;
            chartData.datasets[1].data[0] = val.floor.avg;
            break;
         case 2:
            chartData.datasets[0].data[1] = val.kitchen.avg;
            chartData.datasets[1].data[1] = val.floor.avg;
            break;
        case 3:
            chartData.datasets[0].data[2] = val.kitchen.avg;
            chartData.datasets[1].data[2] = val.floor.avg;
            break;
        case 4:
            chartData.datasets[0].data[3] = val.kitchen.avg;
            chartData.datasets[1].data[3] = val.floor.avg;
            break;
        case 5:
            chartData.datasets[0].data[4] = val.kitchen.avg;
            chartData.datasets[1].data[4] = val.floor.avg;
            break;
        case 6:
            chartData.datasets[0].data[4] = val.kitchen.avg;
            chartData.datasets[1].data[4] = val.floor.avg;
            break;
        default: 
        console.log("No such day");
        break;

       }
    }
  })
   
  }

  return {
    chartData
  };
}

export default connect(mapStateToProps, {fetchChartData}) (Dashboard);
