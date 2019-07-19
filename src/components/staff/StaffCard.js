import React, { Component } from "react";

class StaffCard extends Component {
  render() {
    return (
      <>
        <div class="ui four column grid">
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src="/images/avatar2/large/elyse.png" />
              </div>
              <div className="content">
                <a className="header">Elyse</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StaffCard;
