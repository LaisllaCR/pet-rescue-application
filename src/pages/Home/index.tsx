import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import BootstrapCarousel from "../../components/Carousel";
import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Layout>
      <Container fluid className="home">
        <article>
          <BootstrapCarousel />
        </article>
      </Container>
    </Layout>
  );
};

export default Home;
