import InputPage from "./InputPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ewaade" element={<InputPage />} />
      </Routes>
    </>
  );
}

export default App;
