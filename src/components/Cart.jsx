import React from "react";
import CartCard from "./CartCard";

function Cart({ cart, handleAddToCart, handleChange, handleRemoveFromCart }) {
  const checkout = cart.filter((product) => product.quantity);
  const total = checkout.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-container">
      <div className="cart-card-container">
        {checkout.map((product) => {
          return (
            <CartCard
              key={product.id}
              product={product}
              name={product.name}
              desc={product.desc}
              price={product.price}
              quantity={product.quantity}
              imgUrl={product.src}
              handleAddToCart={() => handleAddToCart(product)}
              handleChange={handleChange}
              handleRemoveFromCart={() => handleRemoveFromCart(product)}
            />
          );
        })}
      </div>
      {checkout.length === 0 && (
        <div className="please-add-items">
          <h1>Please add items to your cart.</h1>
        </div>
      )}
      {checkout.length > 0 && (
        <div className="checkout-box">
          <h3>Your total:</h3>
          <h1> ${total}</h1>
          <div>
            <label htmlFor="agreeToTerms">
              <input type="checkbox" name="agreeToTerms" id="agreeToTerms" /> {}
              Agree to terms of garlic and garlic of conduct
            </label>
            <button>CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
