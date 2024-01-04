import React, { useEffect } from 'react';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Foodcom from '../components/Foodcom';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Foodinfo = ({ selectedFood, setSelectedFood }) => {
  const { foodId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state && location.state.selectedFood) {
      setSelectedFood(location.state.selectedFood);
    }
  }, [location, setSelectedFood]);

  return (
    <div>
      <Header />
      <TopBanner />
      <Foodcom selectedFood={location.state && location.state.selectedFood} />
      <Footer />
    </div>
  );
};

export default Foodinfo;
