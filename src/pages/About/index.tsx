import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import { Container } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Layout>
      <Container fluid>
        <article>
          <div className="article-header">
            <div className="article-title">
              <h1>About us</h1>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              accumsan tellus id lacus rutrum auctor. Nam et eros ac enim
              ultricies cursus. Duis eget laoreet nisl. Nunc viverra augue eros,
              quis aliquet odio congue in. Phasellus cursus tortor a tincidunt
              fermentum. Aenean ac risus porttitor, placerat ante eget, blandit
              dui. Integer sapien libero, maximus et laoreet ac, imperdiet
              tristique nibh. Fusce dictum ante tellus, quis finibus diam dictum
              id. Pellentesque malesuada ligula a urna vestibulum, ut eleifend
              urna luctus. Curabitur a leo ultricies, sollicitudin eros nec,
              porta ante. Donec sed varius ex. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Proin ac magna velit. In hac habitasse platea dictumst. Quisque
              vestibulum rutrum fermentum. Duis eleifend semper dui quis dictum.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Sed augue tortor, convallis in lorem nec,
              dignissim bibendum lorem. Vestibulum interdum orci at quam
              consectetur, eget pharetra risus laoreet. Pellentesque massa diam,
              rhoncus non pharetra vel, tincidunt sed arcu. Donec nec ante sed
              felis hendrerit dapibus. Etiam vitae pulvinar libero. Pellentesque
              at dolor sed ligula hendrerit placerat. Integer blandit purus quis
              rutrum vestibulum. Vestibulum ut sapien sit amet arcu efficitur
              dignissim. Fusce vel sodales ligula, eu efficitur dolor. In hac
              habitasse platea dictumst. Sed vitae elit enim. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Proin viverra, dui nec mollis porttitor, velit
              turpis bibendum nisi, a euismod sem nulla ut sem. Proin accumsan
              tortor sed placerat interdum. Integer et tortor libero. Proin
              ultricies vehicula risus. Maecenas consectetur sapien non nisi
              lacinia, faucibus malesuada nibh facilisis. Integer felis est,
              venenatis non neque non, molestie commodo odio. Phasellus in
              laoreet nibh. Suspendisse sed leo in nibh tempus viverra. Praesent
              imperdiet pulvinar mauris, non vehicula mauris ultrices nec. Donec
              semper dolor et hendrerit fringilla. Nulla nec dictum erat, at
              convallis tellus. Vivamus condimentum pretium magna sit amet
              rhoncus. Pellentesque lacinia, quam ac condimentum cursus, lorem
              erat aliquet nibh, at ultrices enim justo ac magna. Sed in mi quis
              velit sagittis pharetra vitae quis odio. Praesent eget odio sed
              dui efficitur lacinia ut quis mi.
            </p>
          </div>
        </article>
      </Container>
    </Layout>
  );
};

export default About;
