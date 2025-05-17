import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="neon-nav">
      <Link to="/" className="nav-link neon-hover">
        <span className="nav-text">Home</span>
      </Link>
      <Link to="/poem1" className="nav-link neon-hover">
        <span className="nav-text">Poema 1</span>
      </Link>
      <Link to="/poem2" className="nav-link neon-hover">
        <span className="nav-text">Poema 2</span>
      </Link>
    </nav>
  );
}

export default NavBar;

