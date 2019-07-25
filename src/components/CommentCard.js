import React from "react";
import moment from "moment"
import "moment-timezone";

const CommentCard = props => {
    const formattedDate = moment(props.date)
    .tz("Australia/Sydney")
    .format("DD-MM-YYYY HH:mm");

  return (
    
    <div className="ui card" key={props.id} style={{width: "100%"}}>
    
      <h3 className="ui  block header">{formattedDate}</h3>
    
  
    
      <div className="content"> <div className="right floated meta">
      Food: {props.foodRating} Service:{props.serviceRating}
      </div><h5 class="ui header">{props.comment}</h5></div>
      <div className="extra content">
        Kitchen: {props.kitchenStaff.map( staff => {
          return(
            <img src={staff.avatar} className= "ui mini circular image" alt={staff.name} key={staff._id} />
          )
        })} Floor: {props.floorStaff.map( staff => {
          return(
            <img src={staff.avatar} className= "ui mini circular image" alt={staff.name} key={staff._id} />
          )
        })}
      </div>
    </div>
  );
};

export default CommentCard;
