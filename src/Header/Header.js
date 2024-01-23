// Import necessary components and styles from external libraries and files
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

// Define and export the Header component
export default function Header() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar expand="lg" className="tm-top-header">
        {/* Container for the navigation bar */}
        <Container className="container">
          {/* Brand/logo section with a link to the home page */}
          <Navbar.Brand
            as={Link}
            to="/"
            // Additional styles can be applied here if needed
            className="tm-logo-container"
          >
            {/* Site logo */}
            <img
              src="/public/logo192.png"
              alt="logo"
              className="tm-site-logo"
            />
            {/* Site name */}
            <h1 className="tm-site-name tm-handwriting-font">Store Name</h1>
          </Navbar.Brand>

          {/* Hamburger menu icon for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation links */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="tm-top-header-inner"
          >
            {/* Navigation links container */}
            <Nav className="tm-nav">
              {/* Home link */}
              <Link
                to="/"
                className="nav-link"
                style={{ marginRight: "4rem", marginLeft: "4rem" }}
              >
                Home
              </Link>

              {/* Products link */}
              <Link to="/categories" className="nav-link">
                Products
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
