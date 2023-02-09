import React from "react";

function ProductCard({
  id,
  name,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  console.log(quantity);
  return (
    <div className="product-card">
      <img src={imgUrl} alt={name} width="200px" />
      <div className="product-card-info">
        <div>
          <p>{name}</p>
          <p>
            <b>${price}</b>
          </p>
        </div>
        {!quantity ? (
          <button className="add-to-card-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <div className="adjust-quantity">
            <button onClick={handleRemoveFromCart}>-</button>
            <input type="text" name="quantity" id="quantity" value={quantity} />
            <button onClick={handleAddToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
