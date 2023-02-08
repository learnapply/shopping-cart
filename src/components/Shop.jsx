import React from "react";
import ProductCard from "./ProductCard";

function Shop({ products, handleClick }) {
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            desc={product.desc}
            price={product.price}
            imgUrl={product.src}
            handleClick={() => handleClick(product)}
          />
        );
      })}
    </div>
  );
}

export default Shop;
