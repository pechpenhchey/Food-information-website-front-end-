import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const FoodCard = ({ imageUrl, title, rating, categories, foodData }) => {

  return (
    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5" style={{backgroundColor:"rgb(245,245,245)"}}>
      <div className="card py-5">
        <img src={imageUrl} className="img-fluid" alt={title} />
        <div className="row pt-5">
          <div className="col-md-8">
            <h3>{title}</h3>
            <h5 className='pt-3'>Province: {categories.join(', ')}</h5>
          </div>
          <div className="col-md-4">
            <button className="btn btn-success">{rating} &#9733;</button>
          </div>
        </div>
        <div>
          <Link to={`/foodinfo/${foodData.id}`} target="_blank" rel="noopener noreferrer" className="nav-link">
            <button className="mt-5 main-btn">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
