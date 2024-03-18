import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo image" width={"70px"} className="logo" />
      <NavLink to="/" className="contact-btn">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
