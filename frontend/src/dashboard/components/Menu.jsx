import React, { useContext, useState } from "react";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../context/userContext";
import { toast } from "react-toastify";

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
  // const { user, logout } = useUser(); // ✅ use context

  return (
    <div className="profile-menu-container">
      <div
        className="profile-trigger"
        onClick={() => setOpen(!open)}
        role="button"
      >
        {/* <div className="avatar">
          {user
            ? user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
            : "?"}
        </div> */}
        {/* <span className="username">{user ? user.name : "Guest"}</span> */}
      </div>

      {open && (
        <div className="dropdown-menu-custom shadow-sm">
          <button className="dropdown-item-custom">
            <FaUser className="me-2" /> Profile
          </button>
          <button className="dropdown-item-custom logout" onClick={logout}>
            <FaSignOutAlt className="me-2" /> Logout
          </button>
        </div>
      )}
    </div>
  );
};
