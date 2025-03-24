import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Cleaning_Web/" element={<Home />} />
        <Route exact path="/Cleaning_Web/services" element={<OurServices />} />
        <Route exact path="/Cleaning_Web/about" element={<AboutUs />} />
        <Route exact path="/Cleaning_Web/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;