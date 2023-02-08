import React from "react";

function ProductCard({ id, name, desc, price, imgUrl, handleClick }) {
  return (
    <div className="product-card">
      <div>
        <img src={imgUrl} alt={name} width="200px" />
        <p>{name}</p>
        <p>{desc}</p>
        <p>{price}</p>
      </div>
      <div>
        <button onClick={handleClick}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
