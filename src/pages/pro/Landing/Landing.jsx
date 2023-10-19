import React from "react";
import style from "./Landing.module.css";
import backgroundImage from "./background.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={style.container}>
        <h1 className={style.title}>Grow Your Bussiness</h1>
        <h1 className={style.subtitle}>Join us and increase your exposure</h1>
        <button>
          <Link to="/pro/sign-up">
            Become Rinnovation<span>Partner</span>
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Landing;
