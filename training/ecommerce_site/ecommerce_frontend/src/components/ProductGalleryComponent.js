import React, {useEffect, useRef, useState} from 'react';
import '../styles/ProductGalleryStyle.css';
import ProductCard from './ProductCard';

export default function ProductGalleryComponent({heading, isCarousel}){

    const [products, setProducts] = useState([]);
    const galleryRef = useRef(null);
    const [hideArrow, setHideArrow] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/product/getallproduct')
        .then(res => res.json())
        .then(json => setProducts(json.msg))
    })

    function handleClick(){
        galleryRef.current.style.transform = 'translateX(-100%)';
        setHideArrow(true);
    }

    useEffect(() => {
        if(!isCarousel){
            let gridProducts = products.slice(0,4);
            setProducts(gridProducts);
        }
    }, [])

    return(
        <>
            <div className={`product-gallery-container ${isCarousel ? "carousel" : "four-grid"}`}>
                <div className='heading-container'>
                    <p className='heading'>{heading}</p>
                    <div className='gallery-arrow-container'>
                        <div className='icon-div gallery-arrow'></div>
                    </div>
                </div>
                <div className="gallery-grid" ref={galleryRef}>
                    {
                        products.map(item => <ProductCard img={item.img} top={item.top} bottom={item.bottom} />)
                    }
                </div>
                {
                    isCarousel ? 
                    <div className={`carousel-arrow-container ${hideArrow ? "hide" : ""}`} onClick={handleClick}>
                        <div className="icon-div"></div>
                    </div> :
                    null
                }
            </div>
        </>
    )
}