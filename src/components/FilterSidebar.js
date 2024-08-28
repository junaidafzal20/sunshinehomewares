// src/components/FilterSidebar.js
import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Sidebar = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
`;

const FilterTitle = styled.h4`
  margin-bottom: 20px;
  font-weight: 600;
`;

const FilterSidebar = () => {
  return (
    <Sidebar>
      <FilterTitle>Filter by</FilterTitle>
      <Form.Group controlId="priceRange">
        <Form.Label>Price</Form.Label>
        <Form.Range />
        <div className="d-flex justify-content-between">
          <span>AU$1.80</span>
          <span>AU$34.50</span>
        </div>
      </Form.Group>
      <Form.Group controlId="color" className="mt-4">
        <Form.Label>Color</Form.Label>
        <Form.Control as="select">
          <option>All</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </Form.Control>
      </Form.Group>
      {/* Add more filters as needed */}
    </Sidebar>
  );
};

export default FilterSidebar;
