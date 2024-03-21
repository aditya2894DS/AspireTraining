import React from "react";

export default function FooterTopLinks({ data }) {
  return (
    <>
      <div className="footertoplinks-container">
        <p className="list-heading">{data.mainTitle}</p>
        <ul className="option-list">
          {data.options.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
