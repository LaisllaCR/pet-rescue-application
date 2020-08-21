import * as React from "react";
import "./index.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./../../paw-solid.svg";

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Pet Rescue
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Pets</Nav.Link>
          <Nav.Link href="#link">Shelters</Nav.Link>
          <NavDropdown
            title="My account"
            id="basic-nav-dropdown"
            className="account-links"
          >
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Preferences</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
