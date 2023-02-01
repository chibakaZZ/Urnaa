import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsDownload } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footericons">
          <a target="_blank" href="https://facebook.com">
            <BsFacebook className="facebook" />
          </a>
        </div>
        <div></div>
      </div>
      <div className="footer2">
        <div className="footericons">
          <a target="_blank" href="https://www.instagram.com">
            <BsInstagram className="instagram" />
          </a>
        </div>
      </div>
      <div className="footer3">
        <div className="footericons">
          <a
            target="_blank"
            href="https://store.steampowered.com/about/?snr=1_4_4__global-header"
          >
            <BsDownload className="download" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
