import React, { useEffect, useRef } from 'react';

export default function ProfileImageContainer({imgSrc}){

    const profileImgRef = useRef(null);

    useEffect(() => {
        profileImgRef.current.style.backgroundImage = `url(${imgSrc})`;
        profileImgRef.current.style.backgroundPosition = 'center';
        profileImgRef.current.style.backgroundRepeat = 'no-repeat';
        profileImgRef.current.style.backgroundSize = 'cover';
        
    }, [imgSrc])

    return(
        <>
            <div className='profileimage-container' ref={profileImgRef}>
            </div>
        </>
    )
}