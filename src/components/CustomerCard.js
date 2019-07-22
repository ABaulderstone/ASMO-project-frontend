import React from "react";

const CustomerCard = props => {
  return (
    <div className="ui card" id={props.id} style={{width: "80%", textAlign: "center", margin: "auto"}}>
      <div className="content">
      <div className="header">{props.name}</div>
      <div className= "description">{props.address || "No listed address"}</div>
      </div>
      <div className="extra content">
        <div>Email:{props.email}</div> 
        <div>Phone Number: {props.phone}</div>
        <div>Birthday: {props.dob || "No birthday given"}</div>
        <div>Anniversary: {props.anniversary || "No anniversary given"}</div>
      </div>
    </div>
  );
};

export default CustomerCard;
