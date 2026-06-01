import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">🌱 Plant Pal</div>

      <div>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Add Plant</a>
      </div>
    </nav>
  );
}

export default Navbar;