import * as React from "react";
import "./index.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShelterCard = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src="./../images/shelter-logo.png"
      width={220}
      height={160}
    />
    <Card.Body>
      <Card.Title>Shelter</Card.Title>
      <Card.Text>Shelter Bla bla Bla</Card.Text>
      <Link className="btn" to="/shelterview">
        Details
      </Link>
    </Card.Body>
  </Card>
);

export default ShelterCard;
