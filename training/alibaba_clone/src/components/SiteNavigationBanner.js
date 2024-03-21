import React from 'react';
import SiteNavigationLinkComponent from './SiteNavigationLinkComponent';

const siteNavigationBannerData = [
    {id: 1, icon: 'https://img.icons8.com/ios-filled/50/000000/delivery--v1.png', heading: 'Millions of business offerings', desc: 'Explore products and suppliers for your business from millions of offerings worldwide.'},
    {id: 2, icon: 'https://img.icons8.com/ios-filled/50/000000/delivery--v1.png', heading: 'Assured quality and transactions', desc: 'Ensure production quality from verified suppliers, with your orders protected from payment to delivery..'},
    {id: 3, icon: 'https://img.icons8.com/ios-filled/50/000000/delivery--v1.png', heading: 'One-stop trading solution', desc: 'Order seamlessly from product/supplier search to order management, payment, and fulfillment.'},
    {id: 4, icon: 'https://img.icons8.com/ios-filled/50/000000/delivery--v1.png', heading: 'Tailored trading experience', desc: 'Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way..'}
]



export default function SiteNavigationBanner(){
    return(
        <>
            <div className='site-navigation-banner-container'>
                 {
                    siteNavigationBannerData.map(item => <SiteNavigationLinkComponent key={item.id} icon={item.icon} heading={item.heading} desc={item.desc} />)
                 }
            </div>
        </>
    )
}