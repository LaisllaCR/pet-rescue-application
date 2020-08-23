import * as React from "react";
import "./index.css";
import { Carousel, Card, Button, CardDeck, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdoptionList = () => (
  <div>
    <div className="article-header">
      <div className="article-title">
        <h1>Pets for adoption</h1>
      </div>
      <div className="article-link">
        <Link to="/pets">See more</Link>
      </div>
    </div>

    <Carousel>
      <Carousel.Item>
        <CardDeck>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Carousel.Item>
      <Carousel.Item>
        <CardDeck>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default AdoptionList;
