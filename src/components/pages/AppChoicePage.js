import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../navbar/Navbar";
import { Grid, Segment } from "semantic-ui-react";

class AppChoicePage extends Component {
  render() {
    const square = { width: 175, height: 175 };

    return (
      <>
        <Navbar />
        <Grid container columns={3}>
          <Grid.Column>
            <Link to="/review" target="_blank">
              <Segment className="ui button" circular style={square}>
                Survey
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to="/customer" target="_blank">
              <Segment className="ui button" circular style={square}>
                Member
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to="/member_search" target="_blank">
              <Segment className="ui button" circular style={square}>
                Search
              </Segment>
            </Link>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default AppChoicePage;
