import React, { useEffect } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import signIcon from "../assets/images/avatar-icon.png";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const navigation = useNavigation();

  const [isLogin, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    setIsLogin(localStorage.getItem("loggedin"));
  }, [navigation.state]);

  function fakeLogout() {
    localStorage.removeItem("loggedin");
    setIsLogin(false);
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

        {!isLogin && (
          <NavLink to="/signIn" onClick={localStorage.loggedin}>
            <img src={signIcon} alt="Sign in icon" />
          </NavLink>
        )}

        {isLogin && (
          <button className="logout-btn" onClick={fakeLogout}>
            <FiLogOut className="logout-icon" />
          </button>
        )}
      </nav>
    </header>
  );
}
