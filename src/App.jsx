import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";



function App() {
  return (
    <>
      <Navbar />
      
      <section className="hero">
        <div className="hero-content">
        <div className="hero-logo">🪴</div>
        <h1>Keep Your Plants Healthy and Happy!</h1>
        <p>Track watering, light needs, and care routines for all your plants.</p>
        <button className="hero-button">Add Your First Plant</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;