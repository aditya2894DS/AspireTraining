import React from "react";
import ImageDropDown from "./ImageDropdown";
import '../styles/CategoryBanner.css'

const categoryBannerData = [
  {
    id: 1,
    name: "Grocery",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png",
  },
  {
    id: 2,
    name: "Mobiles",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png",
  },
  {
    id: 3,
    name: "Fashion",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg",
    isDropdown: true
},
{
    id: 4,
    name: "Electronics",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png",
    isDropdown: true
},
{
    id: 5,
    name: "Home & Furniture",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png",
    isDropdown: true
},
{
    id: 6,
    name: "Appliances",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png",
},
{
    id: 7,
    name: "Travel",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg",
},
{
    id: 8,
    name: "Two wheelers",
    img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png",
    isDropdown: true
  },
];

export default function CategoryBanner() {
  return (
    <>
      <div className="category-banner-container">
        {categoryBannerData.map((item) => (
          <ImageDropDown
            key={item.id}
            image={item.img}
            text={item.name}
            isDropdown={item.isDropdown}
          />
        ))}
      </div>
    </>
  );
}
