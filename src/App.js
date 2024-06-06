import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";

const App = () => {
  return (
    <NoteState>
      <div>
        <Navbar />
        <Alert/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </NoteState>
  );
};

export default App;
