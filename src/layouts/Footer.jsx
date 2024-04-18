import React from 'react';
import Group27 from '../assets/Group 27.png';
import Vector from '../assets/Vector.png';
import facebook from '../assets/Component 6.png';
import twitter from '../assets/Component 7.png';
import instagram from '../assets/Component 8.png';
import youtube from '../assets/Component 9.jpg';
import otherImage1 from '../assets/Frame 9.png'; 
import otherImage2 from '../assets/Frame 10.png';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='bg-black foot py-2'> 
        <section className=' container my-4'>
          <div className='d-lg-flex justify-content-between align-items-center gap-4'>
           
           <div className='flex-column-reverse flex-lg-row d-flex'>
           <div className='d-lg-flex  gap-2'>
              <img src={Group27} alt="" />
              <h3 className='fs-5 txt text-light w-50'>24/7 <span>Support</span></h3> 
            </div>
            <div className=' d-lg-flex gap-2'>
              <img src={Vector} alt="" />
              <h3 className='fs-5 txt text-light w-75'>100% <span>Payment Secured</span></h3>
            </div>
           </div>
          
            {/* images for links */}
            <div className='d-lg-flex gap-2'>
              <img src={otherImage1} className="w-50"alt="Other Image 1" />
              <img src={otherImage2} className='w-50' alt="Other Image 2" />
            </div>
          </div>

          {/* Contact Information */}
          <div className='container mt-3 txt'>
            <p className='text-light'>Need Help</p>
            <h2 className='text-light fs-6'>+234 907 466 6655</h2>
            <h2 className='text-light fs-6'>help@jazzysburger.com</h2>
          </div>

          {/* Social Media Icons */}
          <div className='container txt mt-5'>
            <h1 className='text-light fs-6'>FOLLOW US</h1>
            <div className='d-flex gap-2 m-auto '>
              
              <img src={facebook} alt="" className='img-fluid social-icon'/>
              <img src={twitter} alt="" className='img-fluid social-icon'/>
              <img src={instagram} alt="" className='img-fluid social-icon'/>
              <img src={youtube} alt="" className='img-fluid social-icon '/>
            </div>
          </div>
        </section>
      </footer>
      <p className='text-center'></p>
    </>
  )
}

export default Footer
