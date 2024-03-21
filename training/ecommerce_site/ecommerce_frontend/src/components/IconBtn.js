import React, { useEffect, useRef, useState } from "react";
import "../styles/IconBtnStyle.css";

export default function IconBtn({ myClassName, icon, pxSize, btnText, isDropdown }) {
  const iconDivRef = useRef(null);
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    iconDivRef.current.style.backgroundImage = `url(${icon})`;
    iconDivRef.current.style.padding = `${pxSize}px`;
  }, [iconDivRef, icon, pxSize]);

  useEffect(() => {
    if (isDropdown) {
      dropdownRef.current.addEventListener("mouseover", function () {
        setIsOpen(true);
      });
      dropdownRef.current.addEventListener("mouseout", function () {
        setIsOpen(false);
      });
    }
  }, [isDropdown]);

  return (
    <>
      <div className={`icon-btn-container ${myClassName ? myClassName : ""}`} ref={isDropdown ? dropdownRef : null}>
        <div className="icon-div" ref={iconDivRef}></div>
        <p className="btn-text">{btnText}</p>
        {isDropdown ? (
          <div
            className={`dropdown-arrow ${isOpen ? "open" : ""}`}
          ></div>
        ) : null}
      </div>
    </>
  );
}
