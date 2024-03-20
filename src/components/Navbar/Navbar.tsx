import Logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo image" width={"70px"} className="logo" />
      <a href="#contact" className="contact-btn">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
