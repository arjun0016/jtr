import React from 'react'
import "../styles/brands.css"
import Brand1 from "../images/Brands/1.png"
import Brand2 from "../images/Brands/2.png"
import Brand3 from "../images/Brands/3.png"
import Brand4 from "../images/Brands/4.jpg"
import Brand5 from "../images/Brands/5.png"
import Brand6 from "../images/Brands/6.png"
import Brand7 from "../images/Brands/7.png"
import Brand8 from "../images/Brands/8.png"
import Brand9 from "../images/Brands/9.jpg"
import Brand10 from "../images/Brands/10.png"
import Brand11 from "../images/Brands/12.png"
import Brand12 from "../images/Brands/13.png"
import Brand13 from "../images/Brands/14.jpg"
import Brand14 from "../images/Brands/15.png"
import Slider from 'react-slick'




const Clients = () => {


  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed:1000,
    autoplaySpeed:1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className='brands'>
      
          <div className='about-img'>
         
            <div className='color-overlay'>
            </div>

            <div className='brands-heading'>
          <h2>
          {Array.from(`OUR BRANDS`).map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
      </div>

            <div className="scrolling-brands">
              <Slider {...settings}>
              <div className='scrolling-img' ><img src={Brand1} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand2} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand3} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand4} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand5} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand6} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand7} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand8} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand9} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand10} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand11} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand12} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand13} width={150} height={150} alt="" /></div>
              <div className='scrolling-img' ><img src={Brand14} width={150} height={150} alt="" /></div>
              </Slider>

              </div>
            </div>            
        </div>
  )
}

export default Clients