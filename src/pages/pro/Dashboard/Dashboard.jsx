import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/pro/Sidebar";
import Chart from "./Chart.png";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <h1>Dashboard</h1>
        <h3>Statistic</h3>
        <div className={styles.chart}>
          <img src={Chart} alt="" />
          <h2>675 Project done</h2>
        </div>

        <h3>Projects offer for you</h3>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>decline</button>
              <button>accept</button>
            </div>
          </div>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>decline</button>
              <button>accept</button>
            </div>
          </div>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>decline</button>
              <button>accept</button>
            </div>
          </div>
        </div>
        <h3>Relevant project to you</h3>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>apply</button>
            </div>
          </div>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>apply</button>
            </div>
          </div>
          <div className={styles.project}>
            <h4>Dining Room Renovation</h4>
            <h4>jakarta</h4>
            <h4>Rp 10.000.000</h4>
            <div className={styles.buttons}>
              <button>apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
