import "./App.css";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import PersonalInfo from "./pages/PersonalInfo";
import ChessExp from "./pages/ChessExp";
import EndPage from "./pages/EndPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="personal" element={<PersonalInfo />} />
        <Route path="experience" element={<ChessExp />} />
        <Route path="finished" element={<EndPage />} />
      </Routes>
    </>
  );
}

export default App;
