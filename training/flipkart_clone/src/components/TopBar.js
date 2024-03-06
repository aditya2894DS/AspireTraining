import React from "react";
import { Link } from "react-router-dom";
import IconBtn from "./IconBtn";

import logo from "../assets/images/flipkart_logo.png";
import searchIcon from "../assets/icons/glass.png";
import userIcon from "../assets/icons/user-icon.png";
import shopIcon from "../assets/icons/shop-icon.png";
import cartIcon from "../assets/icons/shop-kart.png";
import threeDotsIcon from "../assets/icons/threedots-icon.png";
import hamburgerIcon from "../assets/icons/hamburger-icon.png";

import "../styles/TopBarStyles.css";

const loginList = [
  {
    id: 1,
    name: "My profile",
  },
  {
    id: 2,
    name: "Flipkart Plus Zone",
  },
  {
    id: 3,
    name: "Orders",
  },
  {
    id: 4,
    name: "Wishlist",
  },
];

const miscList = [
    {id: 1, name: "Notification preference"},
    {id: 2, name: "24X7 Customer Service"},
    {id: 3, name: "Advertise"},
    {id: 4, name: "Download App"},
]

export default function TopBar() {

  return (
    <>
        <div className="topbar-container">
          <IconBtn icon={hamburgerIcon} size={1} myClassName="hamburgerlist-icon" />
          <Link to="/"><img src={logo} alt="logo-img" id="site-logo" /></Link>
          <div className="searchbar-container">
            <IconBtn icon={searchIcon} size={0.5} myClassName="searchbar-icn" />
            <input
              type="text"
              id="topbar-search"
              placeholder="Search for Products, Brands & More"
            />
          </div>
          <IconBtn
            icon={userIcon}
            text="Login"
            size={1}
            onHover
            list={loginList}
            myClassName="user-option"
            to="/login"
          />
          <IconBtn icon={cartIcon} text="Cart" myClassName="cart-option" size={1} hidableText to="/cart" />
          <IconBtn icon={shopIcon} text="Become a Seller" size={1} myClassName="shop-option" to="/seller" hidableText />
          <IconBtn icon={threeDotsIcon} size={0.75} onHover myClassName="threedots-option" list={miscList} dropdownAlign='toLeft' />
        </div>
    </>
  );
}
