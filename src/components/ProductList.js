// src/components/ProductList.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import products from '../data/products';

const StyledRow = styled(Row)`
  margin-top: 20px;
`;

const ProductList = () => {
  return (
    <StyledRow>
      {products.map(product => (
        <Col key={product.id} md={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </StyledRow>
  );
};

export default ProductList;
