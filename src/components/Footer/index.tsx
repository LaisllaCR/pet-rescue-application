import * as React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import "./index.css";

const Footer = () => (
  <footer>
    <div>
      <Row>
        <Col lg={6}>
          <h4>Pet Rescue</h4>
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget dapibus eros. Nunc rhoncus massa non accumsan ultrices. Sed
            sodales velit ut euismod viverra.
          </p>
        </Col>
        <Col lg={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <a href="/about">About</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/pets">Pets</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/shelters">Shelters</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <h5>Contact us</h5>
          <ListGroup variant="flush">
            <ListGroup.Item>petrescue@gmail.com</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
    <div className="footer-copyright">
      <Row>
        <Col lg={9}>
          <div className="text-left align-middle">
            © 2020 Copyright:
            <a href="www.petrescue.com"> PetRescue.com</a>
          </div>
        </Col>
        <Col lg={3}>
          <a href="www.petrescue.com" className="social-midia-icons">
            <i className="fab fa-twitter-square fa-3x"></i>
          </a>
          <a href="www.petrescue.com" className="social-midia-icons">
            <i className="fab fa-google-plus-square fa-3x"></i>
          </a>
          <a href="www.petrescue.com" className="social-midia-icons">
            <i className="fab fa-facebook-square fa-3x"></i>
          </a>
        </Col>
      </Row>
    </div>
  </footer>
);

export default Footer;
