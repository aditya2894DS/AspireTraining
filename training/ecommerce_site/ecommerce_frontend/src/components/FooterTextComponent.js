import React, {useEffect, useState} from 'react';

import '../styles/FooterTextStyles.css';

function FooterText({data}){
    return(
        <>
            <div className='footer-text'>
                <p className='subheading'>{data.text_heading}</p>
                {
                    data.desc.map(item => <p className='desc-text'>{item.text}</p>)
                }
            </div>
        </>
    )
}

export default function FooterTextComponent(){

    const [footerTextData, setFooterTextData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/footertexts/gettext")
        .then(res => res.json())
        .then(json => setFooterTextData(json.msg))
    }, [])


    return(
        <>
            <div className='footer-text-component-container'>
                {
                    footerTextData.map(item => <FooterText data={item} />)
                }
            </div>
        </>
    )
}