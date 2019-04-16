import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetail";
const ProjectSummery = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <a>
          <span className="card-title"> {project.title}</span>
        </a>
        <p>
          {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">31th-Jan-2019</p>
      </div>

      <Switch>
        <Route exact path="/project/{number}" component={ProjectDetails} />
      </Switch>
    </div>
  );
};

export default ProjectSummery;
