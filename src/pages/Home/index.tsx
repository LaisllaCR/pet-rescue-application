import React from "react";
import { Container } from "./styles";
import Layout from "../../components/Layout";
import "./index.css";

const Home: React.FC = () => {
  return (
    <Layout>
      <Container className="home">
        <article>
          <h1>Welcome!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet egestas felis eu blandit. Quisque semper lectus eget
            mauris tincidunt, vel gravida nunc ultricies. In tempus et odio
            pharetra porttitor. Etiam commodo, risus nec tincidunt tincidunt,
            tortor erat accumsan nisl, non placerat nisi mauris ac lacus.
            Integer id lectus massa. Quisque sed finibus urna. Cras tempor
            facilisis odio. Quisque eget ullamcorper velit. Duis sed elementum
            tellus. Vestibulum non mi nisi. Donec porta tortor at egestas
            fringilla. Morbi pharetra augue nec nisl condimentum, sed pulvinar
            turpis placerat. Phasellus varius sit amet nulla a dignissim. Sed
            sed est vel dolor elementum sagittis in et tellus. Donec et congue
            magna, elementum iaculis turpis. Nulla nisl diam, molestie at augue
            ac, auctor gravida nisl. Fusce elit sapien, dignissim id elit vitae,
            dictum efficitur erat. Nam sed iaculis orci, vel dictum nunc. Sed
            tempus risus eu metus auctor, vel bibendum velit consectetur.
            Pellentesque tincidunt ullamcorper viverra. Phasellus consectetur
            mauris quis mi vehicula porttitor. Aliquam tristique pharetra nunc
            malesuada lacinia. Sed nec sodales nulla, vitae commodo mi.
            Pellentesque sollicitudin egestas eleifend. Donec iaculis ac risus
            at congue. Phasellus aliquam cursus quam vel sagittis. Mauris
            sagittis condimentum leo eu bibendum. Aenean a libero et turpis
            lacinia maximus. Ut tristique urna eu ex consequat, ut finibus lorem
            posuere. Maecenas id blandit lacus. Vestibulum congue vel libero non
            maximus. Quisque mattis, eros nec cursus faucibus, libero nulla
            ullamcorper lorem, ut commodo nisi metus quis ante. Nunc consectetur
            porta fringilla. Suspendisse consequat sollicitudin bibendum.
            Vivamus sodales dolor nec ipsum sodales, porta mattis ex laoreet.
            Proin purus elit, vehicula non justo quis, scelerisque viverra
            purus. Sed mattis, nulla sed sollicitudin egestas, nulla leo
            vulputate urna, ac commodo diam est ut augue. In arcu lorem, congue
            sed quam egestas, luctus mattis justo. Aliquam fermentum interdum
            felis vel pulvinar. Nullam maximus erat nec aliquet viverra. Donec
            auctor leo euismod, varius nisl id, eleifend magna. Suspendisse in
            ex eu urna convallis laoreet et et felis. Morbi arcu mauris,
            sagittis sit amet condimentum ac, egestas ut quam. Praesent finibus
            arcu id quam semper consequat.
          </p>
        </article>
      </Container>
    </Layout>
  );
};

export default Home;
