import {
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
  FaBehance,
  FaTwitter,
} from "react-icons/fa";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Build Something Together</h2>
      <p>
        Feel free to reach out if you're looking for a full-stack developer,
        have a question or just want to connect.
      </p>
      <div className="social-media">
        <Link to="https://github.com/StellaWanja" className="icon" target="_blank">
          <FaGithub  />
        </Link>
        <Link
          to="https://www.linkedin.com/in/stella-w-njoroge/"
          className="icon"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          to="https://twitter.com/StylaDes"
          className="icon"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          to="https://dribbble.com/StylaDes"
          className="icon"
          target="_blank"
        >
          <FaDribbble />
        </Link>
        <Link
          to="https://www.behance.net/stylades"
          className="icon"
          target="_blank"
        >
          <FaBehance />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
