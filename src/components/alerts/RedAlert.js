import React from "react";

const RedAlert = props => {
    const customStyling = {
        display: props.display,
        margin: props.margin,
        padding: props.padding
      }
    return (
        <div
        style={customStyling}
        id={props.id || "err-msg"} 
        className="ui red message"
      >
        {props.message}
      </div>
    );

}

export default RedAlert;