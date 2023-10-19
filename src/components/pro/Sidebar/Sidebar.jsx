import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link clasName={styles.navLink} to="/pro/dashboard">
        <h3> Dashboard</h3>
      </Link>
    </div>
  );
};

export default Sidebar;
