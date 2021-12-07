import axios from "axios";
import React, { Component } from "react";
import api from "../api/BaseUrl";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.user) {
      return (
        <h2>
          Hi firstname: {this.props.user.first_name} and lastname:{" "}
          {this.props.user.last_name}
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
