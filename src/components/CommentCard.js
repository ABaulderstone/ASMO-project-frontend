import React from "react";

const CommentCard = props => {
  return (
    
    <div className="ui card" key={props.id} style={{width: "100%"}}>
    <div className="content"><div className="header">{props.date}</div></div>
      <div style={{fontSize: "1.8vh"}} className="content">{props.comment}</div>
      <div className="extra content">
        Food: {props.foodRating} Service: {props.serviceRating}
      </div>
    </div>
  );
};

export default CommentCard;
