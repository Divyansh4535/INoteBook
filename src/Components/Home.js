import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
};

export default Home;
