import React from "react";
import { Link } from "react-router-dom";

function StaffCard(props) {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.avatar} />
        </div>

        <div className="content">
          <a class="header">{props.name}</a>
          <Link to="/dashboard">
            <a>
              <i className="edit icon" />
              Edit
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StaffCard;
