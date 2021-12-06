import React, { Component } from "react";
import api from "../api/BaseUrl";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";

export default class Register extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    };
    if (data.first_name.length < 1 || data.last_name === "") {
      NotificationManager.warning(
        "Warning message",
        "Field must not be empty!"
      );
      alert("Field must not be empty!");
      return;
    } else {
      const response = await axios
        .post("/register", data)
        .then((res) => {
          console.log(res);
          document.getElementById("cform").reset();
          NotificationManager.success(
            "Success message",
            "Registration success!"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <>
        <h3>Register Here...</h3>
        <br />
        <form onSubmit={this.handleSubmit} id="cform">
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
