import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <h1>About</h1>
        </article>
      </Container>
    </Layout>
  );
};

export default About;
