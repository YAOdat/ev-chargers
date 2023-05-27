import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/header/navbar";
import Home from "./components/Home";
import Chargers from "./components/Chargers";
import Charger from "./components/Charger";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Blog from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chargers" element={<Chargers />} />
        <Route path="/chargers/:chargerId" element={<Charger />} />
        <Route path="/contact" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
