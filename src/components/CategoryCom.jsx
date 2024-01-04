import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const foodCollection = collection(db, 'food');
        const snapshot = await getDocs(foodCollection);

        const data = snapshot.docs.map((doc) => {
          const docData = doc.data();

          return {
            imageUrl: docData.foodimage,
            title: docData.foodname,
            rating: docData.rating,
          };
        });

        setFoodData(data);
      } catch (error) {
        console.error('Error fetching food data from Firestore:', error);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <div className="category">
             <div className="container">
          <h3 className="productTitle text-center pt-5"></h3>
          <div className="row py-5">
            <div className="col-md-3 py-5">
              <h2 className="pb-3">Category filter:</h2>
              <h4>By Season:</h4>
              <div className="list-group py-3">
                <button type="button" className="list-group-item list-group-item-action cate1" aria-current="true">
                  Rainy
                </button>
                <button type="button" className="list-group-item list-group-item-action cate1" aria-current="true">
                  Dry
                </button>
                <h4 className="py-3">By provinces:</h4>
                <button type="button" className="list-group-item list-group-item-action cate1">Phnom Penh</button>
                <button type="button" className="list-group-item list-group-item-action cate1">Siem Reab</button>
                <button type="button" className="list-group-item list-group-item-action cate1">Kondal</button>
                <button type="button" className="list-group-item list-group-item-action cate1">Sihanouk</button>
                <button type="button" className="list-group-item list-group-item-action cate1">Koh Kong</button>
                <button type="button" className="list-group-item list-group-item-action cate1">Battambang</button>
              </div>
            </div>

            <div className="col-md-9">
        <div className="row" style={{ paddingTop: '50px' }}>
          {foodData.map((food, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-lg-0 mb-5 pt-4">
              <div>
                <img
                  src={food.imageUrl}
                  className="img-fluid"
                  alt={food.title}
                  style={{ height: '200px',  width: '100%' }}
                />
                <div className="row pt-5">
                  <div className="col-md-8">
                    <h4>{food.title}</h4>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-success">{food.rating} &#9733;</button>
                  </div>
                </div>
                <div>
                  <a href="food.html">
                    <button className="mt-5 main-btn">Check Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default Category;