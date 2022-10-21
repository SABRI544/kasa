//import React from "react";

import Dropdown from "../components/Dropdown";
//import Logements from "../components/Logements";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";

const LocationPage = () => {
  const [data, setData] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  let { id } = useParams();

  useEffect(
    function () {
      fetch("/liste.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
              setData(data[i]);
            }
          }
        });
    },
    [id]
  );

  return (
    <div>
      <Header />
      <main>
        <div>
          <Caroussel pictures={data.pictures} title={data.title} />
        </div>

        <div className="info">
          <h1 className="infotitre">{data.title}</h1>
          <p className="infolocation">{data.location}</p>
          <p className="infolocation">{data.description}</p>
        </div>

        <div className="containerdropdown">
          <Dropdown className="description" text={data.description} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
