import React, { useEffect, useState, useRef } from "react";
import DropdownMenu from "./DrowdownMenu";

import "../styles/NestedDropdownStyle.css";

export default function NestedDropdown({ data, hovered }) {
  const [isHover, setIsHover] = useState(false);
  const [listIndex, setListIndex] = useState(-1);
  const menuListRef = useRef([]);

  useEffect(() => {
    if (isHover) {
      menuListRef.current.forEach((el, index) => {
        el.nextSibling.classList.remove("open");
      });
      menuListRef.current[listIndex].nextSibling.classList.add("open");
      menuListRef.current[listIndex].classList.add("open");
    }
    if (!isHover) {
      menuListRef.current.forEach((el) => {
        el.nextSibling.classList.remove("open");
      });
    }
  });

  return (
    <>
      <div className={`nested-dropdown-container ${hovered ? "active" : " "}`}>
        {data.map((item, index) =>
          (item.subCategories.length !== 0) ? (
            <>
              <li
                onMouseEnter={() => {
                  setIsHover(true);
                  setListIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                  setListIndex(-1);
                }}
                ref={(el) => (menuListRef.current[index] = el)}
              >
                {item.name}
                <div className="icon-div"></div>
              </li>
              <DropdownMenu list={item.subCategories} />
            </>
          ) : (
            <li>{item.name}</li>
          )
        )}
      </div>
    </>
  );
}
