import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import { products as productsArray } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState(productsArray);

  function handleAddToCart(product) {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    let newCart = [...cart];
    if (newCart[itemIndex].quantity) {
      newCart[itemIndex].quantity += 1;
    } else {
      newCart[itemIndex].quantity = 1;
    }
    setCart(newCart);
  }

  function handleChange(e, product) {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    let newCart = [...cart];
    newCart[itemIndex].quantity = e.target.value;
    setCart(newCart);
    console.log(cart);
  }

  function handleRemoveFromCart(product) {
    let itemIndex = cart.findIndex((item) => item.id === product.id);
    if (cart[itemIndex].quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    }
    let newCart = [...cart];
    newCart[itemIndex].quantity -= 1;
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={cart}
              handleAddToCart={handleAddToCart}
              handleChange={handleChange}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleChange={handleChange}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
