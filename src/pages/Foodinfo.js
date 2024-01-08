import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Foodcom from '../components/Foodcom';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../firebase-config';
import Related from '../components/Related';

const Foodinfo = () => {
  const { foodId } = useParams();
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodDocRef = doc(db, 'food', foodId);
        const foodDocSnapshot = await getDoc(foodDocRef);

        if (foodDocSnapshot.exists()) {
          const data = foodDocSnapshot.data();
          setSelectedFood(data);
        } else {
          console.error(`Document with ID ${foodId} does not exist.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [foodId]);

  return (
    <div>
      <Header />
      <TopBanner />
      <Foodcom selectedFood={selectedFood} />
      <Related currentFoodId={foodId} />
      <Footer />
    </div>
  );
};

export default Foodinfo;
