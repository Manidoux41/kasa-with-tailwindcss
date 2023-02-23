import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Logements from "./Logements";
import NotFound from "./NotFound";

function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logements />} />

        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default PublicRouter;
