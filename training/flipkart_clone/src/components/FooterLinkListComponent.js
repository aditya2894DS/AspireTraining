import React from 'react';

export default function FooterLinkListComponent({data}){
    return(
        <>
            <div className='footer-linklist-container'>
                <p className="heading all-caps">{data.mainTitle}</p>
                <ul className="link-list" id="link-list-1">
                    {
                        data.options.map(item => <li className='list-item' key={item.id}>{item.title}</li>)
                    }
                </ul>
            </div>
        </>
    )
}