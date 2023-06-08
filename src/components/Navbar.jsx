
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="navbar-list">
        <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/" className="navbar-link">Bus</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/Booking' ? 'active' : ''}`}>
          <Link to="/Booking" className="navbar-link">Train</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/CustomerReviews' ? 'active' : ''}`}>
          <Link to="/CustomerReviews" className="navbar-link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
