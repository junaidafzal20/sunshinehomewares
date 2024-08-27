import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/common/header'; 
import CustomNavbar from '../components/common/navbar';
import Footer from '../components/common/Footer';
function Product() {
  return (
    <div className="App">
      <Header />
      <CustomNavbar/>
      <Footer />
    </div>
  );
}

export default Product;
