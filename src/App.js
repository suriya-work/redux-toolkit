import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// components
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;