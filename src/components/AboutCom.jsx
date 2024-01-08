import React, { useEffect } from 'react';
import '../styles/style.css';

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
                src={'https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977559-stock-illustration-hands-holding-word-about-us.jpg'} 
                className="card-img-top"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 text-sec">
            <h2 className='pt-2 text-center'>About <span>Us</span></h2>
            <p>
            Welcome to <span>HEALTHY FOOD</span> your ultimate destination for all things healthy and delicious! We are a passionate group of individuals dedicated to promoting a balanced and nutritious lifestyle through our project, and we proudly represent the collaborative efforts of the Royal University of Phnom Penh (RUPP) with the Department of Information Technology and Entrepreneurship (ITE).
            </p>
            <p>
            At <span>HEALTHY FOOD</span>, we are firm believers that good health starts with making mindful choices, and what better way to cultivate those choices than through the food we consume? Our mission is to empower individuals by providing them with a diverse collection of nutritious recipes, enabling them to make informed decisions about their nutrition. We strive to build a vibrant community that wholeheartedly embraces the advantages of maintaining a healthy and well-balanced diet.<br />

<br />Feel free to explore our website, where you'll find a wealth of delicious recipes crafted to support your journey towards a healthier lifestyle. Our commitment is to offer a variety of culinary options that not only tantalize your taste buds but also contribute to your overall well-being. Join us in this culinary adventure as we share the joy of cooking and savoring meals that nourish both the body and the soul.<br />

<br />Thank you for being a part of our community!

<br />@<span>HEALTHY FOOD</span> Team 12             
            </p>
          </div>
        </div>
      </div>

      {/* Contact us */}
      <div> 
        <h2 className='pt-5 text-center'>Contact <span>Us</span></h2>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row " >
              <div className="col-lg-4 col-md-4 col-sm-6 overflow-hidden ">
                <div className="card-body d-flex align-items-center ">
                  <div className="me-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="Icon 1" />
                  </div>
                  <div className='ps-5 pe-0'>
                    <h6 className="font-weight-medium"><span>Address</span></h6>
                    <p>RUPP<br />ITE G8</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 overflow-hidden">
                <div className="card-body d-flex align-items-center ">
                  <div className="me-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="Icon 2" />
                  </div>
                  <div className='ps-5 pe-0'>
                    <h6 className="fw-medium"><span>Phone</span></h6>
                    <p>011 548073<br />088 9646724<br />069 486059</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center ">
                  <div className="me-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="Icon 3" />
                  </div>
                  <div className='ps-5 pe-0'>
                    <h6 className="font-weight-medium"><span>Email</span></h6>
                    <p >
                      <p className='m-0 text-break'>soeurm.ravit.2821@rupp.edu.kh</p>
                      <p className='m-0 text-break'>sao.pongpechpenhchey.2821@rupp.edu.kh</p>
                      <p className='m-0 text-break'>sun.sengheang.2821@rupp.edu.kh</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
