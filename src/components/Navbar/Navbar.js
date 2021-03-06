import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../elements/img/icon.png";

const nav = () => {
  return (
    <Navbar bg="primary" variant="light" expand="lg" sticky="top">
      <Navbar.Brand>
        {" "}
        <Link to="/">
          {" "}
          <img src={`${logo}`} alt="logo" />{" "}
        </Link>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/favourites" style={{ fontSize: "18px" }}>
            <i className="fas fa-heart pr-2 text-danger"></i>
            <span>Favorite Movies</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
