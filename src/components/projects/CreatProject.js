import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} className="white">
          <h5 className="grey-text text-darken-3">Creat Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handelChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">ProjectContent</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handelChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>

        <div>
          <h3>{this.state.title}</h3>
          <h6>{this.state.content}</h6>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
