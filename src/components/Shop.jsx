import React from "react";
import ProductCard from "./ProductCard";

function Shop({ products, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div className="product-card-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            imgUrl={product.src}
            handleAddToCart={() => handleAddToCart(product)}
            handleRemoveFromCart={() => handleRemoveFromCart(product)}
          />
        );
      })}
    </div>
  );
}

export default Shop;
