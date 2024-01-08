import React, { useEffect, useState } from 'react';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import FoodCard from './Foodcard';

const Related = ({ currentFoodId }) => {
  const [relatedFoods, setRelatedFoods] = useState([]);

  useEffect(() => {
    const fetchRelatedFoods = async () => {
      try {
        const currentFoodRef = doc(db, 'food', currentFoodId);
        const currentFoodSnapshot = await getDoc(currentFoodRef);

        if (currentFoodSnapshot.exists()) {
          const currentFoodCategories = currentFoodSnapshot.data().categories;

          // Check if currentFoodCategories is not empty
          if (currentFoodCategories.length > 0) {
            const foodCollection = collection(db, 'food');
            const categoryQuery = query(foodCollection, where('categories', 'array-contains', currentFoodCategories[0]));

            const querySnapshot = await getDocs(categoryQuery);
            const foods = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            console.log('Fetched related foods:', foods); // Log fetched data

            // Shuffle the array to randomize the order
            const shuffledFoods = shuffleArray(foods);

            // Take the first 3 elements
            const randomRelatedFoods = shuffledFoods.slice(0, 3);

            setRelatedFoods(randomRelatedFoods);
          } else {
            console.error(`Categories array is empty for food with ID ${currentFoodId}.`);
          }
        } else {
          console.error(`Document with ID ${currentFoodId} does not exist.`);
        }
      } catch (error) {
        console.error('Error fetching related foods:', error);
      }
    };

    // Function to shuffle an array
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    fetchRelatedFoods();
  }, [currentFoodId]);

  return (
    <div>
      <h3 className='text-center pt-5'style={{fontSize:'30px'}}>Related Foods</h3>
      <div className="row explore-food">
        {relatedFoods.map((food) => (
          <FoodCard
            key={food.id}
            imageUrl={food.foodimage}
            title={food.foodname}
            rating={food.rating}
            categories={food.categories}
            foodData={food}
          />
        ))}
      </div>
    </div>
  );
};

export default Related;
