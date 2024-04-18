import React from 'react'
import HeroImg from '../assets/Main Hero Pic.jpg'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
      <main className='my-3'>
        <img src={HeroImg} alt="hero-image" className='img-fluid w-100 hero-img'/>
      </main>
    </>
  )
}

export default Hero
