import React from "react";
import TopBar from "../components/TopBar";
import LandingCarousel from "../components/LandingCarousel";
import CategoryBanner from "../components/CategoryBanner";
import CardGrid from "../components/CardGrid";

const cardGridImagesData = [
  {
    id: 1,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/057ba6c2c95f3d22.jpg",
  },
  {
    id: 2,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg",
  },
  {
    id: 3,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2ad216676e96d294.jpg",
  },
  {
    id: 4,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8c847eea35140ed6.jpg",
  },
  {
    id: 5,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b542d3cf44569508.jpg",
  },
  {
    id: 6,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/81035a28051d094e.jpg",
  },
  {
    id: 7,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/b542d3cf44569508.jpg",
  },
  {
    id: 8,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/2ad216676e96d294.jpg",
  },
  {
    id: 9,
    img: "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8c847eea35140ed6.jpg",
  },
];

export default function LandingPage() {
  return (
    <>
      <CategoryBanner />
      <LandingCarousel />
      <CardGrid list={cardGridImagesData} />
    </>
  );
}
