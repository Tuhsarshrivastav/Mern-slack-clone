import React, { Component } from "react";
import LoginView from "./LoginView";
export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
  };
  submitChange = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <LoginView
          {...this.state}
          handleChange={this.handleChange}
          submitChange={this.submitChange}
        />
      </div>
    );
  }
}

export default LoginContainer;
