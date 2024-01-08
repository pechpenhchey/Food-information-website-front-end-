import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getDocs, query, where, collection, orderBy, limit, or } from '@firebase/firestore';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Foodinfo from './pages/Foodinfo';
import SearchPage from './pages/SearchPage';
import TopBanner from './components/TopBanner';
import { db } from './firebase-config';
import Advantages from './pages/AdvantagesPage';

const App = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleFoodSelection = (foodId, navigate) => {
    console.log('Result clicked:', foodId);
    setSelectedFood(foodId);
    navigate(`/foodinfo/${foodId}`);
  };

  const handleSearch = async (query, navigate) => {
    console.log("Search button clicked");

    try {
      const foodsCollection = collection(db, 'your_collection');

      const q1 = query(foodsCollection, where('foodname', '>=', query.toLowerCase()), orderBy('foodname'), limit(10));
      const q2 = query(foodsCollection, where('categories', 'array-contains', query.toLowerCase()), orderBy('foodname'), limit(10));
      const q3 = query(foodsCollection, where('season', '==', query.toLowerCase()), orderBy('foodname'), limit(10));
      const q4 = query(foodsCollection, where('id', '==', query.toLowerCase()), orderBy('foodname'), limit(10));

      const querySnapshot1 = await getDocs(q1);
      const querySnapshot2 = await getDocs(q2);
      const querySnapshot3 = await getDocs(q3);
      const querySnapshot4 = await getDocs(q4);

      const results = [
        ...querySnapshot1.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        ...querySnapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        ...querySnapshot3.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        ...querySnapshot4.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      ];

      console.log(results);
      setSearchResults(results);
      navigate('/search-results');
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route
          path="/foodinfo/:foodId"
          element={<Foodinfo selectedFood={selectedFood} />}
        />
        <Route
          path="/search"
          element={<TopBanner onSearch={(query) => handleSearch(query, Navigate)} />}
        />
        <Route
          path="/search-results"
          element={<SearchPage searchResults={searchResults} handleResultClick={handleFoodSelection} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
