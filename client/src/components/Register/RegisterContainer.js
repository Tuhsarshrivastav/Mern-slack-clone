import React, { Component } from "react";
import RegisterView from "./RegisterView";
export class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password1: "",
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "username") {
      this.setState({ [name]: value.replace("  ", "_") });
      return;
    }
    this.setState({ [name]: value });
  };
  submitChange = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <RegisterView
          {...this.state}
          handleChange={this.handleChange}
          submitChange={this.submitChange}
        />
      </div>
    );
  }
}

export default RegisterContainer;
