// src/Pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductDetail from '../FrontEnd/components/productDetail';
import Header from '../FrontEnd/components/common/header'; 
import CustomNavbar from '../FrontEnd/components/common/navbar';
import Footer from '../FrontEnd/components/common/Footer';

const ProductPage = () => {
  const { id } = useParams();
  const selectedProduct = products.find(product => product.id === parseInt(id));

  return (
    <div>
      <Header />
      <CustomNavbar/>
      <ProductDetail product={selectedProduct} />
      <Footer />
    </div>
  );
};

export default ProductPage;
