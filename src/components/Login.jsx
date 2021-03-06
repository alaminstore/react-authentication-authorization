import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {};
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
        // this.props.history.push("/");
        this.setState({
          loggedin: true,
        });
        this.props.setUser(res.data.user);
      })
      .catch((err) =>
        this.setState({
          warning: err.response.data.message,
        })
      );
  };
  render() {
    if (this.state.loggedin) {
      return <Redirect to={"/"} />;
    }
    let error = "";
    if (this.state.warning) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.warning}
        </div>
      );
    }
    return (
      <div>
        <h2 className="text-center">Login Here...</h2>
        <br />
        <form onSubmit={this.handleSubmit} id="loginForm">
          <div className="text-center">{error}</div>
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
          <div className="forgot-password text-right">
            <Link to={"/forgot"}>Forgot Password?</Link>
          </div>
        </form>
      </div>
    );
  }
}
