import * as React from "react";
import "./index.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import PetList from "./../PetList";

const AdoptionList = () => (
  <div>
    <div className="article-header">
      <div className="article-title">
        <h1>Pets for adoption</h1>
      </div>
      <div className="article-link">
        <Link to="/pets">See more</Link>
      </div>
    </div>

    <Carousel>
      <Carousel.Item>
        <PetList />
      </Carousel.Item>
      <Carousel.Item>
        <PetList />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default AdoptionList;
