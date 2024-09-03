// src/components/FilterSidebar.js
import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const Sidebar = styled.div`
  padding: 20px;
  background-color: #fff;
  border-right: 1px solid #ddd;
  width: 250px;
  box-sizing: border-box; /* Ensures padding and border are included in width */
`;

const FilterTitle = styled.h4`
  font-family: "Poppins-SemiBold", "Poppins", sans-serif;
  font-size: 24px;
  letter-spacing: 6px;
  line-height: 28.8px;
  text-decoration: none solid rgb(17, 17, 17);
  text-align: center;
  margin-bottom: 1rem;
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
