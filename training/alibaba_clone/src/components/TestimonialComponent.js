import React from 'react';
import '../styles/TestimonialSlide.css';

export default function TestimonialComponent({userimage, username, userdesc, testimonialtext}){
    return(
        <>
            <div className='testimonial-container'>
                <div className='left-section'>
                    <div className='img-container'>
                        <img className='user-img' src={userimage} alt="user" />
                    </div>
                    <div className='text-container'>
                        <p className='username'>{username}</p>
                        <p className='userdesc'>{userdesc}</p>
                    </div>
                </div>
                <div className='right-section'>
                    <p>{testimonialtext}</p>
                </div>
            </div>
        </>
    )
}