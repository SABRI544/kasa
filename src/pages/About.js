import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
const About = () => {
  return (
    <div>
      <Header />
      <Banner
        imgsrc="./img/banniereabout.png"
        altText="banniére montagne"
        title=""
      />

      <Dropdown />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi quam
        voluptatem ea quibusdam asperiores adipisci necessitatibus nihil! Soluta
        excepturi error commodi id iure. Repellat et eius dolor ex accusantium!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sint
        excepturi! Quisquam dicta illum optio aut distinctio quae, aliquid,
        reiciendis natus tenetur repellat cumque repellendus, dolor consectetur
        debitis omnis modi.
      </p>
      <Footer />
    </div>
  );
};

export default About;
