import React from "react";

function StaffCard(props) {
  return (
    <>
      <div class="ui four column grid">
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src={props.avatar} />
            </div>
            <div className="content">
              <a className="header">{props.name}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffCard;
