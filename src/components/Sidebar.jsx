import React from "react";
import "../styles/sidebar.css";
import { categories } from "../components/pages/categoryData.js";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-dropdown-menu">
      <ul>
        {categories.map((category) => (
          <li key={category.cid}>
            <Link to={`/categorypage/${category.cid}`}>
              {category.name}
            </Link>

            {Object.keys(category).map((key) => {
              // Check if the key is a subcategory array
              if (key.startsWith("subcategory")) {
                return (
                  <ul className="sub" key={key}>
                    {category[key].map((subcategory) => (
                      <li key={subcategory.subid}>
                        <Link to={`/moredetails/${subcategory.subid}`}>
                          - {subcategory.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
