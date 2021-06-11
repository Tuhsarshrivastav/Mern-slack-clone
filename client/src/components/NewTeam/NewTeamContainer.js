import React, { Component } from "react";
import NewTeamView from "./NewTeamView";

export class NewTeamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      desc: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  submitChange = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <NewTeamView
          {...this.state}
          handleChange={this.handleChange}
          submitChange={this.submitChange}
        />
      </div>
    );
  }
}

export default NewTeamContainer;
