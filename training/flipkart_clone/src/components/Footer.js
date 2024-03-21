import React, { useEffect, useState, useRef } from "react";

import "../styles/FooterStyle.css";
import FooterLinkListComponent from "./FooterLinkListComponent";

export default function Footer() {
  useEffect(() => {
    const footerLinkRequest = fetch(
      "http://localhost:4000/landing/footerlinks"
    ).then((res) => res.json());
    const socialLinkRequest = fetch(
      "http://localhost:4000/landing/sociallinks"
    ).then((res) => res.json());

    Promise.all([footerLinkRequest, socialLinkRequest])
      .then(([data1, data2]) => {
        setPopulateFooterLink(data1);
        setPopulateSocialLink(data2);
      })
      .catch((err) => console.error(err));
  }, []);

  const socialLinkRefs = useRef([]);
  const [populateFooterLink, setPopulateFooterLink] = useState([]);
  const [populateSocialLink, setPopulateSocialLink] = useState([]);

  useEffect(() => {
    if(populateSocialLink.length > 0){
      socialLinkRefs.current.forEach((element,index) => {
        element.style.backgroundImage = `url(${populateSocialLink[index].icon})`
      })
    }
  }, [socialLinkRefs, populateSocialLink])

  return (
    <>
      <div className="footer-container">
        <div className="footer-top-section">
          {populateFooterLink.map((item) => (
            <FooterLinkListComponent data={item} />
          ))}
          <div className="footer-linklist-container">
            <div className="mail-social-section">
              <div className="mail-section">
                <p className="heading">Mail us:</p>
                <p className="footer-address-text">
                  Flipkart Internet Private Limited
                  <br />
                  Buildings Alyssa, Begonia &<br />
                  Clove Embassy Tech Village,
                  <br />
                  Outer Ring Road, Devarabeensanahalli Village,
                  <br />
                  Karnataka, India
                  <br />
                </p>
              </div>
              <div className="social-section">
                <p className="heading">Social:</p>
                <div className="icons-container">
                  {populateSocialLink.map((item) => (
                    <div
                      className="social-icon-container"
                      ref={(element) =>
                        (socialLinkRefs.current[item.id-1] = element)
                      }
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-linklist-container">
            <p className="heading">Registered Office Address:</p>
            <p>
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeensanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN: U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700
            </p>
          </div>
        </div>
        <div className="footer-bottom-section">
          <div className="footer-bottom-option">
            <div className="footer-bottom-icon-container"></div>
            <div className="footer-bottom-text">Become a seller</div>
          </div>
          <div className="footer-bottom-option">
            <div className="footer-bottom-icon-container"></div>
            <div className="footer-bottom-text">Advertise</div>
          </div>
          <div className="footer-bottom-option">
            <div className="footer-bottom-icon-container"></div>
            <div className="footer-bottom-text">Gift cards</div>
          </div>
          <div className="footer-bottom-option">
            <div className="footer-bottom-icon-container"></div>
            <div className="footer-bottom-text">Help center</div>
          </div>
          <p className="copyright-text">2007-2024 Flipkart.com</p>
          <div className="payment-card-section">
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
            <img
              className="payment-card-icon"
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt="payment-card"
            />
          </div>
        </div>
      </div>
    </>
  );
}
