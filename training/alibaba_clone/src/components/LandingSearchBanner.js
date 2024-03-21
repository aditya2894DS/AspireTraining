import React from 'react';
import IconBtn from './IconBtn';

import LandingSearchBar from './LandingSearchBar';

import '../styles/LandingSearchBanner.css';
import '../styles/LandingSearchBar.css';

let playIcon = 'https://img.icons8.com/ios-filled/50/EBEBEB/play--v1.png';

export default function LandingSearchBanner(){
    return(
        <>
            <div className='landing-search-banner-container'>
                <div className='banner-form'>
                    <IconBtn icon={playIcon} text='Learn about Alibaba.com' pxSize={20} myClassName="LearnAlibaba-option" /> 
                    <p className='banner-big-text'>The leading B2B ecommerce platform for global trade</p>
                    <LandingSearchBar />
                    <div className='frequently-searched-bar'>
                        <p>Frequently searched:</p>
                        <IconBtn text="men's shoes" isButton={true} myClassName="f-searched-btn" />
                        <IconBtn text="iphone 14 pro max" isButton={true} myClassName="f-searched-btn" />
                        <IconBtn text="mobile phones" isButton={true} myClassName="f-searched-btn" />
                    </div>
                </div>
            </div>
        </>
    )
}