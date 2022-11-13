// import './App.css';
import React from 'react';
import Header from './Components/UI/Header';
import Meals from './Components/Meals/Meals';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from "./Components/UI/Footer";
function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
