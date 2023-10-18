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
        {location.pathname !== "/dashboard" ? (
          <>
            <li>
              <Link to={"/"}>Back to Home</Link>
            </li>
            {location.pathname !== "/pro/sign-in" ? (
              <li>
                <Link to={"/pro/sign-in"}>Sign In</Link>
              </li>
            ) : (
              ""
            )}
            {location.pathname !== "/pro/sign-up" ? (
              <li class={style.outline}>
                <Link to={"/pro/sign-up"}>Join Us</Link>
              </li>
            ) : (
              ""
            )}
          </>
        ) : (
          <li>SY Construction</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
