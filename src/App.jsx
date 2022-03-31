import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button';
import Input from './components/Input';
import Test from './components/Test';
import Home from './components/Home/Home';

import './scss/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Button>See Product</Button>
      </BrowserRouter>
    </>
  );
}

export default App;
