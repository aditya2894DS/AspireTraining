import React, { useEffect, useRef, useState } from 'react';

import '../styles/StreamlineOrderList.css';

export default function StreamlineOrderList({option, heading, desc, icon, getOption}){

    const iconRef = useRef(null);
    // const [hoveredOption, setHoveredOption] = useState(1);
    const [isHovered, setIsHovered]= useState(false);
    
    useEffect(() => {
        iconRef.current.style.backgroundImage = `url(${icon})`;
    }, [icon, iconRef])

    function handleMouseEnter(){
        setIsHovered(true);
        getOption(option)
    }
    
    function handleMouseLeave(){
        setIsHovered(false);
    }


    return(
        <>
            <div className={`streamline-order-list-container ${isHovered ? "active" : "inactive"}`} listoption={option} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='icon-border'>
                    <div className='icon-div' ref={iconRef}></div>
                </div>
                <div className='list-desc-container'>
                    <p className='heading'>{heading}</p>
                    <p className='desc'>{desc}</p>
                </div>
            </div>
            <div className='list-trail-div'></div>
        </>
    )
}