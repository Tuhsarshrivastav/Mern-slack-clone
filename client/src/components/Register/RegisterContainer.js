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

  render() {
    return (
      <div>
        <RegisterView />
      </div>
    );
  }
}

export default RegisterContainer;
