import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    let Buttons;
    if (this.props.user) {
      Buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/"} onClick={this.handleLogout} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      Buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <>
        <nav className="navbar navbar-expand navbar-light  fixed-top">
          <div className="container flx">
            <Link className="navbar-brand" to={"/"}>
              Home
            </Link>

            <div className="collapse navbar-collapse ">{Buttons}</div>
          </div>
        </nav>
      </>
    );
  }
}
