import React, { useEffect, useMemo, useState } from "react";

import "../styles/TestimonialCarousel.css";
import IconBtn from "./IconBtn";
import TestimonialComponent from "./TestimonialComponent";

const testimonialData = [
  {
    id: 1,
    userImg:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userDesc: "Founder Eva Jane Beauty",
    userName: "Eva Jane",
    testimonialText:
      "Orci varius natoque penatibus et magnis dis parturient montes",
  },
  {
    id: 2,
    userImg:
      "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userDesc: "Founder of SprinJeen",
    userName: "Jane Doe",
    testimonialText:
      "Nunc porta eros blandit libero dictum finibus. Cras tempus diam in elit venenatis, ",
  },
  {
    id: 3,
    userImg:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userDesc: "Founder of SprinJeen",
    userName: "Jeen Steel",
    testimonialText:
      "Integer pellentesque finibus finibus. Ut leo nulla, tincidunt nec mauris in, rutrum finibus libero.",
  },
];

export default function TestimonialCarousel({ carouseldata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deactive, setDeactive] = useState(0);

  const carouselRefs = useMemo(
    () => carouseldata.map(() => React.createRef()),
    [carouseldata]
  );

  useEffect(() => {
    for (let i = 0; i < carouseldata.length; i++) {
      carouselRefs[i].current.style.transform = `translateX(${
        -currentIndex * 100
      }%)`;
    }
    if (currentIndex === carouseldata.length - 1) {
      setDeactive(1);
    } else if (currentIndex === 0) {
      setDeactive(-1);
    } else setDeactive(0);
  }, [currentIndex, carouselRefs, carouseldata.length]);

  return (
    <>
      <div className="testimonial-section-container">
        <div className="testimonial-heading-container">
        <p className="testimonial-section-heading">
          Get tailored discount, services, and tools for your business stage
        </p>
        <p className="testimonial-section-desc">
          Grow with curated benefits offered by the free Alibaba.com Membership,
          whether you are a small business needing the essentials to start
          sourcing or a well-established enterprise looking for tools and
          solutions for more complex orders.
        </p>
        <a className="learn-more-link">Learn more</a>
        </div>
        <div className="carousel-container">
          <IconBtn
            myClassName={`carousel-arrow ${deactive === -1 ? "inactive" : ""}`}
            icon="https://img.icons8.com/ios/50/long-arrow-left.png"
            pxSize={30}
            isButton={true}
            myId="carousel-left-arrow"
            handleClick={() => setCurrentIndex(currentIndex - 1)}
          />
          <div className="carousel-inner">
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="carousel-item"
                ref={carouselRefs[item.id - 1]}
              >
                <TestimonialComponent
                  userimage={item.userImg}
                  username={item.userName}
                  userdesc={item.userDesc}
                  testimonialtext={item.testimonialText}
                />
              </div>
            ))}
          </div>
          <IconBtn
            myClassName={`carousel-arrow ${deactive === 1 ? "inactive" : ""}`}
            icon="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
            pxSize={30}
            isButton={true}
            myId="carousel-right-arrow"
            handleClick={() => setCurrentIndex(currentIndex + 1)}
          />
        </div>
      </div>
    </>
  );
}
