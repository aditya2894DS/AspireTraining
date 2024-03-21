import React from 'react';
import Topbar from '../components/Topbar';
import CategoryBanner from '../components/CategoryBanner';
import LandingCarousel from '../components/LandingCarousel';
import ProductGalleryComponent from '../components/ProductGalleryComponent';
import ProductCard from '../components/ProductCard';
import BrandDirectory from '../components/BrandDirectory';
import FooterTextComponent from '../components/FooterTextComponent';
import Footer from '../components/Footer';


export default function LandingPage(){
    return(
        <>
            <Topbar />
            <CategoryBanner />
            <LandingCarousel />
            <ProductGalleryComponent heading="Best of Electronics" isCarousel />
            <ProductGalleryComponent heading="Deal of the Day" isCarousel />
            <ProductGalleryComponent heading="Discount" />
            <BrandDirectory />
            <FooterTextComponent />
            <Footer />
        </>
    )
}