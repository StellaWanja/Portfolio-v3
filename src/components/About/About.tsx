import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div>
        <h2>About Me</h2>
      </div>
      <div>
        <p>
          Hi, I'm Stella Wanja (or StylaDes). I'm a full-stack developer
          passionate about crafting seamless digital experiences. My goal is to
          always learn and build elegant user interfaces and robust server-side
          solutions through clean and efficient code.
          <br />
          <br />I am a technical writer as well and enjoy blogging about my
          coding journey and what I learn. My blog can be found{" "}
          <Link
            to="https://stylades.hashnode.dev/"
            target="_blank"
            className="text-[#86c232]"
          >
            here.
          </Link>
          <br />
          <br />
          When I'm not in front of a computer screen, I'm probably knitting,
          crocheting or reading a book.
        </p>
      </div>
    </section>
  );
};

export default About;
