import React, { useState, useEffect, createContext } from "react";

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mouseleave", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

  return (
    <CursorContext.Provider value={"value"}>{children}</CursorContext.Provider>
  );
};

export default CursorProvider;
