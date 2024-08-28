// src/components/CustomLink.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: #000;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #c76e6e;
  }
`;

const CustomLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default CustomLink;
