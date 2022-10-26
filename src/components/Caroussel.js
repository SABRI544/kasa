import React, { useState } from "react";

const Caroussel = (props) => {
  const { pictures, title } = props;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current ? current - 1 : pictures.length - 1);
  };

  return (
    <section className="galerie">
      <div className="box">
        <img
          onClick={() => prevSlide()}
          className="arrowback"
          src="../img/arrowback.png"
          alt="fleche de gauche"
        />
        <img src={pictures[current]} alt={title} className="galerieimg" />
        <img
          onClick={() => nextSlide()}
          className="arrowforward"
          src="../img/arrowforward.png"
          alt="fleche de droite"
        />
        <span className="nbtext">
          {current + 1}/ {pictures.length}
        </span>
      </div>
    </section>
  );
};

export default Caroussel;
