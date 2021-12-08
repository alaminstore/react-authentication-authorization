import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";

export default class Register extends Component {
  state = {};
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    };

    const response = await axios
      .post("/register", data)
      .then((res) => {
        console.log(res);
        document.getElementById("cform").reset();
        NotificationManager.success("Success message", "Registration success!");
      })
      .catch((err) => {
        this.setState({
          warning: err.response.data.message,
        });
      });
  };

  render() {
    let error = "";
    if (this.state.warning) {
      error = (
        <div className="alert alert-danger role=" alert>
          {this.state.warning}
        </div>
      );
    }
    return (
      <>
        <h3>Register Here...</h3>
        <br />
        <form onSubmit={this.handleSubmit} id="cform">
          <div className="text-center">{error}</div>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(e) => (this.firstName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => (this.lastName = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) => (this.email = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => (this.password = e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={(e) => (this.confirmPassword = e.target.value)}
            />
          </div>
          <div class="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary btn-sm">
              Sign Up
            </button>
          </div>
        </form>
        <NotificationContainer />
      </>
    );
  }
}
