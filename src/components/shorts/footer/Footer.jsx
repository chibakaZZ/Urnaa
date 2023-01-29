import React from 'react';
import "./Footer.css";
import { BsFacebook, BsInstagram, BsDownload } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='footericons'>
          <BsFacebook className='facebook'/>
        </div>
        <div></div>
      </div>
      <div className='footer2'>
        <div className='footericons'>
          <BsInstagram className='instagram'/>
        </div>
      </div>
      <div className='footer3'>
        <div className='footericons'>
          <BsDownload className='download'/>
        </div>
      </div>
    </div>
  )
}

export default Footer;