import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../FrontEnd/components/common/header'; 
import CustomNavbar from '../FrontEnd/components/common/navbar';
import CartItems from '../FrontEnd/cart';
import Footer from '../FrontEnd/components/common/Footer';
function Cart() {
  return (
    <div className="App">
      <Header />
      <CustomNavbar/>
      <CartItems/>
      <Footer />
    </div>
  );
}

export default Cart;
