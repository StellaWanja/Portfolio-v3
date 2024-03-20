import Lottie from "lottie-react";
import animationData from "../../assets/animations/arrow-down.json";
import Navbar from "../Navbar/Navbar";
import GridEffect from "./GridEffect/GridEffect";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section ">
      <Navbar />

      <div className="home-grid">
        <div className="hero-text">
          <h1>
            Hi, I'm StylaDes <span className="text-[#86c232]">|</span> Stella
            Wanja<span className="text-[#86c232]">.</span>
          </h1>
          <br />
          <h2>
            I'm a <span className="text-[#86c232]">Full-Stack Developer</span>
          </h2>
          <br />
          <p>I'm a full-stack developer proficient in front-end and back-end technologies, <br /> adept at creating robust, scalable web applications.</p>
          <a href="#about" className="arrow-down">
            <Lottie animationData={animationData} style={{height: '100px'}} />
          </a>
        </div>

        <GridEffect />
      </div>
    </section>
  );
};

export default Home;
