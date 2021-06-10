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
