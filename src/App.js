import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// components
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Navigate to="/not-found" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </ThemeProvider>

    </div>
  );
};

export default App;