import React from 'react';
import IconBtn from './IconBtn';

import '../styles/TopbarStyle.css';

export default function Topbar(){
    return(
        <>
            <div className='topbar-container'>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="logo" />
                <div className='topbar-search'>
                    <IconBtn icon="https://img.icons8.com/ios/50/000000/search--v1.png" pxSize={10} />
                    <input type="text" />  
                </div>
                <div className='topbar-options-container'>
                    <IconBtn icon="https://img.icons8.com/fluency-systems-regular/48/user-male-circle--v1.png" pxSize={10} isDropdown={true} btnText="Login" />
                    <IconBtn icon="https://img.icons8.com/ios/50/shopping-cart--v1.png" pxSize={10} btnText="Cart" />
                    <IconBtn icon="https://img.icons8.com/fluency-systems-regular/48/shop.png" pxSize={10} btnText="Become a seller" />
                    <IconBtn icon="https://img.icons8.com/ios-glyphs/30/menu-2.png" pxSize={10} />
                </div>
            </div>
        </>
    )
}