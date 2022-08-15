import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScoreTable, InstructionsPage, StartPage } from "./containers";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/score-table" element={<ScoreTable />} />
        <Route path="/instructions-page" element={<InstructionsPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
