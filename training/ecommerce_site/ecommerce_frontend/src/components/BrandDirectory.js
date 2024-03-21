import React, { useEffect, useState } from 'react';

import '../styles/BrandDirectoryStyles.css';

function BrandDirComponent({data}){
    return(
        <>
        <div className='brand-dir-list-container'>
            <p>{data.list_heading}</p>
            {
                data.list_option.map(item => <li key={item.id}>{item.option}</li>)
            }
        </div>
        </>
    )
}

export default function BrandDirectory(){

    const [brandDirData, setBrandDirData] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/branddir/getbd')
        .then(res => res.json())
        .then(json => setBrandDirData(json.msg))
    }, [])

    return(
        <>
            <div className='brand-directory-section-container'>
                <p className='section-heading'>Top Stories: Brand Directory</p>
                {
                    brandDirData.map(item => <BrandDirComponent data={item} />)
                }
            </div>
        </>
    )
}