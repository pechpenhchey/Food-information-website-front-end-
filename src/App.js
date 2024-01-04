import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Foodinfo from './pages/Foodinfo';

const App = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodSelection = (foodData, navigate) => {
    setSelectedFood(foodData);
  
    // Use the correct path with the foodId parameter
    const foodId = foodData.id;
    navigate(`/foodinfo/${foodId}`, { state: { selectedFood: foodData } });
  };  

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        />
        <Route
          path="/category"
          element={<Category />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/:foodId"
          element={<Foodinfo selectedFood={selectedFood} setSelectedFood={setSelectedFood} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
