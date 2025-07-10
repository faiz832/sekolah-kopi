import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Information from "../pages/Information";
import Gallery from "../pages/Gallery";
import Class from "../pages/Class";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Payment from "../pages/Payment";
import Review from "../pages/Review";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/information" element={<Information />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/class" element={<Class />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}
