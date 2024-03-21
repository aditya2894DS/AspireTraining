import React, {useState} from 'react';

import '../styles/CategoryOptionStyle.css';
// import DropdownMenu from './DrowdownMenu';
import NestedDropdown from './NestedDropdown';

export default function CategoryOption({data}){

    const [isHover, setIsHover] = useState(false);


    return(
        <>
        <div className='category-option-container' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <img src={data.image} alt='category' className='category-img' />
            <div className='cat-text-container'>
                <p className='cat-text'>{data.name}</p>
                {
                    (data.isDropdown) ?
                    <div className='dropdown-icon'></div>:
                    null
                }
            </div>
            {
                (data.isDropdown)?
                <NestedDropdown data={data.subCategories} hovered={isHover} />:
                null
            }
        </div>
        </>
    )
}