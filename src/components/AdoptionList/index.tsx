import * as React from "react";
import "./index.css";
import { Carousel, Card, Button, CardDeck } from "react-bootstrap";

const AdoptionList = () => (
  <div>
    <h1>Pets for adoption</h1>

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
