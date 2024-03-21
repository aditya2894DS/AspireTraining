import React from 'react';

import '../styles/Topbar.css';
import IconBtn from './IconBtn';

let userIcon = "https://img.icons8.com/material-sharp/24/FFFFFF/user.png";
let globeIcon = "https://img.icons8.com/ios/50/FFFFFF/globe--v1.png";
let menuIcon = "https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png";

let officeImg = "/2.jpg";

export default function Topbar(){
    return(
        <>
            <div className='topbar-container'>
                <div className='expo-div'></div>
                <div className='middle-bar'>
                    <img className='logo-img' src='https://s.alicdn.com/@img/imgextra/i2/O1CN01kNCWs61cTlUC9Pjmu_!!6000000003602-2-tps-418-58.png' alt='logo' />
                    <div className='middlebar-right-section'>
                        <div className='deliver-hover'>
                            <p>Deliver to:</p>
                            <div className='delivery-country-section'>
                                <div className='flag-icon-holder'></div>
                                <p>IN</p>
                            </div>
                        </div>
                        <IconBtn icon={globeIcon} text="English USD" pxSize={20} />
                        <IconBtn icon={userIcon} text="Sign in" pxSize={20} />
                        <IconBtn myClassName='signin-btn' text="Sign In" pxSize={20} isButton={true} />
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='bottom-bar-left-section'>
                        <IconBtn icon={menuIcon} text='All categories' pxSize={10} />
                        <IconBtn text='Featured selection' />
                        <IconBtn text='Trade Assurance' />
                        <IconBtn  text='Alibaba.com Membership' />
                    </div>
                    <div className='bottom-bar-right-section'>
                        <IconBtn text='Buy Central' />
                        <IconBtn text='Help Center' />
                        <IconBtn text='Get the App' />
                        <IconBtn text='Become a supplier' />
                    </div>
                </div>
            </div>
        </>
    )
}