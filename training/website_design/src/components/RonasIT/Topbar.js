import React from 'react';

const topbarOptions = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'Shop'},
    {id: 3, title: 'About'},
    {id: 4, title: 'Contacts'}
]

export default function Topbar(){
    return(
        <>
            <div className='topbar'>
                <div className='option-list-container'>
                    <ul className='option-list'>
                        {
                            topbarOptions.map(item => <li></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}