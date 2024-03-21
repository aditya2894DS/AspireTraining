import React, { useEffect, useRef, useState } from "react";

export default function NavBarIconBtn({ img, text }) {
  const iconRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    iconRef.current.style.backgroundImage = `url(${img})`;
    iconRef.current.style.backgroundPosition = "center";
    iconRef.current.style.backgroundRepeat = "no-repeat";
    iconRef.current.style.backgroundSize = "cover";
  }, [iconRef, img]);

  function handleMouseEnter() {
    setIsHovered(true)
    }

    function handleMouseLeave() {
        setIsHovered(false)
    }

  return (
    <>
      <div
        className="icon-btn-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="icon-div" ref={iconRef}></div>
        <p className={`btn-text ${isHovered ? "active" : ""}`}>{text}</p>
      </div>
    </>
  );
}
