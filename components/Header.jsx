import React from "react";
import { Link, NavLink } from "react-router-dom";

import signIcon from "../assets/images/avatar-icon.png";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogout() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>

        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>

        <NavLink to="/signIn">
          <img src={signIcon} alt="Sign in icon" />
        </NavLink>

        <button onClick={fakeLogout}>X</button>
      </nav>
    </header>
  );
}
