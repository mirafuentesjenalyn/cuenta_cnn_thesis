import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Assuming you have a Logo component

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default Navbar;
