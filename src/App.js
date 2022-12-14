import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Default404 from "./pages/Default404";
import LocationPage from "./pages/LocationPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/annonce/:id" element={<LocationPage />} />
        {/* *si l'url ne correspond à rien de déclaré 404 */}
        <Route path="*" element={<Default404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
