import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { categories } from './categoryData';
import "../../styles/pages/moredetails.css";
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const MoreDetails = () => {
  const { id, cid } = useParams();
  const [moreDetails, setMoreDetails] = useState(null);


  useEffect(() => {
    const selectedCategory = categories.find(
      (category) =>
        category.subcategory &&
        category.subcategory.some((sub) => sub.subid === parseInt(id)) ||
        category.subcategory2 &&
        category.subcategory2.some((sub) => sub.subid === parseInt(id)) ||
        category.subcategory3 &&
        category.subcategory3.some((sub) => sub.subid === parseInt(id)) ||
        category.subcategory4 &&
        category.subcategory4.some((sub) => sub.subid === parseInt(id)) ||
        category.subcategory5 &&
        category.subcategory5.some((sub) => sub.subid === parseInt(id)) ||
        category.subcategory6 &&
        category.subcategory6.some((sub) => sub.subid === parseInt(id)) 
    );
    setMoreDetails(selectedCategory);
  }, [id]);
  

  if (!moreDetails) {
    return <p>Category not found</p>;
  }

  return (
    <div>
      <div className='moredetails'>
        <Navbar />

        <div className="moredetails-img">
          <img src={moreDetails.bgimg} alt={moreDetails.name}>
            </img>

        </div>
        <Sidebar />


<div className='moredetails-all'>


          <div className="category-details-content">
            <h1>
              {Array.from(`${moreDetails.name}`).map((letter, index) => (
                <span
                  key={index}
                  // data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <hr  />
          </div>
        

        { id==='111' && moreDetails.subcategory && moreDetails.subcategory.map((subcategory) => (
          <>
            {subcategory.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

                    <div className='series-img'>
                      <img src={subcategory.images[0].img1}  className='ms-2'  alt="" />
                      <img src={subcategory.images[0].img2}  className='ms-2'  alt="" />


                    </div>

                    <div className='moredetails-desc'><p> {subcategory.description}</p>

                    <div className='moredetails-list'>
                    <p>{subcategory.list_items[0].content1}</p>
                    <p>{subcategory.list_items[0].content2}</p>
                    <p>{subcategory.list_items[0].content3}</p>
                    <p>{subcategory.list_items[0].content4}</p>
                    <p>{subcategory.list_items[0].content5}</p>
                    <p>{subcategory.list_items[0].content6}</p>
                    </div>
                    </div>

                
              </>
            )}
          </>
        ))}
        { id==='112' && moreDetails.subcategory2 && moreDetails.subcategory2.map((subcategory2) => (
          <>
            {subcategory2.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory2.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-img'>
                      <img src={subcategory2.images[0].img1}  className='ms-2'  alt="" />
                      <img src={subcategory2.images[0].img2}  className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'> <p> {subcategory2.description}</p>

                    <div className='moredetails-list'>
                    <p>{subcategory2.list_items[0].content1}</p>
                    <p>{subcategory2.list_items[0].content2}</p>
                    <p>{subcategory2.list_items[0].content3}</p>
                    <p>{subcategory2.list_items[0].content4}</p>
                    <p>{subcategory2.list_items[0].content5}</p>
                    <p>{subcategory2.list_items[0].content6}</p>
                    </div>
                    </div>
              </>
            )}
          </>
        ))}
        { id==='113' && moreDetails.subcategory3 && moreDetails.subcategory3.map((subcategory3) => (
          <>
            {subcategory3.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory3.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-img'>
                      <img src={subcategory3.images[0].img1} className='ms-2'  alt="" />
                      <img src={subcategory3.images[0].img2} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory3.description} </p>

                    <div className='moredetails-list'>
                    <p>{subcategory3.list_items[0].content1}</p>
                    <p>{subcategory3.list_items[0].content2}</p>
                    <p>{subcategory3.list_items[0].content3}</p>
                    <p>{subcategory3.list_items[0].content4}</p>
                    <p>{subcategory3.list_items[0].content5}</p>
                    <p>{subcategory3.list_items[0].content6}</p>
                    </div>
                    </div>

              </>
            )}
          </>
        ))}

{ id==='114' && moreDetails.subcategory && moreDetails.subcategory.map((subcategory) => (
          <>
            {subcategory.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-img'>
                      <img src={subcategory.images[0].img24} className='ms-2'  alt="" />
                      <img src={subcategory.images[0].img25} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory.description} </p></div>

                 

              </>
            )}
          </>
        ))}
        { id==='115' && moreDetails.subcategory2 && moreDetails.subcategory2.map((subcategory2) => (
          <>
            {subcategory2.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory2.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-img'>
                      <img src={subcategory2.images[0].img26} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory2.description} </p></div>

                 

              </>
            )}
          </>
        ))}
        { id==='116' && moreDetails.subcategory3 && moreDetails.subcategory3.map((subcategory3) => (
          <>
            {subcategory3.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory3.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-img'>
                      <img src={subcategory3.images[0].img27} className='ms-2'  alt="" />
                      <img src={subcategory3.images[0].img28} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory3.description} </p></div>

                 

              </>
            )}
          </>
        ))}
        { id==='117' && moreDetails.subcategory && moreDetails.subcategory.map((subcategory) => (
          <>
            {subcategory.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='series-toilet-img'>
                      <img src={subcategory.images[0].img30} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory.description} </p>

                    <div className='moredetails-list'>
                    <p>{subcategory.list_items[0].content10}</p>
                    <p>{subcategory.list_items[0].content11}</p>
                    <p>{subcategory.list_items[0].content12}</p>
                    <p>{subcategory.list_items[0].content13}</p>
                    <p>{subcategory.list_items[0].content14}</p>
                    <p>{subcategory.list_items[0].content15}</p>
                    <p>{subcategory.list_items[0].content16}</p>
                    <p>{subcategory.list_items[0].content17}</p>
                    <p>{subcategory.list_items[0].content17a}</p>
                    <p>{subcategory.list_items[0].content17b}</p>
                    </div>
                    </div>

                 

              </>
            )}
          </>
        ))}

{ id==='118' && moreDetails.subcategory && moreDetails.subcategory.map((subcategory) => (
          <>
            {subcategory.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='eyewash-container'>
                <h4>{subcategory.process1}</h4>
                <img className='eyewash' src={subcategory.img4} alt="" />
              </div>
              <div className='eyewash-container'>
              <h4>{subcategory.process2}</h4>
              <img className='eyewash' src={subcategory.img7} alt="" />
              </div>
              <div className='eyewash-container'>
                <h4>{subcategory.process3}</h4>
                <img className='eyewash' src={subcategory.img9} alt="" />
              </div>
              <div className='eyewash-container'>
              <h4>{subcategory.process4}</h4>
              <img className='eyewash' src={subcategory.img11} alt="" />
              </div>
              <div className='eyewash-container'>
                <h4>{subcategory.process5}</h4>
                <img className='eyewash' src={subcategory.img13} alt="" />
              </div>

             
                 

              </>
            )}
          </>
        ))}

{ id==='119' && moreDetails.subcategory2 && moreDetails.subcategory2.map((subcategory2) => (
          <>
            {subcategory2.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory2.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='worktops'>
                      <img src={subcategory2.img1} className='ms-2'  alt="" />
                    </div>
              </>
            )}
          </>
        ))}
{ id==='120' && moreDetails.subcategory3 && moreDetails.subcategory3.map((subcategory3) => (
          <>
            {subcategory3.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory3.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='worktops'>
                      <img src={subcategory3.img2} className='ms-2'  alt="" />
                    </div>
              </>
            )}
          </>
        ))}
{ id==='121' && moreDetails.subcategory4 && moreDetails.subcategory4.map((subcategory4) => (
          <>
            {subcategory4.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory4.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='worktops'>
                      <img src={subcategory4.img3} className='ms-2'  alt="" />
                    </div>
              </>
            )}
          </>
        ))}
{ id==='122' && moreDetails.subcategory5 && moreDetails.subcategory5.map((subcategory5) => (
          <>
            {subcategory5.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory5.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='worktops'>
                      <img src={subcategory5.img50} className='ms-2'  alt="" />
                    </div>
              </>
            )}
          </>
        ))}
{ id==='123' && moreDetails.subcategory && moreDetails.subcategory.map((subcategory) => (
          <>
            {subcategory.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='fumehood'>
                      <img src={subcategory.images[0].img1} className='ms-2'  alt="" />
                      <img src={subcategory.images[0].img2} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory.description} </p></div>

              </>
            )}
          </>
        ))}
{ id==='124' && moreDetails.subcategory2 && moreDetails.subcategory2.map((subcategory2) => (
          <>
            {subcategory2.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory2.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='fumehood'>
                      <img src={subcategory2.images[0].img1} className='ms-2'  alt="" />
                      <img src={subcategory2.images[0].img2} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory2.description} </p></div>

              </>
            )}
          </>
        ))}
{ id==='125' && moreDetails.subcategory3 && moreDetails.subcategory3.map((subcategory3) => (
          <>
            {subcategory3.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory3.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

              <div className='fumehood'>
                      <img src={subcategory3.images[0].img9} className='ms-2'  alt="" />
                    </div>

                    <div className='moredetails-desc'><p> {subcategory3.description} </p></div>

                    <div className='bio mt-5'>
                      <img src={subcategory3.images[0].imgbio} className='ms-2'  alt="" />
                      <img src={subcategory3.images[0].imgbio2} className='ms-2'  alt="" />
                      <img src={subcategory3.images[0].imgbio1} className='ms-2'  alt="" />
                      <img src={subcategory3.images[0].imgbio3} className='ms-2'  alt="" />
                    </div>
              </>
            )}
          </>
        ))}
{ id==='126' && moreDetails.subcategory4 && moreDetails.subcategory4.map((subcategory4) => (
          <>
            {subcategory4.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory4.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

                    <div className='fumehoodh'>
                      <img src={subcategory4.imgho} className='ms-2'  alt="" />
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle}</p>
                    
                    <div>
                      <p>{subcategory4.list_items[0].point1}</p>
                      <p>{subcategory4.list_items[0].point2}</p>
                      <p>{subcategory4.list_items[0].point3}</p>
                      <p>{subcategory4.list_items[0].point4}</p>

                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle2}</p>
                    
                    <div>
                      <p>{subcategory4.list_items2[0].point1}</p>
                      <p>{subcategory4.list_items2[0].point2}</p>
                      <p>{subcategory4.list_items2[0].point3}</p>
                      <p>{subcategory4.list_items2[0].point4}</p>
                      <p>{subcategory4.list_items2[0].point5}</p>
                      <p>{subcategory4.list_items2[0].point6}</p>
                      <p>{subcategory4.list_items2[0].point7}</p>

                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle3}</p>
                    
                    <div>
                      <p>{subcategory4.list_items3[0].point1}</p>
                      <p>{subcategory4.list_items3[0].point2}</p>
                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle4}</p>
                    
                    <div>
                      <p>{subcategory4.list_items4[0].point1}</p>
                      <p>{subcategory4.list_items4[0].point2}</p>
                    </div>
                    </div>
                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle5}</p>
                    
                    <div>
                      <p>{subcategory4.list_items5[0].point1}</p>
                      <p>{subcategory4.list_items5[0].point2}</p>
                      <p>{subcategory4.list_items5[0].point3}</p>
                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle6}</p>
                    
                    <div>
                      <p>{subcategory4.list_items6[0].point1}</p>
                      <p>{subcategory4.list_items6[0].point2}</p>
                      <p>{subcategory4.list_items6[0].point3}</p>
                    </div>
                    </div>
                    <div className='laminar mt-5'>
                      <p>{subcategory4.subtitle7}</p>
                    
                    <div>
                      <p>{subcategory4.list_items7[0].point1}</p>
             
                    </div>
                    </div>

                

              </>
            )}
          </>
        ))}
{ id==='127' && moreDetails.subcategory5 && moreDetails.subcategory5.map((subcategory5) => (
          <>
            {subcategory5.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory5.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>

                    <div className='fumehoodh'>
                      <img src={subcategory5.imgve} className='ms-2'  alt="" />
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle}</p>
                    
                    <div>
                      <p>{subcategory5.list_items[0].point1}</p>
                      <p>{subcategory5.list_items[0].point2}</p>
                      <p>{subcategory5.list_items[0].point3}</p>
                      <p>{subcategory5.list_items[0].point4}</p>

                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle2}</p>
                    
                    <div>
                      <p>{subcategory5.list_items2[0].point1}</p>
                      <p>{subcategory5.list_items2[0].point2}</p>
                      <p>{subcategory5.list_items2[0].point3}</p>
                      <p>{subcategory5.list_items2[0].point4}</p>
                      <p>{subcategory5.list_items2[0].point5}</p>
                      <p>{subcategory5.list_items2[0].point6}</p>
                      <p>{subcategory5.list_items2[0].point7}</p>

                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle3}</p>
                    
                    <div>
                      <p>{subcategory5.list_items3[0].point1}</p>
                      <p>{subcategory5.list_items3[0].point2}</p>
                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle4}</p>
                    
                    <div>
                      <p>{subcategory5.list_items4[0].point1}</p>
                      <p>{subcategory5.list_items4[0].point2}</p>
                    </div>
                    </div>
                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle5}</p>
                    
                    <div>
                      <p>{subcategory5.list_items5[0].point1}</p>
                      <p>{subcategory5.list_items5[0].point2}</p>
                      <p>{subcategory5.list_items5[0].point3}</p>
                    </div>
                    </div>

                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle6}</p>
                    
                    <div>
                      <p>{subcategory5.list_items6[0].point1}</p>
                      <p>{subcategory5.list_items6[0].point2}</p>
                      <p>{subcategory5.list_items6[0].point3}</p>
                    </div>
                    </div>
                    <div className='laminar mt-5'>
                      <p>{subcategory5.subtitle7}</p>
                    
                    <div>
                      <p>{subcategory5.list_items7[0].point1}</p>
             
                    </div>
                    </div>

              </>
            )}
          </>
        ))}
{ id==='128' && moreDetails.subcategory6 && moreDetails.subcategory6.map((subcategory6) => (
          <>
            {subcategory6.title && (
              <>
              <div className="moredetails-heading">
                <h2>
                  {Array.from(`${subcategory6.title}`).map((letter, index) => (
                    <span
                      key={index}
                      // data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {letter}
                    </span>
                  ))}
                </h2>
                <hr  />
              </div>
              <div className='moredetails-desc'><p> {subcategory6.subtitle} </p></div>


          
                    
                    <div className='laminar mt-5'>
                      <p>{subcategory6.list_items[0].point1}</p>
                      <p>{subcategory6.list_items[0].point2}</p>
                      <p>{subcategory6.list_items[0].point3}</p>
                      </div>

              <div className='series-img'>
                      <img src={subcategory6.images[0].img1}  className='ms-2'  alt="" />
                      <img src={subcategory6.images[0].img2}  className='ms-2'  alt="" />
                      <img src={subcategory6.images[0].img3}  className='ms-2'  alt="" />
                    </div>

                    
                    

                    

              </>
            )}
          </>
        ))}


</div>
<Footer />
      </div>

    </div>
  );
};

export default MoreDetails;
