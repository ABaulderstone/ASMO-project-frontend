import React from "react";

const CustomerCard = props => {
  return (
    <div className="ui card" id={props.id}>
      <div className="content">
      <div className="header">{props.name}</div>
      <div className= "description">{props.address || "No listed address"}</div>
      </div>
      <div className="extra content">
        Email:{props.email} Phone Number: {props.phone}
      </div>
    </div>
  );
};

export default CustomerCard;
