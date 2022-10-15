import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Logements from "../components/Logements";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Logements />
    </div>
  );
};

export default Home;
