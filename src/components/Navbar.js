// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/navbar.css';
import useNavbarDropdown from './../NavbarDropdown'; // Import the custom hook

const Navbar = () => {
  useNavbarDropdown(); // Use the custom hook

  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container">
        <Link className="navbar-brand" to="/">Joel Afamefune</Link>
        <button id="navbar-toggler" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        
    </nav>
  );
};

export default Navbar;
