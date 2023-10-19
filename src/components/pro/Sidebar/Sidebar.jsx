import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to="/pro/dashboard">Dashboard</Link>
    </div>
  );
};

export default Sidebar;
