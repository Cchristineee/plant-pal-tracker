import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      
      <section className="hero">
        <h1>Keep Your Plants Healthy and Happy!</h1>
        <p>Track watering schedules, sunlight needs, and more.</p>
        
        <button>Add your First Plant  </button>
      </section>
      <Footer />
    </>
  );
}

export default App;