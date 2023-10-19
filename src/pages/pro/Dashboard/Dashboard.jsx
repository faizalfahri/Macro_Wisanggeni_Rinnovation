import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/pro/Sidebar";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <h1>Dashboard</h1>
        <h3>Statistic</h3>
      </div>
    </div>
  );
};

export default Dashboard;
