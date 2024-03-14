import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <section id="home-section">
      <Navbar />
      <div id="home-grid">
        <div>Text</div>
        <div>img</div>
      </div>
    </section>
  );
};

export default Home;
