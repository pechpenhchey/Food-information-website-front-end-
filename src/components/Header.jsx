import React, { useState } from 'react';
import '../styles/style.css';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navigation-wrap">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img style={{ width: '125px', height: '100px' }} src={logo} alt="" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/advantages" className="nav-link">
                Advantages
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/category" className="nav-link">
                Category
              </Link>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center h-100">
            <div className='row d-flex justify-space-between'>
              <div className="col-md-8">
              </div>
              <div className='col-md-4'>
                <Link to="/login" className="nav-link">
                    <button className="main-btn">                     
                        <i className="fa-solid fa-user"></i>               
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
