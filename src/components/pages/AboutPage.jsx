import React, { useEffect, useState } from 'react'
import "../../styles/pages/aboutpage.css"
import aboutPageImg from "../../images/about.jpg"



import Navbar from '../Navbar'
import Footer from '../Footer'
import Aos from 'aos'
import Accordion from '../Accordion'


const AboutPage = () => {

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
  }, [currentIndex]);



  useEffect(() => {
    Aos.init();
  },[]);


  return (
    <div className='aboutpage'>
      <Navbar />
      <div className='aboutpage-img'>
        <img src={aboutPageImg} alt="" />
      </div>

      <div className='aboutpagec mt-5' >
        <div className='aboutpage-content'>
      <h1>
            {Array.from("WHO WE ARE").map((letter, index) => (
      <span
        key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100}      >
        {letter}
      </span>
    ))}
            </h1>
        <hr className='w-75'/>
        <p data-aos="fade-right">Where Imagination Meets Interiors
        </p>
        </div>

        <div className='aboutpage-slideshow mt-5'>
      <img data-aos="fade-right" data-aos-delay={500} src={images[currentIndex]} alt={`Images ${currentIndex + 1}`} />
      </div>

      </div>

      <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para'>
        <h1>Our Story</h1>
        <p className='text-dark'>
        Smart Laboratory Furniture and Decor LLC is a prominent interior design firm based in the UAE,
         specializing in crafting innovative and captivating interiors for a diverse range of spaces, including offices,
          educational institutions, residential dwellings, and commercial establishments. Our expertise extends to the manufacturing
           of high-quality laboratory furniture tailored to the needs of industrial, educational, and healthcare sectors. With a dedicated
            and diligent team, we consistently deliver projects on schedule, ensuring impeccable quality and personalized design solutions that
             align with your budget.
             </p>
      </div>

      <hr className='w-75 me-auto ms-auto'/>
      <div className='d-flex justify-content-center mt-5'>
          <Accordion/>
          </div>

      


      <Footer/>      
    </div>
  )
}

export default AboutPage