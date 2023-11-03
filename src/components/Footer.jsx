import React from 'react'
import "../styles/footer.css"
import logo from "../images/Logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleMap from './maps';


const Footer = () => {
  return (
    <div>

        <div className='footer'>
            <div className='footer-image-container'>
                <img className='footer-background' src="https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/composition-living-room-interior-with-copy-spaceplants-cacti-boho-accessories-template.jpg" alt="" />

{/* 
                <div className='footer-logo d-flex mt-2'>
              <img src={logo} alt="img"className='footer-logo-img me-2'/>
              <h2>Smart Lab</h2>
              </div> */}


                <div className='footer-content'>
                <div className='contacts '>
    <h3>Contact Us</h3>
   <form id="contact-form" method="post">
      {/* <label for="name">Full name</label> */}
  <input type="text" id="name" name="name" placeholder="Your Full Name" required/>
      {/* <label for="email">Email Address</label> */}
  <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
      {/* <label for="message">Message</label> */}
  <textarea rows="1" placeholder="Your Message" id="message" name="message" required></textarea>
      {/* <a href="javascript:void(0)">--><button type="submit" id="submit" name="submit">Send</button><!--</a>--> */}
</form>
<button className='contact-btn' type="submit" id="submit" name="submit">Send</button>
    
   </div>
              <div className='pages '>
                <h3>Quick Links</h3>
                <p className='mt'><a href="/">Home</a></p>
                <p><a href="/aboutpage">About Us</a></p>
                <p><a href="/servicepage">Products</a></p>
                <p><a href="/projectpage">Projects</a></p>
                <p><a href="/contactpage">Contact Us</a></p>
              </div>
              {/* <div className='company mt-3'>
                <h2>COMPANY</h2>
                <p>About Us</p>
                <p>About Us</p>
                <p>About Us</p>
                <p>About Us</p>
              </div> */}
              <div className='info '>
                <h3>Contact Info</h3>
                <p className='mt'>Musaffah MW-05,</p>
                <p>Abu Dhabi, U.A.E</p>
                <p>+971 (0) 2 6395055</p>
              </div>
              <div className='mapped'>
                <h3>Our Location</h3>
                <GoogleMap/>
              </div>


            </div>




            </div>
           

        </div>

        <div className='copyrights w-100'>
          <p>SmartLab&copy;2023 All Right Reserved.</p>
          <a href="https://alkatefitsolutions.com/">Designed by AL KATEF IT SOLUTIONS</a>
        </div>
        
    </div>
  )
}

export default Footer