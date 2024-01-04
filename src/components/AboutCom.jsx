import React, { useEffect } from 'react';
import '../styles/style.css';
import aboutImg from '../assets/images/about-us.png';

const AboutCom = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <section className="about-section pb-5">
      <div className="container" style={{ paddingTop: '150px' }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img
                src={aboutImg} 
                className="card-img-top"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 text-sec">
            <h2 className='pt-2 text-center'>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
