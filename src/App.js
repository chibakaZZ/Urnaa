import React from 'react';
import Hamster from './components/hamster/Hamster';
import Rabbit from './components/rabbit/Rabbit';
import GuineaPig from './components/guineapig/GuineaPig';
import Footer from './components/footer/Footer';
import NavbarImg from './components/navbarimg/NavbarImg';
import Parrot from './components/parrot/Parrot';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
      <React.Fragment>
        <NavbarImg />
        <GuineaPig />
        <Rabbit />
        <Hamster/>
        <Parrot/>
        <Footer />

        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </Router>
      </React.Fragment>
  )
}

export default App;