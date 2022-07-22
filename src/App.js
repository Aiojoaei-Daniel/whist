import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import {
  ScoreTable,
  InstructionsPage,
  StartPage,
  PlayersData,
} from "./containers";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/score-table/players-data" element={<PlayersData />} /> */}
        <Route path="/score-table" element={<ScoreTable />} />
        <Route path="/instructions-page" element={<InstructionsPage />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
