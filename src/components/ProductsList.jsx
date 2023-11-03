import React from "react";
import "../styles/productlist.css";

const ProductsDropdown = ({ isProductsDropdownOpen }) => {
  return (
    isProductsDropdownOpen && (
      <div className="products-dropdown-menu">
        <ul>
          <li>
            <a href="/category1">Category 1</a>
          </li>
          <li>
            <a href="/category2">Category 2</a>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </div>
    )
  );
};

export default ProductsDropdown;
