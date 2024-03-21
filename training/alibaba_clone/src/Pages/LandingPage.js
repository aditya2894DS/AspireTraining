import React from 'react';

import Topbar from '../components/Topbar';
import LandingSearchBanner from '../components/LandingSearchBanner';
import StreamlineOrderBanner from '../components/StreamlineOrderBanner';
import Footer from '../components/Footer';
import TestimonialCarousel from '../components/TestimonialCarousel';
import SiteNavigationBanner from '../components/SiteNavigationBanner';

const carouselData = [
    {id:1, text: "1"},
    {id:2, text: "2"}, 
    {id:3, text: "3"}
]

export default function LandingPage(){
    return(
        <>
            <Topbar />
            <LandingSearchBanner />
            {/* <SiteNavigationBanner /> */}
            <StreamlineOrderBanner />
            <TestimonialCarousel carouseldata={carouselData} />
            <Footer />
        </>
    )
}