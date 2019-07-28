import React from "react";

const YellowAlert = props => {
    const customStyling = {
        display: props.display,
        margin: props.margin,
        padding: props.padding
      }
    return (
        <div
        style={customStyling}
        id={props.id || "err-msg"} 
        className="ui yellow message"
      >
        {props.message}
      </div>
    );

}

export default YellowAlert;
