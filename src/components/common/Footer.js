import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Styled Components for Footer Wrapper
const FooterWrapper = styled.footer`
  background-color: white;
  padding: 40px 0;
  border-top: 1px solid #dee2e6;
`;

// Styled Components for Footer Column
const FooterColumn = styled.div`
  padding: 0 15px;
`;

// Styled Components for Footer Logo
const FooterLogo = styled.img`
  width: 169px;
  height: 151px;
`;

// Styled Components for Footer Links
const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 200;
  text-align: center;

  li {
    margin-bottom: 20px;
  }

  button {
    display: block;
    color: #333;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 200;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
    transition: color 0.3s ease;
    padding: 0;
    text-align: center;
    background: transparent;
  }
`;

// Styled Components for Social Media Links
const SocialMediaLinks = styled.div`
  font-size: 16px;

  a {
    display: block;
    color: #333;
    margin-bottom: 20px;
    text-decoration: none;
    font-weight: 200;
  }
`;

// Styled Components for Newsletter Signup
const NewsletterSignup = styled.div`
  font-size: 14px;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="email"] {
    width: 80%;
    border: none;
    border-bottom: 1px solid #c76e6e;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    margin-bottom: 10px;
    transition: border-bottom-color 0.3s ease;

    &:focus {
      border-bottom-color: #c76e6e;
      outline: none;
    }
  }

  button {
    padding: 0.5rem 2rem;
    border: 1px solid #c76e6e;
    background-color: transparent;
    color: #c76e6e;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #a75050;
      color: white;
    }
  }
`;

// Styled Components for Footer Bar
const FooterBar = styled.div`
  background-color: #f6f3ef;
  color: black;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 100;
  position: relative;
  bottom: 0;
  width: 100%;
`;

// Footer Component
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <Row>
            <Col md={3}>
              <FooterColumn>
                <FooterLogo src="/images/logo.webp" alt="Sunshine Logo" />
              </FooterColumn>
            </Col>
            <Col md={3}>
              <FooterColumn>
                <FooterLinks>
                  <li><button type="button">Shop All</button></li>
                  <li><button type="button">About Us</button></li>
                  <li><button type="button">Why Choose Us</button></li>
                  <li><button type="button">Contact Us</button></li>
                  <li><button type="button">Store Policy</button></li>
                </FooterLinks>
              </FooterColumn>
            </Col>
            <Col md={3}>
              <FooterColumn>
                <SocialMediaLinks>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pinterest
                  </a>
                </SocialMediaLinks>
              </FooterColumn>
            </Col>
            <Col md={3}>
              <FooterColumn>
                <h3>JOIN US!</h3>
                <NewsletterSignup>
                  <label htmlFor="email">Email*</label>
                  <input type="email" id="email" />
                  <button type="button">Send</button>
                </NewsletterSignup>
              </FooterColumn>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
      <FooterBar>
        ©2024 by SunShine And Salt HomeWares. All Rights Reserved.
      </FooterBar>
    </>
  );
};

export default Footer;
