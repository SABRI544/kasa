import { useState } from "react";
import React from "react";

const Dropdown = ({ titre, text }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="accordeon">
      <div className="titre" onClick={() => setSelected(!selected)}>
        <h2>{titre}</h2>

        <div>
          {selected ? (
            <img className="icone" src="../img/Vector.png " alt="icone" />
          ) : (
            <img src="../img/Vector.png " alt="icone" />
          )}
        </div>
      </div>
      {selected && <div className="show">{text}</div>}
    </div>
  );
};

export default Dropdown;
