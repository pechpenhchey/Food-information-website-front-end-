import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ imageUrl, title, ingredient, rating, description, onClick }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
      <div className="card py-5">
        <img src={imageUrl} className="img-fluid" alt={title} />
        <div className="row pt-5">
          <div className="col-md-8">
            <h3>{title}</h3>
          </div>
          <div className="col-md-4">
            <button className="btn btn-success">{rating} &#9733;</button>
          </div>
        </div>
        <div>
          <Link to={{ pathname: "/foodinfo", state: { selectedFood: { title, ingredient, rating, description } } }} className="nav-link">
            <button className="mt-5 main-btn" onClick={() => onClick({ title, ingredient, rating, description })}>
              Check Now
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;
