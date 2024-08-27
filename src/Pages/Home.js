import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/common/header'; 
import CustomNavbar from '../components/common/navbar';
import HeroHome from '../components/HeroHome';
import PopularPicksSlider from '../components/PopularPicksSlider';
import Tiles from '../components/Tiles';
import InfoSection from '../components/InfoSection';
import Footer from '../components/common/Footer';
function Home() {
  return (
    <div className="App">
      <Header />
      <CustomNavbar/>
      <HeroHome/>
      <PopularPicksSlider />
      <Tiles />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default Home;
