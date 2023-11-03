import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServicePageImg from "../../images/service.jpg"
import "../../styles/pages/servicepage.css"
import { Link } from 'react-router-dom';
import { categories } from './categoryData';



// const cards=[
//   {
//     id:1,
//     img:require("../../images/cards/laboratoryfurniture.jpg"),
//     name:"Labortory",
//     desc:"Elevate your laboratory environment with our high-quality, custom-designed laboratory furniture. We offer durable solutions that optimize functionality, safety, and aesthetics in industrial, educational, and healthcare settings.",
//     btn:"Read More"
//   },
//   {
//     id:2,
//     img:require("../../images/cards/fitings.jpeg"),
//     name:"Fitings",
//     desc:"Enhance the efficiency and organization of your laboratory with our top-notch laboratory fittings. We provide a wide range of fittings designed to meet the specific needs of modern laboratories,",
//     btn:"Read More"
//   }, {
//     id:3,
//     img:require("../../images/cards/equipments.JPG"),
//     name:"Equipments",
//     desc:"Equip your laboratory with state-of-the-art instruments and equipment. Our comprehensive selection of laboratory equipment includes cutting-edge technology for research, analysis, and experimentation.",
//     btn:"Read More"
//   }, {
//     id:4,
//     img:require("../../images/cards/interiorworks.jpg"),
//     name:"Interior",
//     desc:"Transform your space into a work of art with our expert interior design services. From conceptualization to execution, we create captivating interiors for offices and residential spaces,",
//     btn:"Read More"
//   }, {
//     id:5,
//     img:require("../../images/cards/kindergarten1.jpg"),
//     name:"Kindergarten",
//     desc:"Nurture young minds with our specially crafted kindergarten furniture. Our designs prioritize safety, comfort, and creativity to provide an ideal learning environment for children.",
//     btn:"Read More"
//   }, {
//     id:6,
//     img:require("../../images/cards/Educationalfurniture.jpg"),
//     name:"Educational",
//     desc:"Foster learning excellence with our educational furniture solutions. We offer a wide range of classroom furniture, library furnishings, and interactive learning tools designed to inspire students and educators alike.",
//     btn:"Read More"
//   }, {
//     id:7,
//     img:require("../../images/cards/officefurniture.jpg"),
//     name:"Office",
//     desc:"Elevate your workplace with our ergonomic and stylish office furniture. From modern workstations to ergonomic chairs, our office furniture solutions enhance productivity and aesthetics in your workspace.",
//     btn:"Read More"
//   }, {
//     id:8,
//     img:require("../../images/cards/Hospitalfurniture.jpg"),
//     name:"Hospital",
//     desc:"Provide comfort and care to patients with our hospital furniture solutions. We offer a range of durable and hygienic healthcare furnishings designed to meet the unique requirements of medical facilities.",
//     btn:"Read More"
//   }, {
//     id:9,
//     img:require("../../images/cards/LOCKER.jpg"),
//     name:"HPL Lockers",
//     desc:"Ensure security and organization with our High-Pressure Laminate (HPL) lockers. These robust lockers are suitable for various applications, including schools, gyms, and workplaces.",
//     btn:"Read More"
//   }, {
//     id:10,
//     img:require("../../images/cards/canteen.jpg"),
//     name:"Canteen",
//     desc:"Enhance dining experiences with our canteen furniture. We provide aesthetically pleasing and durable furnishings for cafeteria and canteen areas in schools.",
//     btn:"Read More"
//   }, {
//     id:11,
//     img:require("../../images/cards/cubicles.jpg"),
//     name:"Cubicles",
//     desc:"Create efficient workspaces with our cubicle solutions. Our customizable cubicles offer privacy and functionality, making them perfect for modern office environments.",
//     btn:"Read More"
//   },
//   { id:12,
//     img:require("../../images/cards/cubicles.jpg"),
//     name:"Library",
//     desc:"Create efficient workspaces with our cubicle solutions. Our customizable cubicles offer privacy and functionality, making them perfect for modern office environments.",
//     btn:"Read More"
//   },

// ]



const ServicePage = () => {
  const images =["https://smartlab-pi.vercel.app/images/background/service-parllax-1-1.png","https://smartlab-pi.vercel.app/images/resources/2.JPG","https://smartlab-pi.vercel.app/images/background/inner-banner-bg-1-1.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index, looping back to 0 if it exceeds the number of images
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds (adjust the timing as needed)

    return () => {
      // Clear the interval when the component unmounts to avoid memory leaks
      clearInterval(interval);
    };
  });



  useEffect(() => {
    Aos.init();
  },[]);


    return (
      <div className='servicepage'>
        <Navbar />
        <div className='servicepage-img'>
          <img src={ServicePageImg} alt="" />
        </div>
  
        <div className='servicepagec mt-5' >
          <div className='servicepage-content'>
        <h1>
              {Array.from("OUR PRODUCTS").map((letter, index) => (
        <span
          key={index}
          data-aos="fade-right"
          data-aos-delay={index * 100}      >
          {letter}
        </span>
      ))}
              </h1>
          <hr className='w-50'/>
          <p data-aos="fade-right">Where Imagination Meets Interiors
          </p>
          </div>
      
          <div className="card-container mt-5" data-aos="fade-right">
          {categories.map((card)=>(
        <div className="cards" key={card.cid}>
            <img src={card.cardImg} alt="F.jpeg" className="model-picture"/>
            <h2 className="type">{card.name}</h2>
            <p className="card-description">{card.cardDesc}</p>
            <div className="shopping-container">
            <Link to={`/categorypage/${card.cid}`}>
            <button className='btn btn-outline-dark' >{card.button}</button>
            </Link>
            </div>
        </div>
        ))}
        </div>
   
        </div>
        <Footer/>      
      </div>
    )
  }

export default ServicePage