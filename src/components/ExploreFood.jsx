import React, { useState, useEffect } from 'react';
import FoodCard from './Foodcard';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const ExploreFood = () => {
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const foodCollection = collection(db, 'food');
        const snapshot = await getDocs(foodCollection);

        const data = snapshot.docs.map((doc) => {
          const docData = doc.data();

          return {
            id: doc.id,
            foodname: docData.foodname,
            foodimage: docData.foodimage,
            rating: docData.rating,
            season: docData.season,
            categories: docData.categories,
            Description: docData.Description,
            ingredeint: docData.ingredeint,
          };
        });
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchFoodData();
  }, []);

  const handleExploreMore = () => {
    navigate('/category');
  };

  const handleCardClick = (foodData) => {
    navigate(`/foodinfo?foodId=${foodData.id}`, { state: { selectedFood: foodData } });
  };   

  return (
    <section id="explore-food">
      <div className="explore-food wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center">
                <h2>Explore Our <span>Foods</span></h2>
              </div>
            </div>
          </div>
          {/* Food Cards */}
          <div className="row">
          {foodData.slice(0, 6).map((food, index) => (
            <FoodCard
              key={index}
              imageUrl={food.foodimage}
              title={food.foodname}
              rating={food.rating}
              season={food.season}
              categories={food.categories}
              description={food.Description}
              ingredient={food.ingredeint}
              onClick={() => handleCardClick(food)}
            />
          ))}
          </div>
        </div>
        <div className="more-foods">
          <div className="container-fluid more-foods-text text-center pt-5">
            <div className="row">
              <div className="col-md-9">
              </div>
              <div className="col-md-3 pb-5">
                <button className="main-btn" onClick={handleExploreMore}>
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFood;
