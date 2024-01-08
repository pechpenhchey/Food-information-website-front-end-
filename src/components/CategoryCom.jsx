import React, { useEffect, useState } from 'react';
import FoodCard from './Foodcard';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { getDocs, collection, where, query, orderBy } from 'firebase/firestore';
import '../styles/style.css';

const Category = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastClickedIndex, setLastClickedIndex] = useState(-1); // Added state variable
  const navigate = useNavigate();

  const [selectedProvince, setSelectedProvince] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedCategoryText, setSelectedCategoryText] = useState('All'); // Added state variable for selected category text

  useEffect(() => {
    fetchFoodData();
  }, []);

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
          ingredeint: docData.ingredeint,
        };
      });

      setFoodData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleCardClick = (foodData) => {
    navigate(`/foodinfo/${foodData.id}`);
  };

  const filterData = async (filterType, filterValue) => {
    try {
      const foodCollection = collection(db, 'food');
      let q;

      if (filterType === 'season') {
        q = query(foodCollection, where('season', 'array-contains-any', [filterValue.toLowerCase()]), orderBy('rating', 'desc'));
      } else if (filterType === 'province') {
        if (filterValue === 'All') {
          q = query(foodCollection, orderBy('rating', 'desc'));
        } else {
          q = query(foodCollection, where('categories', 'array-contains', filterValue), orderBy('rating', 'desc'));
        }
      }

      if (q) {
        const snapshot = await getDocs(q);

        const filteredData = snapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            foodname: docData.foodname,
            foodimage: docData.foodimage,
            rating: docData.rating,
            season: docData.season,
            categories: docData.categories,
            ingredeint: docData.ingredeint,
          };
        });

        setFoodData(filteredData);
      }
    } catch (error) {
      console.error('Error filtering data:', error);
    }
  };

  const handleSeasonClick = (season, index) => {
    filterData('season', season.toLowerCase());
    setSelectedSeason(season.toLowerCase());
    setLastClickedIndex(index);
    setSelectedCategoryText(`${season}`); // Set the selected category text
  };

  const handleProvinceClick = (province, index) => {
    filterData('province', province);
    setSelectedProvince(province);
    setLastClickedIndex(index);
    setSelectedCategoryText(`${province}`); // Set the selected category text
  };

  const handleHover = (index) => {
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((item, i) => {
      if (i === index || i === lastClickedIndex) {
        item.classList.add('hovered');
      } else {
        item.classList.remove('hovered');
      }
    });
  };

  return (
    <div className="category explore-food">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3 py-5">
            <h2>Category filter:</h2>
            <div className="list-group pb-3">
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'All' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('All', -1)}
                onMouseEnter={() => handleHover(-1)}
              >
                All
              </button>
            </div>
            <h4>By Season:</h4>
            <div className="list-group py-3">
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedSeason === 'rainy' ? 'hovered' : ''}`}
                onClick={() => handleSeasonClick('rainy', 0)}
                onMouseEnter={() => handleHover(0)}
              >
                Rainy
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedSeason === 'dry' ? 'hovered' : ''}`}
                onClick={() => handleSeasonClick('dry', 1)}
                onMouseEnter={() => handleHover(1)}
              >
                Dry
              </button>
              <h4 className="py-3">By provinces:</h4>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Phnom Penh' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Phnom Penh', 2)}
                onMouseEnter={() => handleHover(2)}
              >
                Phnom Penh
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Siem Reab' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Siem Reab', 3)}
                onMouseEnter={() => handleHover(3)}
              >
                Siem Reap
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kondal' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kandal', 4)}
                onMouseEnter={() => handleHover(4)}
              >
                Kandal
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Preah Sihanouk' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Preah Sihanouk', 5)}
                onMouseEnter={() => handleHover(5)}
              >
                Preah Sihanouk
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Koh Kong' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Koh Kong', 6)}
                onMouseEnter={() => handleHover(6)}
              >
                Koh Kong
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Battambang' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Battambang', 7)}
                onMouseEnter={() => handleHover(7)}
              >
                Battambang
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kompot' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kompot', 8)}
                onMouseEnter={() => handleHover(8)}
              >
                Kompot
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Banteay Meanchey' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Banteay Meanchey', 9)}
                onMouseEnter={() => handleHover(9)}
              >
                Banteay Meanchey
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kampong Cham' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kampong Cham', 10)}
                onMouseEnter={() => handleHover(10)}
              >
                Kampong Cham
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kampong Chhnang' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kampong Chhnang ', 11)}
                onMouseEnter={() => handleHover(12)}
              >
                Kampong Chhnang 
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kampong Thom' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kampong Speu ', 12)}
                onMouseEnter={() => handleHover(12)}
              >
                Kampong Thom
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kampong Thom' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kampong Thom', 13)}
                onMouseEnter={() => handleHover(13)}
              >
                Kampong Thom
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Takeo' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Takeo', 14)}
                onMouseEnter={() => handleHover(14)}
              >
                Takeo
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Krajes' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Krajes', 15)}
                onMouseEnter={() => handleHover(15)}
              >
                Krajes
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Mondulkiri' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Mondulkiri', 16)}
                onMouseEnter={() => handleHover(16)}
              >
                Mondulkiri
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Oddar Meanchey' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Oddar Meanchey', 17)}
                onMouseEnter={() => handleHover(17)}
              >
                Oddar Meanchey
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Pailin' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Pailin', 18)}
                onMouseEnter={() => handleHover(18)}
              >
                Pailin
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Preah Vihear' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Preah Vihear', 19)}
                onMouseEnter={() => handleHover(19)}
              >
                Preah Vihear 
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Pursat' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Pursat', 20)}
                onMouseEnter={() => handleHover(20)}
              >
                Pursat
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Prey Veng' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Prey Veng', 21)}
                onMouseEnter={() => handleHover(21)}
              >
                Prey Veng
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Ratanakiri' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Ratanakiri', 22)}
                onMouseEnter={() => handleHover(22)}
              >
                Ratanakiri
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Stueng Treng' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Stueng Treng', 23)}
                onMouseEnter={() => handleHover(23)}
              >
                Stueng Treng
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Svay Rieng' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Svay Rieng', 24)}
                onMouseEnter={() => handleHover(24)}
              >
                Svay Rieng
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Kep' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Kep', 25)}
                onMouseEnter={() => handleHover(25)}
              >
                Kep
              </button>
              <button
                type="button"
                className={`list-group-item list-group-item-action cate1 ${selectedProvince === 'Tboung Khmum' ? 'hovered' : ''}`}
                onClick={() => handleProvinceClick('Tboung Khmum', 26)}
                onMouseEnter={() => handleHover(26)}
              >
                Tboung Khmum
              </button>
            </div>
          </div>

          <div className="col-md-9">
            <h3 className="text-center"style={{paddingTop:'65px'}}>This is the category of <span className='colorcate'>{selectedCategoryText}</span></h3>
            <div className="row" style={{ paddingTop: '50px' }}>
              {loading ? (
                <div className="loading-spinner" style={{ fontSize: '50px', color:"green" }}><img style={{width : '100%'}} src="https://i.pinimg.com/originals/92/62/d7/9262d7f1dae810ffe0fa5431d9c187bf.gif" alt="" /></div>
              ) : foodData.length === 0 ? (
                <h1 className='text-center' style={{paddingTop:"350px"}}>There is no food in this category yet.</h1>
              ) : (
                foodData.map((food, index) => (
                  <FoodCard
                    key={index}
                    imageUrl={food.foodimage}
                    title={food.foodname}
                    rating={food.rating}
                    categories={food.categories}
                    season={food.season}
                    foodData={food}
                    onClick={() => handleCardClick(food)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
