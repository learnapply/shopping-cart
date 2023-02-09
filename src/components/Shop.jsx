import React from "react";
import ProductCard from "./ProductCard";

function Shop({ products, handleAddToCart, handleChange, handleRemoveFromCart }) {
  return (
    <div className="product-card-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            name={product.name}
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
  );
}

export default Shop;
