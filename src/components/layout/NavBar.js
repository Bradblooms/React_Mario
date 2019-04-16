import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import $ from "jquery";
const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Bardia
        </Link>

        <SignedIn />

        <SignedOut />
      </div>
    </nav>
  );
};

export default NavBar;
