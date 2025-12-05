import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} className="product-image" />

    <h2 className="product-title">{product.title}</h2>
    <p className="product-category">{product.category}</p>
    <p className="product-price">${product.price}</p>

    <div className="product-buttons">
      <button className="btn buy-btn">Buy</button>
      <button className="btn cart-btn">Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;
