import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/pages/categorydetails.css";
import { categories } from "./categoryData";
import Sidebar from "../Sidebar";

const CategoryDetails = () => {
  const { id, cid } = useParams();
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    const selectedCategory = categories.find(
      (category) =>
        category.id === parseInt(id) || category.cid === parseInt(cid)
    );
    setCategoryDetails(selectedCategory);
  }, [categories, id, cid]);

  if (!categoryDetails) {
    return <p>Category not found</p>;
  }

  return (
    <div className="category-detailspage">
      <Navbar />
      <div className="category-detailspage-img">
        <img src={categoryDetails.bgImg} alt={categoryDetails.name} />
      </div>
      <Sidebar />

      <div className="category-detailspagec">
        <div className="category-details-content">
          <h1>
            {Array.from(categoryDetails.name).map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <hr className="w-75" />
        </div>
        {categoryDetails.images.map((images, index) => (
          <div key={index} className="category-details-wrap">
            <img id="co" src={images.img1} alt="" />
            <img id="co" src={images.img2} alt="" />
            <img id="co" src={images.img3} alt="" />
          </div>
        ))}

{categoryDetails.subcategory.map((subcategory, index) => (
  <div key={index} className="category-details-para">
    {subcategory.title && <h3>{subcategory.title}</h3>}
    
    {subcategory.images.map((image, imageIndex) => (
      <div key={imageIndex} className='category-details-wrap'>
        <img src={image.img1} alt={`Image ${imageIndex + 1}`} />
        <img src={image.img2} alt={`Image ${imageIndex + 2}`} />
      </div>
    ))}

    <div className='category-details-para'>
      <p>{subcategory.description}</p>
    </div>


    {subcategory.list_items.map((items, index) => (
      <div key={index} className='category-details-wrap'>
        <p>{items.content1} </p>
        <p>{items.content2} </p>
        <p>{items.content3} </p>
        <p>{items.content4} </p>
        <p>{items.content5} </p>
        <p>{items.content6} </p>
      </div>
    ))}
   


  </div>
))}
{categoryDetails.subcategory2.map((subcategory, index) => (
  <div key={index} className="category-details-para">
    {subcategory.title && <h3>{subcategory.title}</h3>}
    
    {subcategory.images.map((image, imageIndex) => (
      <div key={imageIndex} className='category-details-wrap'>
        <img src={image.img1} alt={`Image ${imageIndex + 1}`} />
        <img src={image.img2} alt={`Image ${imageIndex + 2}`} />
      </div>
    ))}

    <div className='category-details-para'>
      <p>{subcategory.description}</p>
    </div>

    
    {subcategory.list_items.map((items, index) => (
      <div key={index} className='category-details-wrap'>
        <li>{items.content1} </li>
        <li>{items.content2} </li>
        <li>{items.content3} </li>
        <li>{items.content4} </li>
        <li>{items.content5} </li>
        <li>{items.content6} </li>
      </div>
    ))}


  </div>
))}
{categoryDetails.subcategory3.map((subcategory, index) => (
  <div key={index} className="category-details-para">
    {subcategory.title && <h3>{subcategory.title}</h3>}
    
    {subcategory.images.map((image, imageIndex) => (
      <div key={imageIndex} className='category-details-wrap'>
        <img src={image.img1} alt={`Image ${imageIndex + 1}`} />
        <img src={image.img2} alt={`Image ${imageIndex + 2}`} />
      </div>
    ))}

    <div className='category-details-para'>
      <p>{subcategory.description}</p>
    </div>

      
    {subcategory.list_items.map((items, index) => (
      <div key={index} className='category-details-wrap'>
        <li>{items.content1} </li>
        <li>{items.content2} </li>
        <li>{items.content3} </li>
        <li>{items.content4} </li>
        <li>{items.content5} </li>
        <li>{items.content6} </li>
      </div>
    ))}

  </div>
))}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetails;
