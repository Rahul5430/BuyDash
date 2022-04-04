import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Ontario</li>
              <li>Chicago</li>
              <li>San Diego</li>
              <li>Los Angeles</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About BuyDash Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>BuyDashPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>BuyDash</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries England - South Africa - India</p>
        <p>Free Classifieds in US. © 2006-2022 BuyDash</p>
      </div>
    </div>
  );
}

export default Footer;
