import React from "react";
import "./index.css";
import Carousel from "react-bootstrap/Carousel";

const BootstrapCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        width={800}
        height={400}
        src="./../images/adopt1.png"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        width={800}
        height={400}
        src="./../images/adopt2.png"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        width={800}
        height={400}
        src="./../images/adopt3.png"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default BootstrapCarousel;
