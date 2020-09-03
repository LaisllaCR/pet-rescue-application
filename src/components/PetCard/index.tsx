import * as React from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PetCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src="./../images/Koala.jpg"
      width={220}
      height={160}
    />
    <Card.Body>
      <Card.Title>Koala</Card.Title>
      <Card.Text>Shelter Bla bla Bla</Card.Text>
      <Link className="btn" to="/petview">
        Details
      </Link>
    </Card.Body>
  </Card>
);

export default PetCard;
