import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import "../../styles/pages/categorydetails.css"
import { categories } from './categoryData';



const CategoryDetails = () => {


  const { id , cid } = useParams();
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {

    const selectedCategory = categories.find(
      (category) => category.id === parseInt(id) || category.cid === parseInt(cid)
    );
    setCategoryDetails(selectedCategory);
  }, [categories, id, cid]);

  if (!categoryDetails) {
    return <p>Category not found</p>;
  }
  return (
    <div>
      <div className='category-detailspage'>
      <Navbar />
    
      <div className='category-detailspage-img'>
        <img  src={categoryDetails.bgimg} alt={categoryDetails.name}  />
      </div>
     

      <div className='category-detailspagec' >
        <div className='category-details-content'>
      <h1>
            {Array.from(`${categoryDetails.name}`).map((letter, index) => (
      <span
        key={index}
        // data-aos="fade-right"
        data-aos-delay={index * 100}      >
        {letter}
      </span>
    ))}
            </h1>
        <hr className='w-75 '/>
        </div>

       {categoryDetails.process &&<h3>{categoryDetails.process}</h3>}


              <div className='category-details-wrap'>
            <img id='co' src={categoryDetails.img1} alt="" />
            <img id='co' src={categoryDetails.img2} alt="" />
            <img id='co' src={categoryDetails.img3} alt="" />
          </div>
          {categoryDetails.content1 &&
        <div  className='category-details-para'>

        {categoryDetails.content1 && <p>{categoryDetails.content1}</p>}

        <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 '>
      {categoryDetails.img24 && <img className='hospital-img' src={categoryDetails.img24} alt="" />}
      {categoryDetails.img25 && <img className='hospital-img' src={categoryDetails.img25} alt="" />}
      </div>
      <div className='d-flex flex-wrap justify-content-center align-items-center w-100 mt-4 mb-4'>
       {categoryDetails.img30 && <img className='toilet w-75' src={categoryDetails.img30} alt="" />}
       </div>

        {categoryDetails.content2 && <p>{categoryDetails.content2}</p>}
        {categoryDetails.content3 && <p>{categoryDetails.content3}</p>}

        <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
      {categoryDetails.img26 && <img className='hospital-img' src={categoryDetails.img26} alt="" />}
      </div>


        {categoryDetails.content4 && <p>{categoryDetails.content4}</p>}
        {categoryDetails.content5 && <p>{categoryDetails.content5}</p>}

        <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
      {categoryDetails.img27 && <img className='hospital-img ' src={categoryDetails.img27} alt="" />}
      {categoryDetails.img28 && <img className='hospital-img' src={categoryDetails.img28} alt="" />}
      </div>

        {categoryDetails.content6 && <p>{categoryDetails.content6}</p>}
        {categoryDetails.content7 && <p>{categoryDetails.content7}</p>}
        {categoryDetails.content8 && <p>{categoryDetails.content8}</p>}
        {categoryDetails.content9 && <p>{categoryDetails.content9}</p>}
        {categoryDetails.content9a && <p>{categoryDetails.content9a}</p>}
        {categoryDetails.content9b && <p>{categoryDetails.content9b}</p>}
        {categoryDetails.content9c && <p>{categoryDetails.content9c}</p>}
        {categoryDetails.content9d && <p>{categoryDetails.content9d}</p>}
      </div>
      }

      <div  className='category-details-para'>
       {categoryDetails.process1 &&<h3>{categoryDetails.process1}</h3>}
       <div className='d-flex flex-wrap justify-content-center align-items-center w-100 mt-4'>
       {categoryDetails.img29 && <img className='toilet w-75' src={categoryDetails.img29} alt="" />}
       </div>

      </div>

      <div className='category-details-wrap'>
      {categoryDetails.img4 && <img src={categoryDetails.img4} alt="" />}
            {categoryDetails.img5 && <img src={categoryDetails.img5} alt="" />}
            {categoryDetails.img6 && <img src={categoryDetails.img6} alt="" />}
          </div>

          {categoryDetails.content10 &&
        <div  className='category-details-para'>
        {categoryDetails.content10 && <p>{categoryDetails.content10}</p>}
        {categoryDetails.content11 && <p>{categoryDetails.content11}</p>}
        {categoryDetails.content12 && <p>{categoryDetails.content12}</p>}
        {categoryDetails.content13 && <p>{categoryDetails.content13}</p>}
        {categoryDetails.content14 && <p>{categoryDetails.content14}</p>}
        {categoryDetails.content15 && <p>{categoryDetails.content15}</p>}
        {categoryDetails.content16 && <p>{categoryDetails.content16}</p>}
        {categoryDetails.content17 && <p>{categoryDetails.content17}</p>}
        {categoryDetails.content17a && <p>{categoryDetails.content17a}</p>}
        {categoryDetails.content17b && <p>{categoryDetails.content17b}</p>}
      </div>

}

      <div  className='category-details-para'>
      {categoryDetails.process2 &&<h3>{categoryDetails.process2}</h3>}

      </div>

      <div className='category-details-wrap'>
            {categoryDetails.img7 && <img src={categoryDetails.img7} alt="" />}
            {categoryDetails.img8 && <img src={categoryDetails.img8} alt="" />}
          </div>
          {categoryDetails.content18 &&
        <div  className='category-details-para'>
        {categoryDetails.content18 && <p>{categoryDetails.content18}</p>}
        {categoryDetails.content19 && <p>{categoryDetails.content19}</p>}
        {categoryDetails.content20 && <p>{categoryDetails.content20}</p>}
        {categoryDetails.content21 && <p>{categoryDetails.content21}</p>}
        {categoryDetails.content22 && <p>{categoryDetails.content22}</p>}
        {categoryDetails.content23 && <p>{categoryDetails.content23}</p>}
        {categoryDetails.content24 && <p>{categoryDetails.content24}</p>}
        {categoryDetails.content25 && <p>{categoryDetails.content25}</p>}
        {categoryDetails.content26 && <p>{categoryDetails.content26}</p>}
      </div>   
      }  

      <div  className='category-details-para'>
      {categoryDetails.process3 &&<h3>{categoryDetails.process3}</h3>}

      </div>

      <div className='category-details-wrap'>
            {categoryDetails.img9 && <img src={categoryDetails.img9} alt="" />}
            {categoryDetails.img10 && <img src={categoryDetails.img10} alt="" />}
          </div>
          {categoryDetails.content27 &&
        <div  className='category-details-para'>
        {categoryDetails.content27 && <p>{categoryDetails.content27}</p>}
        {categoryDetails.content28 && <p>{categoryDetails.content28}</p>}
        {categoryDetails.content29 && <p>{categoryDetails.content29}</p>}
        {categoryDetails.content30 && <p>{categoryDetails.content30}</p>}
        {categoryDetails.content31 && <p>{categoryDetails.content31}</p>}
        {categoryDetails.content32 && <p>{categoryDetails.content32}</p>}
        {categoryDetails.content33 && <p>{categoryDetails.content33}</p>}
        {categoryDetails.content34 && <p>{categoryDetails.content34}</p>}
        {categoryDetails.content35 && <p>{categoryDetails.content35}</p>}
      </div> 
      }    

      <div  className='category-details-para'>
      {categoryDetails.process4 &&<h3>{categoryDetails.process4}</h3>}

      </div>

      <div className='category-details-wrap'>
            {categoryDetails.img11 && <img src={categoryDetails.img11} alt="" />}
            {categoryDetails.img12 && <img src={categoryDetails.img12} alt="" />}
          </div>
          {categories.content27 &&
        <div  className='category-details-para'>
        {categoryDetails.content27 && <p>{categoryDetails.content27}</p>}
        {categoryDetails.content28 && <p>{categoryDetails.content28}</p>}
        {categoryDetails.content29 && <p>{categoryDetails.content29}</p>}
        {categoryDetails.content30 && <p>{categoryDetails.content30}</p>}
        {categoryDetails.content31 && <p>{categoryDetails.content31}</p>}
        {categoryDetails.content32 && <p>{categoryDetails.content32}</p>}
        {categoryDetails.content33 && <p>{categoryDetails.content33}</p>}
        {categoryDetails.content34 && <p>{categoryDetails.content34}</p>}
        {categoryDetails.content35 && <p>{categoryDetails.content35}</p>}
      </div>  
      }
      
      <div  className='category-details-para'>
      {categoryDetails.process5 &&<h3>{categoryDetails.process5}</h3>}

      </div>

      <div className='category-details-wrap'>
            {categoryDetails.img13 && <img src={categoryDetails.img13} alt="" />}
            {categoryDetails.img14 && <img src={categoryDetails.img14} alt="" />}
          </div>

          {categoryDetails.content36 &&
          <div  className='category-details-para'>
        {categoryDetails.content36 && <p>{categoryDetails.content36}</p>}
        {categoryDetails.content37 && <p>{categoryDetails.content37}</p>}
        {categoryDetails.content38 && <p>{categoryDetails.content38}</p>}
        {categoryDetails.content39 && <p>{categoryDetails.content39}</p>}
        {categoryDetails.content40 && <p>{categoryDetails.content40}</p>}
        {categoryDetails.content41 && <p>{categoryDetails.content41}</p>}
        {categoryDetails.content42 && <p>{categoryDetails.content42}</p>}
        {categoryDetails.content43 && <p>{categoryDetails.content43}</p>}
        {categoryDetails.content44 && <p>{categoryDetails.content44}</p>}
      </div> 
      }


      <div  className='category-details-para'>
      {categoryDetails.process6 &&<h3>{categoryDetails.process6}</h3>}

      </div>
              {categoryDetails.img15 &&
      <div className='category-details-wrap'>
            {categoryDetails.img15 && <img src={categoryDetails.img15} alt="" />}
            {categoryDetails.img16 && <img src={categoryDetails.img16} alt="" />}
          </div>
          }
          {categoryDetails.content45 &&
          <div  className='category-details-para'>
        {categoryDetails.content45 && <p>{categoryDetails.content45}</p>}
        {categoryDetails.content46 && <p>{categoryDetails.content46}</p>}
        {categoryDetails.content47 && <p>{categoryDetails.content47}</p>}
        {categoryDetails.content48 && <p>{categoryDetails.content48}</p>}
        {categoryDetails.content49 && <p>{categoryDetails.content49}</p>}
        {categoryDetails.content50 && <p>{categoryDetails.content50}</p>}
        {categoryDetails.content51 && <p>{categoryDetails.content51}</p>}
        {categoryDetails.content52 && <p>{categoryDetails.content52}</p>}
        {categoryDetails.content53 && <p>{categoryDetails.content53}</p>}
      </div> 
      }



      <div className='ed-fr w-100'>
        <div className='ed-img' >
        {categoryDetails.img20 && <img src={categoryDetails.img20} alt="" />}
        </div>
        <div className='ed-para'>
          {categoryDetails.content54 && <p>{categoryDetails.content54} </p>}
        </div>
      </div>
      <div className='ed-fr w-100'>
        <div className='ed-img' >
        {categoryDetails.img21 && <img src={categoryDetails.img21} alt="" />}
        </div>
        <div className='ed-para'>
          {categoryDetails.content55 && <p>{categoryDetails.content55} </p>}
        </div>
      </div><div className='ed-fr w-100'>
        <div className='ed-img' >
        {categoryDetails.img22 && <img src={categoryDetails.img22} alt="" />}
        </div>
        <div className='ed-para'>
          {categoryDetails.content56 && <p>{categoryDetails.content56} </p>}
        </div>
      </div><div className='ed-fr w-100'>
        <div className='ed-img' >
        {categoryDetails.img23 && <img src={categoryDetails.img23} alt="" />}
        </div>
        <div className='ed-para'>
          {categoryDetails.content57 && <p>{categoryDetails.content57} </p>}
        </div>
      </div>

        


      </div>
      <Footer/>      
    </div>

    </div>
  );
};
export default CategoryDetails;





