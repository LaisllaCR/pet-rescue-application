import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const ShelterView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Shelter View</h1>
            </div>
          </div>
          <div></div>
        </article>
      </Container>
    </Layout>
  );
};

export default ShelterView;
