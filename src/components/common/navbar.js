import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  const navbarStyle = {
    backgroundColor: 'transparent',
    padding: '0.5rem 1rem',
  };

  const containerStyle = {
    padding: '0 10%',
  };

  const navStyle = {
    display: 'flex',
    gap: '6rem',
  };

  const navLinkStyle = {
    fontSize: '1rem',
    fontWeight: 300,
    textAlign: 'center',
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const hoverNavLinkStyle = {
    color: '#c76e6e',
  };

  return (
    <Navbar expand="lg" variant="light" style={navbarStyle}>
      <Container fluid style={containerStyle}>
        <Nav className="mx-auto" style={navStyle}>
          <Nav.Link
            as={NavLink}
            to="/product"
            style={({ isActive }) => ({
              ...navLinkStyle,
              color: isActive ? hoverNavLinkStyle.color : navLinkStyle.color,
            })}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverNavLinkStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = navLinkStyle.color}
          >
            All Products
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about-us"
            style={({ isActive }) => ({
              ...navLinkStyle,
              color: isActive ? hoverNavLinkStyle.color : navLinkStyle.color,
            })}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverNavLinkStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = navLinkStyle.color}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/why-choose-us"
            style={({ isActive }) => ({
              ...navLinkStyle,
              color: isActive ? hoverNavLinkStyle.color : navLinkStyle.color,
            })}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverNavLinkStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = navLinkStyle.color}
          >
            Why Choose Us
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact-us"
            style={({ isActive }) => ({
              ...navLinkStyle,
              color: isActive ? hoverNavLinkStyle.color : navLinkStyle.color,
            })}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverNavLinkStyle.color}
            onMouseLeave={(e) => e.currentTarget.style.color = navLinkStyle.color}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
