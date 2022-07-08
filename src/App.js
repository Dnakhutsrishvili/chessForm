import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import PersonalInfo from "./pages/PersonalInfo";
import ChessExp from "./pages/ChessExp";
import EndPage from "./pages/EndPage";
import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const getDataApp = (childData) => {
    setData(childData);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="personal"
          element={<PersonalInfo getDataApp={getDataApp} />}
        />
        <Route path="experience" element={<ChessExp data={data} />} />
        <Route path="finished" element={<EndPage />} />
      </Routes>
    </>
  );
}

export default App;
