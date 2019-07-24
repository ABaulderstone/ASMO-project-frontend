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
          <h1 className="header">{props.name}</h1>
          <Link
            to={{ pathname: `/staff/${props.id}`, state: { name: props.name } }}
          >
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
