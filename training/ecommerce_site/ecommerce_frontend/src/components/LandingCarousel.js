import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "../styles/LandingCarouselStyle.css";

function LandingCarouselArrow({ myClassName, getIndex }) {
  return (
    <>
      <div
        className={`arrow-container ${myClassName ? myClassName : ""}`}
        onClick={getIndex}
      >
        <div className="icon-div"></div>
      </div>
    </>
  );
}

export default function LandingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(null);

  // using multiple refs
  const carouselRefs = useRef([]);

  useEffect(() => {
    fetch("http://localhost:4000/siteimages/getimages/carousel")
      .then((res) => res.json())
      .then((json) => setCarouselImages(json));
  });

  useLayoutEffect(() => {
    carouselRefs.current.forEach((item) => {
      if (currentIndex > 0) {
        setCurrentIndex(-carouselRefs.current.length+1);
      }
       if (currentIndex === -carouselRefs.current.length) {
        setCurrentIndex(0);
      }
      item.style.transform = `translateX(${currentIndex * 100}%)`;
    });
  }, [currentIndex]);

  return (
    <>
      <div className="landing-carousel-outer">
        <LandingCarouselArrow
          myClassName="prev"
          getIndex={() => setCurrentIndex(currentIndex + 1)}
        />
        <div className="landing-carousel-inner">
          {carouselImages ? (
            carouselImages.data.map((item, index) => (
              <div
                className="carousel-image-container"
                ref={(el) => (carouselRefs.current[index] = el)}
              >
                <img src={item.url} alt="carousel" />
              </div>
            ))
          ) : (
            <div className="carousel-image-container">
              <h3>No images</h3>
            </div>
          )}
        </div>
        <LandingCarouselArrow
          myClassName="next"
          getIndex={() => setCurrentIndex(currentIndex - 1)}
        />
      </div>
    </>
  );
}
