import React, { Component } from "react";

import TeamListView from "./TeamListView";
export class TeamListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <TeamListView />
      </div>
    );
  }
}

export default TeamListContainer;
