import React from "react";

function ProductCard({
  name,
  product,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) {
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
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => handleChange(e, product)}
            />
            <button onClick={handleAddToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
