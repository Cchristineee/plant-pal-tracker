import React from "react";
import "./Navbar.css";
import { GiFlowerPot } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <GiFlowerPot /> Plant Pal
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;