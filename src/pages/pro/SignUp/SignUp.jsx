import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignIn = () => {
  let navigate = useNavigate();
  return (
    <section className={styles.login__container} id="login">
      <div className={`${styles.grid} ${styles.login__card}`}>
        <div className="login-description">
          <h2>
            <b>Grow Your Business</b>
          </h2>
          <h5>Thousands of Projects waiting for you</h5>
        </div>

        <form action="" className="login-form">
          <div className={styles.login__box}>
            <label className={styles.login__label__email}>
              Service
            </label>
            <input
              className={styles.login__input}
            />
          </div>
          <div className={styles.login__box}>
            <label htmlFor="password" className={styles.login__label__password}>
              Location
            </label>
            <input
              className={styles.login__input}
            />
          </div>
          <Link to="/pro/SignUp2">
            <button className={styles.login__button}>Next</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
