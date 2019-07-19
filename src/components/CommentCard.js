import React from "react";

const CommentCard = props => {
  return (
    <div className="ui card">
      {props.content}
      <div class="extra content">
        Food: {props.foodRating} Service: {props.serviceRating}
      </div>
    </div>
  );
};

export default CommentCard;
