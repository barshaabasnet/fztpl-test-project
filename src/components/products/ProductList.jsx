import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p className="no-results">No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
