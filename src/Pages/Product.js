import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../FrontEnd/components/common/header'; 
import CustomNavbar from '../FrontEnd/components/common/navbar';
import Footer from '../FrontEnd/components/common/Footer';
import ProductList from '../FrontEnd/components/ProductList';
import FilterSidebar from '../FrontEnd/components/FilterSidebar';
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
