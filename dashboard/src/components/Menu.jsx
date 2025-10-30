import React, { useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="d-flex justify-content-end p-3 bg-light">
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Menu;

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Vite uses VITE_ prefix

  const logout = async () => {
    try {
      await axios.post(`${API}/auth/logout`);
      window.location.href = "http://localhost:5174";
    } catch (error) {
      console.log("error while logout", error);
    }
  };

  return (
    <div className="profile-menu-container">
      <div
        className="profile-trigger"
        onClick={() => setOpen(!open)}
        role="button"
      >
        <div className="avatar">ZU</div>
        <span className="username">UserID</span>
      </div>

      {open && (
        <div className="dropdown-menu-custom shadow-sm">
          <button className="dropdown-item-custom">
            <FaUser className="me-2" /> Profile
          </button>
          <button className="dropdown-item-custom">
            <FaCog className="me-2" /> Settings
          </button>
          <button className="dropdown-item-custom logout" onClick={logout}>
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};
