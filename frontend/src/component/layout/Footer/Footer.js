import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Ecommerce.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="#00">Instagram</a>
        <a href="#00">LinkedIn</a>
        <a href="#00">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
