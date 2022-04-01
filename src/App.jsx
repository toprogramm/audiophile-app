import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewProduct from './components/NewProduct/NewProduct';
import Home from './components/Home/Home';
import Headphones from './components/Headphones/Headphones';
import Speakers from './components/Speakers/Speakers';
import Earphones from './components/Earphones/Earphones';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import './scss/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <div className="header">
            <Navbar />
          </div>
          <div className="main">
            <NewProduct
              model="XX99 Mark II Headphones"
              description="Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast."
            />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="headphones" element={<Headphones />} />
                <Route path="speakers" element={<Speakers />} />
                <Route path="earphones" element={<Earphones />} />
                <Route path="cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
