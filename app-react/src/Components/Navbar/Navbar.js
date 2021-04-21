import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import History from "../../history";
import { CartContext, SearchContext } from "../ContextAPI/Context";

import "./Navbar.css";
const Navbar = () => {
  const [input, setInput] = useState("");
  const cartData = useContext(CartContext);
  const searchData = useContext(SearchContext);

  // useEffect(() => {
  //   const params = new URLSearchParams(location);
  //   const q = params.get("q");
  //   setSearch(q ? q : "MatLab");
  // });
  let { search } = useParams();
  // console.log(search);

  // useEffect(() => {
  //   searchData.setSearchValue(search);
  //   // setSearch(search);
  // }, []);

  const submitAction = (e) => {
    let searchValue = e.target["search"].value;
    setInput(searchValue);
    searchData.setSearchValue(searchValue);
    e.preventDefault();
    History.push("/query/" + searchValue);
    setInput(searchValue);
  };

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

        <form action="#" onSubmit={submitAction}>
          <input
            type="search"
            className="search-data"
            placeholder="Search"
            name="search"
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
          </a>
        </li>
        <li className="itemCount ml-2">
          <a href="#">{cartData.cartValue}</a>
        </li>
      </nav>
    </div>
  );
};
export default Navbar;
