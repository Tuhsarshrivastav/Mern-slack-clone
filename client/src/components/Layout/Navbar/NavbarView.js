import React from "react";
import { Link } from "react-router-dom";
const NavbarView = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <img
          src="assets/img/slack_logo.png"
          alt="logo"
          width="40"
          height="40"
          className="rounded-circle"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createteam">
              <i className="fas fa-plus-circle text-warning pe-2"></i>Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarView;
