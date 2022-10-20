import { useState } from "react";
import React from "react";

const Dropdown = ({ titre, text }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="accordeon">
        <div className="item">
          <div className="titre" onClick={() => setSelected(!selected)}>
            <h2>{titre}</h2>

            <span>
              {selected ? (
                <img className="icone" src="./img/Vector.png " alt="icone" />
              ) : (
                <img src="./img/Vector.png " alt="icone" />
              )}
            </span>
          </div>
          <div className={selected ? "show" : "text"}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
