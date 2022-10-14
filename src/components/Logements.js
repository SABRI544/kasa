import axios from "axios";
import React, { useEffect, useState } from "react";

const Logements = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/liste.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="logements">
      <h1>Logements</h1>
      <ul>
        {data.map((logements, index) => (
          <li key={index}>{logements.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logements;
