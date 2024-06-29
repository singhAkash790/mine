import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import "./css/Style.css";
import "aos/dist/aos.css";
import "./css/fonts/stylesheet.css";
import "./css/Responsive.css";
import Aos from "aos";
import Header from "./components/Header";
import About from "./About";
import Portfolio from "./Portfolio";
import ProductDetail from "./ProductDetail";
import ContactUs from "./ContactUs";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Loader />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/project/:slug" element={<ProductDetail />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
