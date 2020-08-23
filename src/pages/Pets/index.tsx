import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const Pets: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <h1>Pets</h1>
        </article>
      </Container>
    </Layout>
  );
};

export default Pets;
