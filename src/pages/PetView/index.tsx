import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Card, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

const PetView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Ginger</h1>
            </div>
          </div>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={6}>
                  <h5>Story</h5>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque accumsan tellus id lacus rutrum auctor. Nam et
                      eros ac enim ultricies cursus. Duis eget laoreet nisl.
                      Nunc viverra augue eros, quis aliquet odio congue in.
                      Phasellus cursus tortor a tincidunt fermentum. Aenean ac
                      risus porttitor, placerat ante eget, blandit dui. Integer
                      sapien libero, maximus et laoreet ac, imperdiet tristique
                      nibh. Fusce dictum ante tellus, quis finibus diam dictum
                      id. Pellentesque malesuada ligula a urna vestibulum, ut
                      eleifend urna luctus. Curabitur a leo ultricies,
                      sollicitudin eros nec, porta ante.{" "}
                    </p>
                  </Card.Text>
                  <Row>
                    <Col>
                      <h5>Breed</h5>
                      <Card.Text>Shitzu</Card.Text>
                    </Col>
                    <Col>
                      <h5>Gender</h5>
                      <Card.Text>Female</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Size</h5>
                      <Card.Text>Small</Card.Text>
                    </Col>
                    <Col>
                      <h5>Weight</h5>
                      <Card.Text>3kg</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Age</h5>
                      <Card.Text>Adult</Card.Text>
                    </Col>
                    <Col>
                      <h5>Hair</h5>
                      <Card.Text>Long hair</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Special needs?</h5>
                      <Card.Text>No</Card.Text>
                    </Col>
                    <Col>
                      <h5>Neuter?</h5>
                      <Card.Text>No</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Vaccine?</h5>
                      <Card.Text>No</Card.Text>
                    </Col>
                    <Col>
                      <h5>Chip?</h5>
                      <Card.Text>No</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5>Leash?</h5>
                      <Card.Text>No</Card.Text>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} className="text-center">
                  <Figure>
                    <Figure.Image
                      width={450}
                      height={350}
                      alt="171x180"
                      src="https://picsum.photos/id/1018/450/350/"
                    />
                  </Figure>
                  <Row>
                    <Col>
                      <Link className="btn" to="/">
                        Contact
                      </Link>
                      <Link className="btn" to="/">
                        Share
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </article>
      </Container>
    </Layout>
  );
};

export default PetView;
