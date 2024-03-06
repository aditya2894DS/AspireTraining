import React, { useState, useEffect } from "react";
import ProfileImageContainer from "./ProfileImageContainer";

import "../../styles/UserProfileIconsStyle.css";

let logoSrc =
  "https://images-platform.99static.com//mu-zmBDe-UUJmv6ND81seH93Ke4=/431x185:1486x1240/fit-in/500x500/99designs-contests-attachments/105/105232/attachment_105232293";

const profileImageData = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=1024x1024&w=is&k=20&c=8mgK2Kq73o8DIjazvLmEGkhx2p_7P5r3mvpbIM6q5cA=",
  },

  {
    id: 2,
    img: "https://media.istockphoto.com/id/1471295100/photo/senior-black-woman-wearing-white-glasses.jpg?s=1024x1024&w=is&k=20&c=c8seNjcrYQ66BMKvkceL8lSRmVqp1sQ9lxE1rn_SwxQ=",
  },

  {
    id: 3,
    img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=",
  },
  

  {
    id: 4,
    img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=",
  },


  {
    id: 5,
    img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=",
  },


{    
    id: 6,
    img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=5OK7djfD3cnNmQ-DR0iQzF-vmA-iTNN1TbuEyCG1DfA=",
  }

];

export default function TopBar() {

  const userCount = profileImageData.length;
  const [userImageArray, setUserImageArray] = useState([]);
  const [displayCount, setDisplayCount] = useState(false);

  useEffect(() => {
    if (profileImageData.length > 4) {
      let arr = profileImageData.slice(0, 4);
      setDisplayCount(true);
      setUserImageArray(arr);
    } else if(profileImageData.length <= 4){ 
        setUserImageArray(profileImageData);
    }
  }, []);

  return (
    <>
      <div className="topbar-container">
        <img src={logoSrc} alt="logo" className="logo-img" />
        <div className="user-section">
          <p className={`user-count-txt ${displayCount ? "show" : "hide"}`}>+ {userCount - 4}</p>
          <div className="user-image-section">
            {userImageArray.map((item) => (
              <ProfileImageContainer key={item.id} imgSrc={item.img} />
            ))}
          </div>
          <button type="button" className="topbar-btn">
            Add user
          </button>
        </div>
      </div>
    </>
  );
}
