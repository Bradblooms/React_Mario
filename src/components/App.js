import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "./dashboard/Dashboard";
import ProjectDetails from "../components/projects/ProjectDetail";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreatProject from "../components/projects/CreatProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/creatproject" component={CreatProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
