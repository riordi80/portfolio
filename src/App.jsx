import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/not-found/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
