import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
const Default404 = () => {
  return (
    <div>
      <Header />
      <section className="page-non-trouvée">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="lien">
          Retourner sur la page d'accueil
        </NavLink>
      </section>
    </div>
  );
};

export default Default404;
