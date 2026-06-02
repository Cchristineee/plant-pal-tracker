import React from "react";
import "./Navbar.css";
import { GiFlowerPot } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <GiFlowerPot /> Plant Pal
      </div>

      <div>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Add Plant</a>
      </div>
    </nav>
  );
}

export default Navbar;