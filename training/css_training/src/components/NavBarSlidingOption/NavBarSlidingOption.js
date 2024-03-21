import React from "react";
import NavBarIconBtn from "./NavBarIconBtn";

import "../../styles/NavBarSlidingOptionStyle.css";

const navbarData = [
  {
    id: 1,
    img: "https://flaticons.net/icon.php?slug_category=application&slug_icon=user-profile&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0",
    text: "Profile",
  },
  {
    id: 2,
    img: "https://flaticons.net/icon.php?slug_category=user-interface&slug_icon=row&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0",
    text: "Menu"
  },
  {
    id: 3,
    img: "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=chat&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0",
    text: "Chat"
  },
  {
    id: 4,
    img: "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=settings-01&icon_size=256&icon_color=000000&icon_flip=&icon_rotate=0",
    text: "Settings"
  }
];

export default function NavBarSlidingOption() {
  return (
    <>
      <div className="navbar-container">
        {navbarData.map((item) => (
          <NavBarIconBtn img={item.img} key={item.id} text={item.text} />
        ))}
      </div>
    </>
  );
}
