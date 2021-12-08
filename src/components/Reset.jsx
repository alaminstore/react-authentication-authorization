import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Reset extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm,
    };
    axios
      .post("/reset", data)
      .then((res) => {
        console.log(res);
        this.setState({
          reset: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (this.state.reset) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div>
        <h2 className="text-center">Reset Your Password</h2>
        <br />
        <form onSubmit={this.handleSubmit} id="loginForm">
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
            <label htmlFor="firstname">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={(e) => (this.password_confirm = e.target.value)}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-info btn-sm"
              style={{
                color: "#fff",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              Submit Here
            </button>
          </div>
        </form>
      </div>
    );
  }
}
