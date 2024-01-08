import React, { useEffect, } from 'react';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import CategoryCom from '../components/CategoryCom';
import Footer from '../components/Footer';

const Categorypage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <TopBanner />
      <CategoryCom />
      <Footer />
    </div>
  );
};

export default Categorypage;