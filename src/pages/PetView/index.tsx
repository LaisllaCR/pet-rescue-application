import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const PetView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <h1>Pet View</h1>
        </article>
      </Container>
    </Layout>
  );
};

export default PetView;
