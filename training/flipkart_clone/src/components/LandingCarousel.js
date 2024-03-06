import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../styles/Carousel.css'; 

export default function LandingCarousel(){
    return(
        <>
        <OwlCarousel className='owl-theme' autoplay={true} loop nav items={1}>
            <div><img className='carousel-img' src={'assets/img/banner1.jpg'} alt="carousel-img" /></div>
            <div><img className='carousel-img' src={'assets/img/banner2.jpg'} alt="carousel-img" /></div>
            <div><img className='carousel-img' src={'assets/img/banner3.jpg'} alt="carousel-img" /></div>
            <div><img className='carousel-img' src={'assets/img/banner4.jpg'} alt="carousel-img" /></div>
        </OwlCarousel>
        </>
    )
}