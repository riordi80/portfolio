import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Refund from "./pages/refund/Refund";
import BlogPage from "./pages/blog/BlogPage";
import Rss from "./pages/rss/Rss";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/rss" element={<Rss />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
