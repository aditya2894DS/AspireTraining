import React from 'react';
import chevronLogo from '../assets/icons/chevrond.png';

const iconStyle2 = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "15px",
  height: "15px",
  backgroundImage: `url(${chevronLogo})` 
};

export default function ImageDropDown({image, text, isDropdown}){

    return (
      <>
        <div className="imagedd-container">
          <img src={image} alt="category" />
          <div className='category-name-area'>
            <p className='category-name'>{text}</p>
            {isDropdown ? (
                <div className="icon-div" style={iconStyle2}></div>
            ) : (
                <></>
            )}
          </div>
        </div>
      </>
    );
}