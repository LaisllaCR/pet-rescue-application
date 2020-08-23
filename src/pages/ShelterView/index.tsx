import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const ShelterView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <h1>Shelter View</h1>
        </article>
      </Container>
    </Layout>
  );
};

export default ShelterView;
