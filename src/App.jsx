import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InfoPage from "./InfoPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
}