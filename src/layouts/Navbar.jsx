import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/users" className="nav-link">
          Users
        </Link>
        <Link to="/list" className="nav-link">
          UserList
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;