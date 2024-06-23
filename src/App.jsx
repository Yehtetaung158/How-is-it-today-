import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Add from "./page/Add";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
  );
};

export default App;
