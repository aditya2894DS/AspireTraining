import React from 'react';

import '../styles/ProductCard.css';

export default function ProductCard({img, top, bottom, greenText}){
    return(
        <>
            <div className='product-card-container'>
                <img src={img} alt="product" />
                <div className='text-container'>
                    <p className='top-text'>{top}</p>
                    <p className={`bottom-text ${greenText ? "green" : ""}`}>{bottom}</p>
                </div>
            </div>
        </>
    )
}