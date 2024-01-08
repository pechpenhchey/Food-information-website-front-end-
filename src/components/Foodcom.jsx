import React, { useEffect } from 'react';
import Share from './Share';
import '../styles/style.css';

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
  useEffect(() => {
    // Set Open Graph meta tags dynamically when the component mounts
    const ogTitle = selectedFood ? selectedFood.foodname : 'Default Title';
    const ogImage = selectedFood ? selectedFood.foodimage : 'Default Image URL';
    const ogDescription = selectedFood ? selectedFood.Description : 'Default Description';

    const setMetaTags = () => {
      document.title = ogTitle;

      const metaTags = document.head.querySelectorAll('meta[property^="og:"]');
      metaTags.forEach((tag) => {
        document.head.removeChild(tag);
      });

      const createMetaTag = (property, content) => {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.content = content;
        document.head.appendChild(metaTag);
      };

      createMetaTag('og:title', ogTitle);
      createMetaTag('og:image', ogImage);
      createMetaTag('og:description', ogDescription);
      createMetaTag('og:url', window.location.href);
    };

    setMetaTags();
  }, [selectedFood]);

  return (
    <>
      <section className="pt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h3 className='text-center'>Food Details</h3>
              <div className="card p-3" style={{ width: '100%' }}>
                <img src={foodimage} className="card-img-top" style={{height: '500px'}} alt="foodimage" />
                <div className="card-body">
                  <h5 className="card-title colorprime pt-3"><b>{foodname}</b></h5>
                  <p className="card-text">{Description}</p>
                  <p className="card-text">
                    <span><b>From: </b></span>
                    {categories && categories.length > 0 ? categories.join(', ') : 'No categories available'}
                  </p>
                  <p className="card-text">
                    <span><b>Season: </b></span>
                    {season && season.length > 0 ? season.join(', ') : 'No season information available'}
                  </p>
                  <div className="rating">
                    <button className="btn btn-success">{rating} &#9733;</button>
                  </div>
                  <div className="py-3">
                    {/* Share Button */}
                    <Share description={Description} />
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
