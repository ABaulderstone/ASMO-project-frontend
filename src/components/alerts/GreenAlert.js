import React from "react";

const GreenAlert = props => {
    const styling = {
        display: props.display,
        margin: props.margin,
        padding: props.padding
      }
    return (
        <div
        style={styling}
        className="ui yellow message"
      >
        {props.message}
      </div>
    );

}

export default GreenAlert;