import React from "react";

function CartCard({
  name,
  desc,
  product,
  price,
  quantity,
  imgUrl,
  handleAddToCart,
  handleChange,
  handleRemoveFromCart,
}) {
  return (
    <div className="cart-card">
      <div className="cart-img-container">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cart-card-info">
        <div className="cart-card-product-info">
          <h3>{name}</h3>
          <p>
            <em>${price}/kg</em>
          </p>
          <p>{desc}</p>
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

export default CartCard;
