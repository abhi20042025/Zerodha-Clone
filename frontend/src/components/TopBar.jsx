import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">19,689.35</p>
          <p className="percent">+0.08%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">65,828.41</p>
          <p className="percent">+0.07%</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
