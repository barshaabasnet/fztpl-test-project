import React from "react";
import "./Filter.css";

const Filter = ({ search, setSearch }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
