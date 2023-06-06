import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Bus</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Booking" className="navbar-link">Train</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;