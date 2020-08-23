import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const PetView: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>Pet View</h1>
            </div>
          </div>
          <div></div>
        </article>
      </Container>
    </Layout>
  );
};

export default PetView;
