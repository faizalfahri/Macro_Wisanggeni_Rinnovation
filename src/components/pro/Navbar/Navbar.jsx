import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <Link to={"/pro"}>
        <h2 className={style.logo}>
          Rinnovation<span>Partner</span>
        </h2>
      </Link>
      <ul>
        {location.pathname !== "/pro/dashboard" ? (
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
              <li className={style.outline}>
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
