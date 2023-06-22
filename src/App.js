import React from "react";

import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
