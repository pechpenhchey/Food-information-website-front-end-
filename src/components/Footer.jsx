import React from 'react';
import '../styles/style.css';

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-auto mx-auto">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="sicon fa-brands fa-facebook pt-5 mx-3"></i></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="sicon fa-brands fa-instagram mx-3"></i></a>

          </div>
          <div className="col-sm-12">
            <div className="footer-copy">
              <div className="copy-right text-center pt-5">
                <p className="text-light"><b>@HFOOD</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
