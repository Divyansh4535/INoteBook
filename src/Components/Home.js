import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      i m home
    </div>
  );
};

export default Home;
