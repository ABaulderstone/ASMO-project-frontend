import React from "react";
import moment from "moment"
import "moment-timezone";

const CommentCard = props => {
    const formattedDate = moment(props.date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY HH:mm");
    console.log(formattedDate);

  return (
    
    <div className="ui card" key={props.id} style={{width: "100%"}}>
    <div className="content"><div className="header">{formattedDate}</div></div>
      <div style={{fontSize: "1.8vh"}} className="content">{props.comment}</div>
      <div className="extra content">
        Food: {props.foodRating} Service: {props.serviceRating}
      </div>
    </div>
  );
};

export default CommentCard;
