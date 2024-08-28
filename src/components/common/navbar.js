import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';
import CustomLink from './customLink';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: transparent;
  padding: 0.5rem 1rem;
`;

const StyledContainer = styled(Container)`
  justify-content: center;
  padding: 0 10%;
`;

const StyledNav = styled(Nav)`
  display: flex;
  gap: 6rem;
  margin: 0 auto;
`;


function CustomNavbar() {
  return (
    <StyledNavbar expand="lg" variant="light">
      <StyledContainer fluid>
        <StyledNav>
        <CustomLink to="/product">All Products</CustomLink>
        <CustomLink to="/">About Us</CustomLink>
        <CustomLink to="/">Why Choose Us</CustomLink>
        <CustomLink to="/">Contact Us</CustomLink>
        </StyledNav>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default CustomNavbar;

