import React from "react";
import { Link } from "react-router-dom";

function Header({ branding }) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h1>{branding}</h1>
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home mr-2"></i>Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus mr-2"></i>Add
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question mr-2"></i>About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
