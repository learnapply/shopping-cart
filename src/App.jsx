import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { products as productsArray } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function handleClick(product) {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      let newCart = [...cart];
      newCart[itemIndex].quantity += 1;
      setCart(newCart);
    }
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={productsArray} handleClick={handleClick} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
