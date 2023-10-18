import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <section className={styles.login__container} id="login">
      <div className={`${styles.grid} ${styles.login__card}`}>
        <div className="login-description">
          <h2>
            <b>Sign In</b>
          </h2>
          <h3>Login To Your Pro's Account!</h3>
        </div>

        <form action="" className="login-form">
          <div className={styles.login__box}>
            <label htmlFor="email" className={styles.login__label__email}>
              Email
            </label>
            <input
              type="email"
              className={styles.login__input}
              id="email"
              name="user-email"
              required
            />
          </div>
          <div className={styles.login__box}>
            <label htmlFor="password" className={styles.login__label__password}>
              Password
            </label>
            <input
              type="password"
              className={styles.login__input}
              id="password"
              name="user-password"
              required
            />
          </div>
          <Link to="/pro/">
            <button className={styles.back__button}>Back</button>
          </Link>
          <Link to="/pro/dashboard">
            <button className={styles.login__button}>Login</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
