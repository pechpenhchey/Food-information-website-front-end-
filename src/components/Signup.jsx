import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/images/loginimg.jpg';

const Signup = () => {
  
  return (
    <div className="login-page bg-light">
      <div className="container pb-5" style={{ paddingTop: '200px' }}>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h4 className="mb-3">Signup Now</h4>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form action="" className="row g-4">
                      <div className="col-12">
                        <label>Username<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="fa-regular fa-user"></i></div>
                          <input type="text" className="form-control" placeholder="Enter Username" />
                        </div>
                      </div>

                      <div className="col-12">
                        <label>Password<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="fa-solid fa-lock"></i></div>
                          <input type="text" className="form-control" placeholder="Enter Password" />
                        </div>
                      </div>
                      <div className="col-12">
                        <label>Confirm Password<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="fa-solid fa-lock"></i></div>
                          <input type="text" className="form-control" placeholder="Enter Password" />
                        </div>
                      </div>
                      <div>
                        <Link to="/login" className="float-end text-primary"><span>Already have an account? Login</span></Link>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="main-btn px-4 float-end mt-4">Singup</button>
                      </div>
                      
                    </form>
                  </div>
                </div>
                <div className="col-md-5 ps-0 d-none d-md-block">
                  <div className="form-right h-100 text-white text-center pt-5">
                    <img
                        src={loginImg} 
                        className="card-img-top"
                        alt="About Us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;