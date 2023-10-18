import React from "react";
import style from "./Landing.module.css";
import backgroundImage from "./background.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div class={style.container}>
        <h1 class={style.title}>Grow Your Bussiness</h1>
        <h1 class={style.subtitle}>Join us and increase your exposure</h1>
        <button>
          <Link to="/sign-up">
            Become Rinnovation<span>Partner</span>
          </Link>
        </button>
      </div>
    </main>
  );
};

export default Landing;
