import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from './components/navbar/Header';
import Footer from './components/shorts/footer/Footer';
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
