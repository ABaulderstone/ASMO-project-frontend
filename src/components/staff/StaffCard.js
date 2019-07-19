import React from "react";

function StaffCard(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.avatar} />
        </div>

        <div className="content">
          <a class="header">{props.name}</a>
          <a>
            <i className="edit icon" />
            Edit
          </a>
        </div>
      </div>
    </>
  );
}

export default StaffCard;
