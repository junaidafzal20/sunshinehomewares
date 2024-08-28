import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/common/header'; 
import CustomNavbar from '../components/common/navbar';
import Footer from '../components/common/Footer';
import ProductList from '../components/ProductList';
import FilterSidebar from '../components/FilterSidebar';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Example of custom styled-component
const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

function Product() {
  return (
    <div className="App">
      <Header />
      <CustomNavbar/>

      <StyledContainer>
        <Row>
          <Col md={3}>
            <FilterSidebar />
          </Col>
          <Col md={9}>
            <ProductList />
          </Col>
        </Row>
      </StyledContainer>

      <Footer />
    </div>
  );
}

export default Product;
