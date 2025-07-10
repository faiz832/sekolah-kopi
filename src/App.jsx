import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/index";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
