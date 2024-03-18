import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home-section">
      <Navbar />
      <div id="home-grid">
        <div className="hero-text">
          <h2>Hi there, I'm StylaDes | Stella Wanja.</h2>
          <h2>
            A <span className="text-[#86c232]">Full-Stack Developer</span> and{" "}
            <span className="text-[#86c232]">Designer </span>based in Nairobi.
          </h2>
          <Link to='/'>About Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
