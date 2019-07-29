import React from "react";

const GreenAlert = props => {
    const styling = {
        display: props.display,
        margin: props.margin,
        padding: props.padding
      }
    return (
        <div
        style={customStyling}
        id={props.id || "err-msg"} 
        className="ui green message"
      >
        {props.message}
      </div>
    );

}

export default GreenAlert;