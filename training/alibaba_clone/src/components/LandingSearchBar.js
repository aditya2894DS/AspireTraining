import React from 'react';
import IconBtn from './IconBtn';

const mglassIcon = "https://img.icons8.com/ios/50/FFFFFF/search--v1.png"

export default function LandingSearchBar(){
    return(
        <>
            <div className='landing-searchbar-container'>
                <input type='text' className='searchbar-input'placeholder="men's shoes" />
                <div className='image-search-icon-div'></div>
                <IconBtn icon={mglassIcon} text="Search" pxSize={20} isButton={true} myClassName="search-btn" />
            </div>
        </>
    )
}