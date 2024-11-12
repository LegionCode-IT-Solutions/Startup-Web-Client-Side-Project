import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <Link to="/" className="">
        Web Site Name
      </Link>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
