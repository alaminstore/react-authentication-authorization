import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = async () => {
    await axios.get("/user").then(
      (res) => {
        this.setUser(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar user={this.state.user} setUser={this.setUser} />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                {/* <Route
                  exact
                  path="/"
                  component={() => <Home user={this.state.user} />}
                /> */}
                <Route
                  exact
                  path="/"
                  render={(props) => <Home {...props} user={this.state.user} />}
                />
                <Route
                  exact
                  path="/login"
                  component={() => <Login setUser={this.setUser} />}
                />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
