import React, { useEffect, useRef, useState } from "react";
import whiteUserIcon from '../assets/icons/user-white-icon.png';
import blackUserIcon from '../assets/icons/user-icon.png';

import "../styles/IconBtnStyles.css";
import { Link } from "react-router-dom";

const iconStyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function IconBtn({
  myClassName,
  size,
  icon,
  text,
  onHover,
  list,
  dropdownAlign,
  hidableText,
  to
}) {
  const iconRef = useRef(null);

  const [isDropdown, setIsDropdown] = useState(false);
  const [dispList, setDispList] = useState(false);

  function handleShowList() {
    if (isDropdown) {
      setDispList(true);
    }
  }

  function handleHideList() {
    if (isDropdown) {
      setDispList(false);
    }
  }

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.style.backgroundImage = `url(${icon})`;
      iconRef.current.style.width = `${size}cm`;
      iconRef.current.style.height = `${size}cm`;
    }

    if(iconRef.current.parentElement.classList.contains("user-option")){
      console.log(iconRef.current)
      // iconRef.current.firstElementChild.firstElementChild.addEventListener('mouseenter', () => iconRef.current.style.backgroundImage = `url(${whiteUserIcon})`)
      // iconRef.current.firstElementChild.firstElementChild.addEventListener('mouseleave', () => iconRef.current.style.backgroundImage = `url(${blackUserIcon})`)
    }

    if (onHover) {
      setIsDropdown(true);
    }
  }, [icon, size, onHover]);

  return (
    <>
      <div
        className={`iconbtn-container  ${myClassName ? myClassName : ""} ${
          isDropdown ? "dropdown-container" : ""
        }`}
        onMouseOver={handleShowList}
        onMouseOut={handleHideList}
      >
        {to ? (
          <Link to={`${to}`}>
            <div className="icon-div" style={iconStyle} ref={iconRef}></div>
            {text ? (
              <p className={`btn-name ${hidableText ? "hidable" : ""}`}>
                {text}
              </p>
            ) : (
              <></>
            )}
          </Link>
        ) : (
          <>
            <div className="icon-div" style={iconStyle} ref={iconRef}></div>
            {text ? (
              <p className={`btn-name ${hidableText ? "hidable" : ""}`}>
                {text}
              </p>
            ) : (
              <></>
            )}
          </>
        )}

        {isDropdown ? (
          <ul
            className={`dropdown ${dispList ? "active" : "hide"} ${
              dropdownAlign === "toLeft" ? "left-align" : ""
            }`}
          >
            {text === "Login" ? (
              <li className="newcustomer-option">
                <p>New customer?</p>
                <Link to="/signup">
                  <button className="dropdown-signup-btn">Sign up</button>
                </Link>
              </li>
            ) : (
              <></>
            )}
            {list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
