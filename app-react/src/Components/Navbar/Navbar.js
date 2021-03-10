import React from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <nav>
        <div className="menu-icon">
          <span className="fas fa-bars" style={{ color: "white" }}></span>
        </div>
        <div className="logo">SquareMash ▣</div>
        <div className="nav-items">
          <li>
            <a href="#">Home </a>
          </li>
          <li>
            <a href="#">
              Men{" "}
              <i className="fa fa-caret-down" style={{ color: "white" }}></i>{" "}
            </a>
          </li>
          <li>
            <a href="#">
              Women{" "}
              <i className="fa fa-caret-down" style={{ color: "white" }}></i>{" "}
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </div>
        <div className="search-icon">
          <span className="fas fa-search" style={{ color: "white" }}></span>
        </div>

        <div className="cancel-icon">
          <span className="fas fa-times" style={{ color: "white" }}></span>
        </div>

        <form action="#">
          <input
            type="search"
            className="search-data"
            placeholder="Search"
            required
          />
          <button type="submit" className="fas fa-search"></button>
        </form>
        <li>
          <a href="#">
            <i
              className="fa fa-heart"
              style={{ fontSize: "24px", color: "white" }}
            ></i>
          </a>{" "}
        </li>
        <li>
          <a href="#">
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: "24px", color: "white" }}
            ></i>
          </a>{" "}
        </li>
      </nav>
    </div>
  );
};
export default Navbar;
