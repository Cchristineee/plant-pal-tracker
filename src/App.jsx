import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function Home () {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-logo">🪴</div>
        <h1>Keep Your Plants Healthy and Happy!</h1>
        <p>
        Track watering, light needs, and care routines for all your plants.
        </p>
        <button className="hero-button">Add Your First Plant</button>
      </div>
    </section>
  )
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;