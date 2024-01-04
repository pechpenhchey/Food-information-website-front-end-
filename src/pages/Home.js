import React, { useEffect } from 'react';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Recommend from '../components/Recommend';
import ExploreFood from '../components/ExploreFood';
import Footer from '../components/Footer';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <TopBanner />
      <Recommend />
      <ExploreFood />
      <Footer />
    </div>
  );
};

export default Home;