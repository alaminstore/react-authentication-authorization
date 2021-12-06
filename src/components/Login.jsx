import axios from "axios";
import React, { Component } from "react";
import api from "../api/BaseUrl";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };
    axios
      .post("/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        document.getElementById("loginForm").reset();
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Login Here...</h2>
        <br />
        <form onSubmit={this.handleSubmit} id="loginForm">
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

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary btn-sm">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}
