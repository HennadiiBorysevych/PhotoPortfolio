import React from "react";
import  CursorProvider from "./context/CursorContext";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <CursorProvider>
        <BrowserRouter>
          <Header />
          <AnimRoutes />
        </BrowserRouter>
        {/* cursor */}
        <div className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"></div>
      </CursorProvider>
    </>
  );
};

export default App;
