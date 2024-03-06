import React from "react";

export default function Dropdown({ list }) {
  return (
    <>
      <ul className="dropdown-container">
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
