import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            corrupti est atque eos magni nobis aspernatur obcaecati rerum
            consectetur ut reprehenderit amet soluta cum maxime, nulla
            reiciendis dignissimos debitis. Minima!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by bardia</div>
          <div>31st-Jan-2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
