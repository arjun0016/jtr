import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Navbar from "./Navbar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import Clients from "./Clients";
import Category from "./Category";
import Contacts from "./Contacts";
import Brandslick from "./Brands-slick";
import Slider from "react-slick";
import slide1 from "../images/3.jpg";
import slide2 from "../images/lab/03.jpg";
import slide3 from "../images/lab/05.JPG";
import slide4 from "../images/lab/15.jpg";
import slide5 from "../images/lab/12.jpg";
import slide6 from "../images/lab/19.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    AOS.init({
      offset: 200
    });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className="home">
      <Navbar />

      <Slider className="first-slide" {...settings} ref={sliderRef}>
        <div className="slider-container">
          <h1 data-aos="fade-down">ELAGANT AND QUALITY LABORATORY FURNITURE</h1>
          <img className="slide-img" src={slide1} alt="" />
        </div>
        <div className="slider-container">
          <h1 data-aos="fade-down">
            STUNNING INTERIOR
            <br /> WORKS
          </h1>
          <img className="slide-img" src={slide2} alt="" />
        </div>
        <div className="slider-container">
          <h1 data-aos="fade-down">MODERN AND CLASSIC OFFICE FURNITURE</h1>
          <img className="slide-img" src={slide3} alt="" />
        </div>
        <div className="slider-container">
          <h1 data-aos="fade-down">ELAGANT AND QUALITY LABORATORY FURNITURE</h1>
          <img className="slide-img" src={slide4} alt="" />
        </div>
        <div className="slider-container">
          <h1 data-aos="fade-down">ELAGANT AND QUALITY LABORATORY FURNITURE</h1>
          <img className="slide-img" src={slide5} alt="" />
        </div>
        <div className="slider-container">
          <h1 data-aos="fade-down">ELAGANT AND QUALITY LABORATORY FURNITURE</h1>
          <img className="slide-img" src={slide6} alt="" />
        </div>
      </Slider>
      <div className="controls-container">
        <button className="btn btn-outline-light" onClick={prevSlide}>
          <MdOutlineArrowBackIosNew />
        </button>
        <button className="btn btn-outline-light" onClick={nextSlide}>
          <MdOutlineArrowForwardIos />
        </button>
      </div>
      <div className="brochure-btn">
        <button className=" btn btn-outline-light">Download Brochure</button>
      </div>


      <About />
      <Services />
      <Clients />
      <Category />
      <Brandslick />
      <Contacts />
      {/* <FactoryProcess/> */}
      <Footer />
    </div>
  );
};

export default Home;
