import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

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

const StyledNavLink = styled(Nav.Link)`
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: #c76e6e;
  }
`;

function CustomNavbar() {
  return (
    <StyledNavbar expand="lg" variant="light">
      <StyledContainer fluid>
        <StyledNav>
          <StyledNavLink href="#all-products">All Products</StyledNavLink>
          <StyledNavLink href="#about-us">About Us</StyledNavLink>
          <StyledNavLink href="#why-choose-us">Why Choose Us</StyledNavLink>
          <StyledNavLink href="#contact-us">Contact Us</StyledNavLink>
        </StyledNav>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default CustomNavbar;
