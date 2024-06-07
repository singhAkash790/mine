import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./css/Style.css";
import "./css/Oldcss.css";
import "aos/dist/aos.css";
import "./css/fonts/stylesheet.css";
import "./css/Responsive.css";
import Aos from "aos";
import Header from "./components/Header";
import About from "./About";
import Portfolio from "./Portfolio";
import ContactUs from "./ContactUs";

function App() {
  Aos.init();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
