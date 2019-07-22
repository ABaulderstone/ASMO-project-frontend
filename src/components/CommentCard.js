import React from "react";

const CommentCard = props => {
  return (
    
    <div className="ui card" id={props.id}>
    <div className="content"><div className="header">{props.date}</div></div>
      <div className="content">{props.comment}</div>
      <div className="extra content">
        Food: {props.foodRating} Service: {props.serviceRating}
      </div>
    </div>
  );
};

export default CommentCard;
