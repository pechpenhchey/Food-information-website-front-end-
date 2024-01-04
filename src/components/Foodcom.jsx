import React from 'react';

const Foodcom = ({ selectedFood }) => {

  const defaultSelectedFood = {
    foodimage: '',
    foodname: '',
    ingredeint: [],
    rating: 0,
    Description: '',
    season: '',
    categories: [],
  };

  const { foodimage, foodname, ingredeint, rating, Description, season, categories } = selectedFood || defaultSelectedFood;
  
  return (
    <>
      <section className="pt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card p-3" style={{ width: '100%' }}>
                <img src={foodimage} className="card-img-top" alt="foodimage" />
                <div className="card-body">
                  <h5 className="card-title">{foodname}</h5>
                  <p className="card-text">{Description}</p>

                  <div className="rating">
                    <span>{rating}</span>
                    <i className="fas fa-star"></i>
                  </div>
        
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h3 className="text-center pt-1 pb-3">Ingredient</h3>
              <div className="pb-3">
                <ul className="px-5">
          
                  {ingredeint &&
                    ingredeint.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Foodcom;
