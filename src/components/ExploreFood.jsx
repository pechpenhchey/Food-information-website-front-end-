import React, { useState, useEffect } from 'react';
import FoodCard from './Foodcard';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const ExploreFood = () => {
  const [foodData, setFoodData] = useState([]);
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
  
          // Generate a seed based on the current timestamp
          const seed = new Date().getTime();
  
          // Shuffle the foodData array with the seed
          const shuffledData = shuffleArray(data, seed);
          setFoodData(shuffledData.slice(0, 9));
  
          // Scroll to the top of the page
          window.scrollTo({ top: 0, behavior: 'smooth' });
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
    navigate(`/foodinfo/${foodData.id}`);
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
            {foodData.map((food, index) => (
              <FoodCard
                key={index}
                imageUrl={food.foodimage}
                title={food.foodname}
                rating={food.rating}
                season={food.season}
                categories={food.categories}
                description={food.Description}
                ingredient={food.ingredeint}
                foodData={food}
                onClick={() => handleCardClick(food)}
              />
            ))}
          </div>
        </div>
        <div className="more-foods">
          <div className="container-fluid more-foods-text text-center pt-5">
            <div className="row">
              <div className="col-md-9"></div>
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

// Fisher-Yates (Knuth) shuffle algorithm with a seed
const shuffleArray = (array, seed) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    seed = (seed * 9301 + 49297) % 233280; // Use a simple pseudorandom algorithm
    randomIndex = Math.floor(seed / 233280 * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default ExploreFood;