import React from "react";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import About from "./About.js";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <About/>
      <Link to={"link"}>
        link hu bhai
      </Link>
      

      hlo i  m 
    </div>
  );
};

export default Home;
