import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import ShelterCardGrid from "./../../components/ShelterCardGrid";

const Pets: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Shelters</h1>
            </div>
          </div>
          <div>
            <Row>
              <ShelterCardGrid />
              <ShelterCardGrid />
            </Row>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default Pets;
