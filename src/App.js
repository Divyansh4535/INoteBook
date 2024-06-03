import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/notes/NoteState";

const App = () => {
  return (
    <NoteState>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </NoteState>
  );
};

export default App;
