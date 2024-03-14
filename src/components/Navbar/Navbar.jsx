import React from "react";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo image" width={"70px"} />
      {/* add shimmer effect on button */}
      <button id="">Contact</button>
    </nav>
  );
};

export default Navbar;
