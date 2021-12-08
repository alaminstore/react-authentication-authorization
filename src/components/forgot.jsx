import React, { Component } from "react";
import axios from "axios";
class Forgot extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
    };
    axios
      .post("/forgot", data)
      .then((res) => {
        console.log("ss", res);
        if (res.data.message) {
          this.setState({
            success: res.data.message,
          });
        } else if (res.data.error) {
          this.setState({
            warning: res.data.error,
          });
        }
        document.getElementById("forgotForm").reset();
      })
      .catch((err) => {
        console.log(err);
        // this.setState({
        //   warning: err.data.message,
        // });
      });
  };
  render() {
    let error = "";
    if (this.state.success) {
      error = (
        <div className="alert alert-success" role="alert">
          {this.state.success}
        </div>
      );
    } else if (this.state.warning) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.warning}
        </div>
      );
    }
    return (
      <>
        <h2 className="text-center">Forgot Password</h2>
        <form onSubmit={this.handleSubmit} id="forgotForm">
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

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary btn-sm">
              Log In
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Forgot;
