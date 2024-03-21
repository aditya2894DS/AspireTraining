import React, { useEffect, useRef, useMemo} from 'react';

export default function SiteNavigationLinkComponent({icon, heading, desc}){

    const iconRef = useRef(null);

    const addIcons = useMemo(() => {
    }, [iconRef, icon])
    
    useEffect(() => {
        console.log(iconRef.current)
        iconRef.current.style.backgroundImage = `url(${icon})`;
        addIcons()
    }, [addIcons, iconRef])

    return(
        <>
            <div className='site-navigation-link-component-container'>
                <div className='icon-container'>
                    <div className='icon-div' ref={iconRef}></div>
                </div>
                <p className='site-navigation-link-component-heading'>{heading}</p>
                <p className='site-navigation-link-component-desc'>{desc}</p>
            </div>
        </>
    )
}