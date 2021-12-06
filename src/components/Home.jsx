import axios from "axios";
import React, { Component } from "react";
import api from "../api/BaseUrl";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("/user").then(
      (res) => {
        this.setState({
          user: res.data,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  render() {
    if (this.state.user) {
      return (
        <h2>
          Hi firstname: {this.state.user.first_name} and lastname:{" "}
          {this.state.user.last_name}
        </h2>
      );
    }
    return (
      <div>
        <h2>You are not logged in</h2>
      </div>
    );
  }
}
