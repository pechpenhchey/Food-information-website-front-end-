import '../styles/style.css';
import React from 'react';

const Recommend = () => {
  return (
    <section id="recommend">
      <div className="recommend-section">
        <div className="container">
          <div className="row text-center">
            <h2>Popular <span>Foods</span></h2>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <img src="" alt="" />
              <p className="drop-in-2">title</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <img src="" alt="" />
              <p className="drop-in-2">title</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <img src="" alt="" />
              <p className="drop-in-2">title</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <img src="" alt="" />
              <p className="drop-in-2">title</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
