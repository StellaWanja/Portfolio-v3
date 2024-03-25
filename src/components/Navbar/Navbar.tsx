import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo image" width={"70px"}  />
      </Link>
      <Link
        className="contact-btn"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70} // Adjust this value according to your layout
        duration={900} // Duration of the scroll animation
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
