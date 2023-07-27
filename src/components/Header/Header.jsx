import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className="header-container">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <nav>
        <NavLink className="nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="nav-link" to="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
