import React from 'react'
import "../styles/clients.css"
import client1 from "../images/clients/client1.jpg"
import client2 from "../images/clients/client2.png"
import client3 from "../images/clients/client3.png"
import client4 from "../images/clients/client4.png"
import client5 from "../images/clients/client5.png"
import client8 from "../images/clients/client8.png"
import client9 from "../images/clients/client9.png"
import client10 from "../images/clients/client10.jpg"
import client11 from "../images/clients/client11.png"
import client12 from "../images/clients/client12.jpg"
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
    rtl:true,
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
    <div className='client'>
      
          <div className='about-img'>

            <div className='client-heading'>
          <h2>
          {Array.from(`OUR CLIENTS`).map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
      </div>

      <div className='brands-slick d-flex justify-content-center align-items-center'>


<Slider {...settings} className='slider mt-5'>
  <div className='brands-box'>
    <img src={client1}  alt="" />
  </div>
  <div className='brands-box '>
  <img src={client2}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client3}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client4}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client5}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client8}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client9}  alt="" />
  </div>
  <div className='brands-box'>
  <img src={client10} width={140} height={100} alt="" />
  </div>
  <div className='brands-box'>
  <img src={client11} width={140} height={100} alt="" />
  </div>
  <div className='brands-box'>
  <img src={client12} width={140} height={100} alt="" />
  </div>
  {/* <div className='brands-box'>
  <img src={client13} width={140} height={100} alt="" />
  </div>
  <div className='brands-box'>
  <img src={Brand12} width={140} height={100} alt="" />
  </div>
  <div className='brands-box'> 
  <img src={Brand13} width={140} height={100} alt="" />
  </div>
  <div className='brands-box'>
  <img src={Brand14} width={140} height={100} alt="" />
  </div> */}
</Slider>
</div>
            </div>            
        </div>
  )
}

export default Clients