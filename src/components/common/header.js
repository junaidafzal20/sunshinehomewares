import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { BsSearch, BsPerson } from 'react-icons/bs';
import styled from 'styled-components';

// Styled Components
const StyledNavbar = styled(Navbar)`
  background-color: white;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  flex: 1;
  width: 300px;
  position: relative;
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
  width: 40%;
  transition: border-bottom-color 0.3s ease;
  &:focus {
    outline: none;
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

const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 1;
`;

const StyledNavLink = styled(Nav.Link)`
  color: #c76e6e;
  transition: color 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #a65757; /* Optional hover color change */
  }
`;

const Logo = styled.img`
  height: 95px;
`;

function Header() {
  const [searchIconColor, setSearchIconColor] = useState('#000');
  const [searchBorderColor, setSearchBorderColor] = useState('#000');
  const [underlineWidth, setUnderlineWidth] = useState('50%');

  return (
    <StyledNavbar expand="lg">
      <StyledContainer fluid>
        {/* Left Section: Search Form */}
        <StyledForm className="search-form">
          <SearchIcon
            color={searchIconColor}
            onMouseOver={() => setSearchIconColor('#c76e6e')}
            onMouseOut={() => setSearchIconColor('#000')}
          />
          <StyledFormControl
            type="search"
            placeholder="Search..."
            aria-label="Search"
            onMouseOver={() => {
              setSearchBorderColor('#c76e6e');
              setUnderlineWidth('50%');
            }}
            onMouseOut={() => {
              setSearchBorderColor('#000');
              setUnderlineWidth('50%');
            }}
          />
          <Underline color={searchBorderColor} width={underlineWidth} />
        </StyledForm>

        {/* Center Section: Logo */}
        <Navbar.Brand href="#home" className="mx-auto" style={{ flex: '2', textAlign: 'center' }}>
          <Logo src={`${process.env.PUBLIC_URL}/images/logo.webp`} alt="Logo" />
        </Navbar.Brand>

        {/* Right Section: Log In and Cart */}
        <StyledNav>
          <StyledNavLink href="#login">
            <BsPerson style={{ marginRight: '10px' }} />
            Log In
          </StyledNavLink>
          <StyledNavLink href="#cart">
            Cart (0)
          </StyledNavLink>
        </StyledNav>
      </StyledContainer>
    </StyledNavbar>
  );
}

export default Header;
