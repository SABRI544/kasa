import axios from "axios";
import React, { useEffect, useState } from "react";

const Logements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/liste.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="logements">
      {data.map((logements, index) => (
        <div className="card" key={index}>
          <img src={logements.cover} alt="logements" />
          <h3>{logements.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Logements;
