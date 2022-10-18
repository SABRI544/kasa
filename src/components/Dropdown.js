import { useState } from "react";
import React from "react";

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

const Dropdown = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className="accordeon">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="titre" onClick={() => toggle(i)}>
              <h2>{item.titre}</h2>

              <span>
                {selected === i ? (
                  <img className="icone" src="./img/Vector.png " alt="icone" />
                ) : (
                  <img src="./img/Vector.png " alt="icone" />
                )}
              </span>
            </div>
            <div className={selected === i ? "show" : "text"}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
