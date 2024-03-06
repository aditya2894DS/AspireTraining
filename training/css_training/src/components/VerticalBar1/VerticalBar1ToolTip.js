import React, { useEffect, useRef, useState } from 'react';

export default function VerticalBar1ToolTip({icon, tooltiptext}){

    const tooltipIconRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        tooltipIconRef.current.style.backgroundImage = `url(${icon})`;
        tooltipIconRef.current.style.backgroundSize = 'contain';
        tooltipIconRef.current.style.backgroundPosition = 'center';
        tooltipIconRef.current.style.backgroundRepeat = 'no-repeat';
    }, [icon])

    function handleMouseEnter(){
        setIsHovered(true)
    }

    function handleMouseLeave(){
        setIsHovered(false)
    }

    return(
        <>
            <div className='tooltip-icon-container' ref={tooltipIconRef} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <span className={`tooltip-text ${isHovered ? 'show' : 'hide' }`}>{tooltiptext}</span>
            </div>
        </>
    )
}