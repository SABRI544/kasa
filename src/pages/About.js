import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
const data = [
  {
    titre: "Fiabilité",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    titre: "Respect",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam, quod ducimus eos itaque perferendis temporibus quos quia? Id quaerat dignissimos sit cumque nostrum illo ipsam. Reiciendis, ut. Minus provident praesentium beatae autem perferendis at facere doloremque distinctio odio minima? Rerum delectus sit totam magnam nihil saepe tempore ex sunt reiciendis! Nihil quae ducimus accusantium corrupti! A minus sed adipisci dolorum rem debitis reprehenderit officiis, blanditiis nulla ad deserunt totam reiciendis eius iste omnis eaque repellat quo laudantium asperiores optio est. Dolorem nesciunt eius facilis unde cumque voluptas esse soluta ratione suscipit facere repudiandae eum recusandae, delectus cum! Adipisci, aliquid.Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    titre: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <Banner
        imgsrc="./img/banniereabout.png"
        altText="banniére montagne"
        title=""
      />
      <div className="accordeon">
        {data.map(({ titre, text }) => (
          <Dropdown titre={titre} text={text} key={titre} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
