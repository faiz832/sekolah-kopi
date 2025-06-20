import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Information from "./pages/Information";
import Gallery from "./pages/Gallery";
import Class from "./pages/Class";
import "./App.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/class" element={<Class />} />
      </Routes>
      <Footer />
    </Router>
  );
}
