import React, { useEffect, useState } from 'react';
import StreamlineOrderList from './StreamlineOrderList';

import '../styles/StreamlineOrderBanner.css';

const bannerData = [
  {
    id: 1,
    heading: "Search for matches",
    desc: "Sed dapibus est nibh, a ornare purus fringilla eget. Nam rhoncus orci sit amet blandit malesuada. Class aptent taciti sociosqu ad litora ",
    img: "https://s.alicdn.com/@img/imgextra/i1/O1CN01KrWFW11fg52xUQzdc_!!6000000004035-0-tps-1380-1060.jpg",
    icon: "https://img.icons8.com/ios-filled/50/search--v1.png",
  },
  {
    id: 2,
    heading: "Identify the right one",
    desc: "Phasellus eget turpis sit amet sapien ornare pharetra vitae in nisi. Sed in sapien eget lectus porttitor pretium ac vel nulla.",
    img: "https://s.alicdn.com/@img/imgextra/i2/O1CN0168f1F61TkrjFojnmE_!!6000000002421-2-tps-1380-1060.png",
    icon: "https://img.icons8.com/ios-glyphs/30/star--v1.png",
  },
  {
    id: 3,
    heading: "Pay with confidence",
    desc: "Aenean maximus, velit quis pulvinar commodo, turpis nisl dignissim libero, vitae maximus mi ex ut nibh. Nullam hendrerit lobortis quam,",
    img: "https://s.alicdn.com/@img/imgextra/i1/O1CN01XW2muo1PFU87b4zQ5_!!6000000001811-2-tps-1380-1060.png",
    icon: "https://img.icons8.com/ios/50/refund-2.png",
  },
  {
    id: 4,
    heading: "Fulfill with transparency",
    desc: "Sed bibendum feugiat pellentesque. Phasellus lacus dolor, elementum placerat mauris sit amet, dictum posuere est.",
    img: "https://s.alicdn.com/@img/imgextra/i2/O1CN01spEIDZ1TPnVsDakHo_!!6000000002375-2-tps-1380-1060.png",
    icon: "https://img.icons8.com/ios-filled/50/globe--v1.png",
  },
  {
    id: 5,
    heading: "Manage with ease",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis egestas lorem. Proin eget tortor blandit, tempor risus in, accumsan felis.",
    img: "https://s.alicdn.com/@img/imgextra/i1/O1CN01HrdHbz2511UJNFOxq_!!6000000007465-2-tps-1380-1060.png",
    icon: "https://img.icons8.com/ios-glyphs/30/user--v1.png",
  },
];


export default function StreamlineOrderBanner(){

    const [optionState, setOptionState] = useState(1);
    const [imgSrc, setImgSrc] = useState("");


    useEffect(() => {
      let arr = bannerData;
      let selected = arr.filter(item => item.id === optionState)[0];
      setImgSrc(selected.img)

    }, [optionState])

    return(
        <>
            <div className='streamline-order-banner-container'>
                <p className='banner-heading-text'>Streamline ordering from search to fulfillment, all in one place</p>
                <div className='streamline-order-banner-list-image-container'>
                    <div className='left-section'>
                        {
                        bannerData.map(item => (
                          <>
                            <StreamlineOrderList key={item.id} option={item.id} heading={item.heading} desc={item.desc} icon={item.icon} getOption={(option) => setOptionState(option)} /> 
                            <div className='list-separator'></div>
                          </>
                        ))}
                    </div>
                    <div className='right-section'>
                        {
                          <img src={imgSrc} alt='right-img' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}