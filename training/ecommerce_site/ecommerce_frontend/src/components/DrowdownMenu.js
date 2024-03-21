import React from "react";

export default function DropdownMenu({ list, hovered }) {
  return (
    <>
      <ul className={`dropdown-container ${hovered ? "active" : ""}`}>
        {
          list.map(item => <li>{item.name}</li>)
        }
      </ul>
    </>
  ); 
}
