import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "lottie-react";
//file imports
import animationData from "../../assets/animations/arrow-down.json";
import Navbar from "../Navbar/Navbar";
import GridEffect from "./GridEffect/GridEffect";
import HeroText from "./HeroText/HeroText";
import "./Home.css";


const Home = () => {
  return (
    <section className="home-section ">
      <Navbar />

      <div className="home-grid">
        <div className="hero-text">
          <HeroText />
          <Link
            className="arrow-down"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value according to your layout
            duration={900} // Duration of the scroll animation
          >
            <Lottie animationData={animationData} style={{ height: "100px" }} />
          </Link>
        </div>

        <GridEffect />
      </div>
    </section>
  );
};

export default Home;
