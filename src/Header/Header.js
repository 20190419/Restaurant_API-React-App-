import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="tm-top-header">
        <Container className="container">
          <Navbar.Brand
            as={Link}
            to="/"
            // style={{
            //   fontSize: "35px",
            // }}
            className="tm-logo-container"
          >
            <img
              src="/public/logo192.png"
              alt="logo"
              className="tm-site-logo"
            />
            <h1 className="tm-site-name tm-handwriting-font">Store Name</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="tm-top-header-inner"
          >
            <Nav className="tm-nav">
              <Link
                to="/"
                className="nav-link"
                style={{ marginRight: "4rem", marginLeft: "4rem" }}
              >
                Home
              </Link>
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
