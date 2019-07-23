// const myData = [
//     {x: 'A', y: 10},
//     {x: 'B', y: 5},
//     {x: 'C', y: 15}
//   ]

//put the data here

import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";
// greenData is blue
const greenData = [
  { x: "mon", y: 5 },
  { x: "tue", y: 4.7 },
  { x: "wed", y: 4 },
  { x: "thu", y: 4.8 },
  { x: "fri", y: 3.3 },
  { x: "sat", y: 3.5 },
  { x: "sun", y: 4.7 }
];
// blueData is prink
const blueData = [
  { x: "mon", y: 4.5 },
  { x: "tue", y: 4.8 },
  { x: "wed", y: 4.2 },
  { x: "thu", y: 4.7 },
  { x: "fri", y: 3.6 },
  { x: "sat", y: 3.4 },
  { x: "sun", y: 4.9 }
];

const labelData = greenData.map((d, idx) => ({
  // x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

export default class Example extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot xType="ordinal" width={600} height={350} xDistance={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series-example"
            data={greenData}
            color="#5a96e2"
          />
          <BarSeries data={blueData} color="#efb6d0" />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
  }
}
