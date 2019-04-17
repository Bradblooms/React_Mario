import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { singOut, signOut } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";

const SignedIn = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/creatproject">New Project</NavLink>
      </li>

      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          BB
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedIn);
