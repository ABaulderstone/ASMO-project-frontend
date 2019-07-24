import React from "react";
import moment from "moment"
import "moment-timezone";

const CommentCard = props => {
    const formattedDate = moment(props.date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY HH:mm");

  return (
    
    <div className="ui card" key={props.id} style={{width: "100%"}}>
    <div className="content"><div className="header">{formattedDate}</div>
    <div className="right floated meta">
      Food: {props.foodRating} Service:{props.serviceRating}
      </div>
    </div>
    
      <div style={{fontSize: "1.8vh"}} className="content">{props.comment}</div>
      <div className="extra content">
        Kitchen: {props.kitchenStaff.map( staff => {
          return(
            <img src={staff.avatar} className= "ui mini circular image" alt={staff.name} />
          )
        })} Floor: {props.floorStaff.map( staff => {
          return(
            <img src={staff.avatar} className= "ui mini circular image" alt={staff.name} />
          )
        })}
      </div>
    </div>
  );
};

export default CommentCard;
