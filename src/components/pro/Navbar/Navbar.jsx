import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <Link to={"/pro"}>
        <h2 class={style.logo}>
          Rinnovation<span>Partner</span>
        </h2>
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Back to Home</Link>
        </li>
        <li>
          <Link to={"/sign-in"}>Sign In</Link>
        </li>
        <li class={style.outline}>
          <Link to={"/sign-up"}>Join Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
