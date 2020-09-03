import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container, Row } from "react-bootstrap";
import PetCardGrid from "./../../components/PetCardGrid";

const Pets: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Pets for adoption</h1>
            </div>
          </div>
          <div>
            <Row>
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
              <PetCardGrid />
            </Row>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default Pets;
