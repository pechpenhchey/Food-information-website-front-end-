import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase-config';
import { getDocs, collection, query, orderBy, limit, where } from 'firebase/firestore';
import '../styles/style.css';

const Recommend = () => {
  const [recommendedFood, setRecommendedFood] = useState([]);

  useEffect(() => {
    const fetchRecommendedFood = async () => {
      try {
        const foodCollection = collection(db, 'food');
        const randomRating = (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1);
  
        const q = query(
          foodCollection,
          where('rating', '>=', parseFloat(randomRating)),
          orderBy('rating', 'desc'),
          limit(4)
        );
  
        const snapshot = await getDocs(q);
  
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          foodname: doc.data().foodname,
          foodimage: doc.data().foodimage,
          rating: doc.data().rating,
        }));
  
        while (data.length < 4) {
          const additionalSnapshot = await getDocs(query(
            foodCollection,
            orderBy('rating', 'desc'),
            limit(4 - data.length)
          ));
  
          const additionalData = additionalSnapshot.docs.map((doc) => ({
            id: doc.id,
            foodname: doc.data().foodname,
            foodimage: doc.data().foodimage,
            rating: doc.data().rating,
          }));
  
          data.push(...additionalData);
        }
  
        setRecommendedFood(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching recommended food:', error);
      }
    };
  
    fetchRecommendedFood();
  }, []);

  return (
    <section id="recommend">
      <div className="recommend-section">
        <div className="container pt-5">
          <div className="row text-center">
          <h2>Popular<span> Foods</span></h2>
            {recommendedFood.map((food) => (
              <div key={food.id} className="col-md-3 mb-lg-0 mb-md-0 mb-5">
                <Link to={`/foodinfo/${food.id}`} target="_blank" rel="noopener noreferrer" className="food-link">
                  <img src={food.foodimage} alt={food.foodname} />
                  </Link>
                  <p className="drop-in-2 colorprime"><b>{food.foodname}</b></p>
                  <p className="drop-in-2 colorsec"><b>Rating: {food.rating}</b></p>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
