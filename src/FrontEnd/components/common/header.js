import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { BsSearch, BsPerson, BsList, BsX } from "react-icons/bs";
import styled from "styled-components";
import CustomLink from "./customLink";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: transparent;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  position: relative;
  margin-bottom: 20px;
`;

const SearchIcon = styled(BsSearch)`
  margin-right: 10px;
  color: ${({ color }) => color};
  transition: color 0.3s ease;
`;

const StyledFormControl = styled(FormControl)`
  border: none;
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  padding-left: 0;
  align-items: center;
  width: 100%;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ width }) => width};
  border-bottom: 2px solid ${({ color }) => color};
  transition: width 0.3s ease;
`;

const Logo = styled.img`
  height: 95px;
`;

const OffcanvasContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CenteredButton = styled(Button)`
  color: #c76e6e;
  border: none;
  background: transparent;
  font-size: 25px;
  padding: 0;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #a65d5d;
  }
`;

const OffcanvasTitle = styled(Offcanvas.Title)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  color: #a65d5d !important;
  border: none !important;
  background: transparent !important;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  &:hover {
    color: #a65d5d !important;
    text-decoration: none !important;
  }
  &:focus,
  &:active {
    color: #a65d5d !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const PersonIcon = styled(BsPerson)`
  margin-right: 10px;
  color: #a65d5d;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* Adjust the spacing between buttons as needed */
`;

// Styled Offcanvas Component
const FullHeightOffcanvas = styled(Offcanvas)`
  height: 100vh !important;
  .offcanvas-body {
    padding: 0 !important; /* Remove padding if needed */
  }
`;

// New styled wrapper for off-canvas links
const OffcanvasNav = styled(Nav)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const OffcanvasLink = styled(CustomLink)`
  color: #c76e6e;
  font-size: 30px; /* Adjust text size as needed */
  font-weight: bold;
  text-decoration: none;
  margin: 30px 0; /* Add margin to space links vertically */
  &:hover {
    color: #a65d5d;
  }
`;

// Styled search bar component
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    display: none;
  }
`;

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <StyledNavbar expand="lg">
        <StyledContainer fluid>
          {/* Left Section: Navbar Toggle */}
          {/* Center Section: Search Bar (large screens only) */}
          <SearchBar>
            <StyledForm>
              <SearchIcon color="#a65d5d" />
              <StyledFormControl placeholder="Search" aria-label="Search" />
              <Underline width="100%" color="#a65d5d" />
            </StyledForm>
          </SearchBar>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShowOffcanvas(!showOffcanvas)}
            className="d-lg-none"
          >
            {showOffcanvas ? <BsX /> : <BsList />}
          </Navbar.Toggle>

          {/* Center Section: Logo */}
          <Navbar.Brand
            href="#home"
            className="mx-auto"
            style={{ flex: "2", textAlign: "center" }}
          >
            <Logo
              src={`${process.env.PUBLIC_URL}/images/logo.webp`}
              alt="Logo"
            />
          </Navbar.Brand>

          {/* Right Section: Log In and Cart */}
          <Navbar.Text className="d-none d-lg-block">
            <ButtonGroup>
              <StyledButton variant="link" onClick={handleNavigateToLogin}>
                <PersonIcon />
                Log In
              </StyledButton>
              <StyledButton variant="link" onClick={handleNavigateToCart}>
                Cart ({totalCount})
              </StyledButton>
            </ButtonGroup>
          </Navbar.Text>

          {/* Offcanvas Menu */}
          <FullHeightOffcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="top"
          >
            <Offcanvas.Header closeButton>
              <OffcanvasTitle>{/* Centered Log In Button */}</OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <OffcanvasContent>
                <OffcanvasNav>
                  <OffcanvasLink to="/product">All Products</OffcanvasLink>
                  <OffcanvasLink to="/">About Us</OffcanvasLink>
                  <OffcanvasLink to="/">Why Choose Us</OffcanvasLink>
                  <OffcanvasLink to="/">Contact Us</OffcanvasLink>
                </OffcanvasNav>
                <CenteredButton variant="link" className="d-lg-none" onClick={handleNavigateToCart}>
                  Cart ({totalCount})
                </CenteredButton>
                <CenteredButton variant="link" className="d-lg-none" onClick={handleNavigateToLogin}>
                  <BsPerson style={{ marginRight: "10px" }} />
                  Log In
                </CenteredButton>
              </OffcanvasContent>
            </Offcanvas.Body>
          </FullHeightOffcanvas>
        </StyledContainer>
      </StyledNavbar>
    </>
  );
}

export default Header;
