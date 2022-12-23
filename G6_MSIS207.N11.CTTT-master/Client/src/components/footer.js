import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="follow-container">
        <div className="footer-info">
          <div className="intro-shop">
            <div className="intro-name">Introduction Hirito Figure Shop</div>
            <div className="intro-desc">
              Helping young Vietnamese people easily access Japanese figure
              models
            </div>
          </div>

          <div className="intro-shop">
            <div className="intro-name">Contact Us</div>

            <div className="intro-desc">
              <span className="intro-tat">Address: </span>01 Hoang Ba Dat, Tan
              Son Distric, Thanh Hoa City
            </div>
            <div className="intro-desc">
              <span className="intro-tat">Phone: </span>0352665487
            </div>
            <div className="intro-desc">
              <span className="intro-tat">Email: </span>hiihiii1412@gmail.com
            </div>
          </div>

          <div className="intro-shop">
            <div className="intro-name">Time in Work</div>
            <div className="intro-desc">
              <span className="intro-tat">Morning: </span>7AM to 11.30AM
            </div>
            <div className="intro-desc">
              <span className="intro-tat">Afternoon: </span>1PM to 5PM
            </div>
            <div className="intro-desc">
              <span className="intro-tat">Notification: </span>If you contact us
              in other time, we won't answer !
            </div>
          </div>

          <div className="intro-shop">
            <div className="intro-name">Customer Care</div>
            <div className="phone-contact">
              <FaPhoneAlt className="icon-phone" />

              <div className="info-shop">
                <div>0352665487</div>
                <div>hiihiii1412@gmail.com</div>
              </div>
            </div>
            <div className="fig-page">
              <div>Follow Our Page Now :</div>
              <div className="icon-page">
                <FaFacebook className="icon-phone" />
                <FaInstagramSquare className="icon-phone" />
                <FaTwitter className="icon-phone" />
                <FaGithub className="icon-phone" />
                <FaYoutube className="icon-phone" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-shop-name">
          Copyright © 2022 Hirito Figure Shop | Power by trunghi1412
        </div>
      </div>
    </div>
  );
};

export default Footer;
