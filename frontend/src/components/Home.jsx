import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import "./Dashboard.css";

const Home = () => {
  return (
    <div className="dashboard-wrapper">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
