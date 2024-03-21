import React, {useEffect, useState} from "react";
import ImageDropDown from "./ImageDropdown";
import '../styles/CategoryBanner.css'


export default function CategoryBanner() {

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/landing/categories')
    .then(res => res.json())
    .then(json => setCategoriesData(json))
  }, [])

  return (
    <>
      <div className="category-banner-container">
        {categoriesData.map((item) => (
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
