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
  render() {
    return (
      <div>
        <LoginView />
      </div>
    );
  }
}

export default LoginContainer;
