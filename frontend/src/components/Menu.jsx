import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../utils/authService";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = async () => {
    await authService.logout();
    navigate("/login");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="https://kite.zerodha.com/static/images/kite-logo.svg"
        alt="Kite"
        style={{ width: "30px", height: "30px", objectFit: "contain", marginRight: "4px" }}
      />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/dashboard/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">Profile</p>
        </div>

        {isProfileDropdownOpen && (
          <div style={{ position: "absolute", right: "20px", top: "60px", background: "#fff", border: "1px solid #eee", borderRadius: "4px", padding: "10px", zIndex: 99, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <p onClick={handleLogout} style={{ cursor: "pointer", color: "#f56834", fontSize: "0.9rem", margin: 0, padding: "5px 10px" }}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
