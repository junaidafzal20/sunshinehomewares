import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../FrontEnd/components/common/header'; 
import CustomNavbar from '../FrontEnd/components/common/navbar';
import HeroHome from '../FrontEnd/components/HeroHome';
import PopularPicksSlider from '../FrontEnd/components/PopularPicksSlider';
import Tiles from '../FrontEnd/components/Tiles';
import InfoSection from '../FrontEnd/components/InfoSection';
import Footer from '../FrontEnd/components/common/Footer';
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
