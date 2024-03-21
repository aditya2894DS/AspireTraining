import React from "react";
import FooterTopLinks from "./FooterTopLinks";

import "../styles/FooterStyles.css";
import IconBtn from "./IconBtn";

const topbarList = [
  {
    id: 1,
    mainTitle: "Get Support",
    options: [
      { id: 1, title: "Help Center" },
      { id: 2, title: "Live Chat" },
      { id: 3, title: "Check order status" },
      { id: 4, title: "Refunds" },
      { id: 5, title: "Report abuse" },
    ],
  },
  {
    id: 2,
    mainTitle: "Trade Assurance",
    options: [
      { id: 1, title: "Safe and easy payments" },
      { id: 2, title: "Money back policy" },
      { id: 3, title: "On-time shipping" },
      { id: 4, title: "After-sale protection" },
      { id: 5, title: "Product monitoring services" },
    ],
  },
  {
    id: 3,
    mainTitle: "Source on Alibaba.com",
    options: [
      { id: 1, title: "Request for quotation" },
      { id: 2, title: "Membership program" },
      { id: 3, title: "Alibaba.com Logistics" },
      { id: 4, title: "Sales tax and VAT" },
      { id: 5, title: "Alibaba.com Reads" },
    ],
  },
  {
    id: 4,
    mainTitle: "Sell on Alibaba.com",
    options: [
      { id: 1, title: "Start selling" },
      { id: 2, title: "Seller central" },
      { id: 3, title: "Become a verified supplier" },
      { id: 4, title: "Partnerships" },
      { id: 5, title: "Download the app for suppliers" },
    ],
  },
  {
    id: 5,
    mainTitle: "Get to know us",
    options: [
      { id: 1, title: "About Alibaba.com" },
      { id: 2, title: "Corporate responsibility" },
      { id: 3, title: "News center" },
      { id: 4, title: "Careers" },
    ],
  },
];

const socialLinks = [
  {
    id: 1,
    icon: "https://img.icons8.com/ios-filled/50/000000/facebook--v1.png",
  },
  { id: 2, icon: "https://img.icons8.com/ios-filled/50/000000/linkedin.png" },
  { id: 3, icon: "https://img.icons8.com/ios-filled/50/000000/twitter.png" },
  {
    id: 4,
    icon: "https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/ios-filled/50/000000/youtube-play.png",
  },
  { id: 6, icon: "https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" },
];

const sisterSites = [
  { id: 1, linkTitle: "AliExpress" },
  { id: 2, linkTitle: "1688.com" },
  { id: 3, linkTitle: "Tmall Taobao World" },
  { id: 4, linkTitle: "AliPay" },
  { id: 5, linkTitle: "Lazada" },
  { id: 6, linkTitle: "Taobao Global" },
];

const miscLinks = [
  { id: 1, linkTitle: "Policies and rules" },
  { id: 2, linkTitle: "Legal Notice" },
  { id: 3, linkTitle: "Product Listing Policy" },
  { id: 4, linkTitle: "Intellectual Property Protection" },
  { id: 5, linkTitle: "Privacy Policy" },
  { id: 6, linkTitle: "Terms of Use" },
  { id: 7, linkTitle: "Integrity Compliance" },
];

const contactDetails = [
    {id: 1,  text: '1999-2024 Alibaba.com. All rights reserved.', icon: 'https://img.icons8.com/stickers/100/where-what-quest.png'},
    {id: 2,  text: 'FASFJA21213213AFA', icon: 'https://img.icons8.com/stickers/100/where-what-quest.png'},
    {id: 3,  text: 'FASFJA21213213AFA', icon: 'https://img.icons8.com/stickers/100/where-what-quest.png'}
]

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="top-section">
          {topbarList.map((item) => (
            <FooterTopLinks data={item} key={item.id} />
          ))}
        </div>
        <div className="middle-section">
          <div className="social-links-section">
            {socialLinks.map((item) => (
              <IconBtn key={item.id} icon={item.icon} pxSize={30} />
            ))}
          </div>
          <div className="app-download-section">
            <p>
              Trade on the go with <span>Alibaba.com app</span>
            </p>
            <img
              src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/androidbadgesbox2.png"
              alt="app-store"
            />
            <img
              src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/androidbadgesbox2.png"
              alt="app-store"
            />
          </div>
        </div>
        <div className="bottom-section">
          <ul className="bottom-section-list" id="sister-site-list">
            {sisterSites.map((item) => (
              <>
                <li key={item.id}>{item.linkTitle}</li>
                <div className="seperator"></div>
              </>
            ))}
          </ul>
          <ul className="bottom-section-list" id="misc-link-list">
            {miscLinks.map((item) => (
            <>
                <li key={item.id}>{item.linkTitle}</li>
                <div className="seperator"></div>
              </>
            ))}
          </ul>
          <ul className="bottom-section-list" id='contact-details'>
            {
                contactDetails.map(item => <IconBtn key={item.id} icon={item.icon} text={item.text} pxSize={20} />)
            }
          </ul>
        </div>
      </div>
    </>
  );
}
