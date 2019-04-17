import React from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
const ProjectDetails = props => {
  const id = props.match.params.id;
  const { project } = props;

  if (project) {
    return (
      <div className="container section project-detail">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title} </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              corrupti est atque eos magni nobis aspernatur obcaecati rerum
              consectetur ut reprehenderit amet soluta cum maxime, nulla
              reiciendis dignissimos debitis. Minima!
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by (project.authorFirstName) (project.authorLastName)
            </div>
            <div>31st-Jan-2019</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">Loading</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    projects: state.project.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([{ collection: "projects" }])
)(ProjectDetails);
