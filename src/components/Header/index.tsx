import * as React from "react";
import "./index.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./../../logo-only-small.png";

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <div>
          <img
            alt=""
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Pets</Nav.Link>
          <Nav.Link href="#link">Shelters</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
