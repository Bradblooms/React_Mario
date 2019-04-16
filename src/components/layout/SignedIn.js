import React from "react";
import { NavLink } from "react-router-dom";

const SignedIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/creatproject">New Project</NavLink>
      </li>

      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          BB
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedIn;
