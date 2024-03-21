import React, { useEffect, useState } from "react";
import CategoryOption from "./CategoryOption";

import '../styles/CategoryBannerStyle.css';

export default function CategoryBanner() {

  const [categoryBannerData, setCategoryBannerData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/category/getallcategory/')
    .then(res => res.json())
    .then(json => setCategoryBannerData(json))
  }, [])

  return(
    <>
    <div className="category-banner-container">
        {
            categoryBannerData.map(data => (
                <CategoryOption data={data}/>
            ))
        }
    </div>
    </>
  )
}
