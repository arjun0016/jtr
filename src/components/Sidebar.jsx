import React from "react";
import "../styles/sidebar.css"
import {categories} from "../components/pages/categoryData.js"
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-dropdown-menu">
       <ul>
       <h3>Products</h3>
        {categories.map(category => (
          <li key={category.cid}>
            <Link to={`/categorypage/${category.cid}`}>
              {category.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
