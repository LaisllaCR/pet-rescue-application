import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link }  from "react-router-dom";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ShelterView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Bee Animal Shelter</h1>
            </div>
          </div>
          <Card>
            <Card.Body>
              <Row>
                <Col lg={6}><h5>Story</h5>
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
                      <h5>Contact</h5>
                      <Card.Text>James D. Box</Card.Text>
                      <Card.Text>beeanimalshelter@gmail.com </Card.Text>
                      <a href="">www.beeanimalshelter.com </a>
                      </Col>
                  </Row>
                  <Row>
                    <Col>
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
                  
                </Col>
                <Col lg={6} className="text-center">
                  <ImageGallery items={images} />
                  <Row>
                    <Col>
      <Link className="btn" to="/pets">
        Pets
      </Link>
      <Link className="btn" to="/">
        Donation
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

export default ShelterView;
