import React, { useEffect, useRef } from "react";

const iconBtnStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const iconBtnOuterStyle = {
  display: "flex",
  borderRadius: "1000px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export default function IconBtn({
  myClassName,
  icon,
  text,
  pxSize,
  isButton,
  myId,
  handleClick,
}) {
  const iconDivRef = useRef(null);

  useEffect(() => {
    if (icon) {
      iconDivRef.current.style.backgroundImage = `url(${icon})`;
      iconDivRef.current.style.backgroundSize = "cover";
      iconDivRef.current.style.backgroundPosition = "center";
      iconDivRef.current.style.backgroundRepeat = "no-repeat";
      iconDivRef.current.style.height = `${pxSize}px`;
      iconDivRef.current.style.width = `${pxSize}px`;
    }
  }, [iconDivRef, icon, pxSize]);

  return (
    <>
      {isButton ? (
        <div
          className={`icon-btn-outer ${myClassName ? myClassName : ""}`}
          id={myId}
          style={iconBtnOuterStyle}
          onClick={handleClick}
        >
          <div className="icon-btn-container" style={iconBtnStyle}>
            {icon ? <div className="icon-div" ref={iconDivRef}></div> : <></>}
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div
          className={`icon-btn-container ${myClassName ? myClassName : ""}`}
          style={iconBtnStyle}
        >
          {icon ? <div className="icon-div" ref={iconDivRef}></div> : <></>}
          <p>{text}</p>
        </div>
      )}
    </>
  );
}
