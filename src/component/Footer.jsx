import React from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-cont" id={"section1"}>
      <div className="footer-filed">
        <div className="icons">
          <a
            className="media-icons"
            href="https://www.linkedin.com/in/sahil-malik-9708a41aa/"
            target="_blank"
          >
            <span>
              <FaLinkedinIn />
            </span>
          </a>
          <a
            className="media-icons"
            href="mailto:maliksahil2000@gmail.com"
            target="_blank"
          >
            <span>
              <FiMail />
            </span>
          </a>
          <a className="media-icons" href="tel:8901151194">
            <span>
              <FiPhone />
            </span>
          </a>
        </div>
      </div>
      <div className="footer-detils">
        <p>©2021-2023 TV MAZE, Inc.</p>
        <p>Handcrafted by Sahil</p>
      </div>
    </div>
  );
}

export default Footer;
