import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mind2PixelPortfolio from "./Mind2PixelPortfolio";
import Projects from "./Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mind2PixelPortfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
