import React from "react";
import ProjectSummery from "./ProjectSummery";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummery project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
