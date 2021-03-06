import * as React from "react";
import "./index.css";
import { Col } from "react-bootstrap";
import PetCard from "./../PetCard";

const PetCardGrid = () => (
  <Col lg={3} md={6} sm={12}>
    <PetCard />
  </Col>
);

export default PetCardGrid;
