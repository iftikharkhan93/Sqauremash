import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div className="main-content">
          <div className="left box">
            <div className="content">
              <div className="social">
                <a href="#">
                  <span className="fab fa-facebook-f"></span>
                </a>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
                <a href="#">
                  <span className="fab fa-instagram"></span>
                </a>
                <a href="#">
                  <span className="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="right box ">
            <div className="content">
              <div className="terms">
                <span className="text">Terms of Use</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Accessibilty Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
