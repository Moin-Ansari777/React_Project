import React from 'react'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
   <div
      className='h-screen rounded-2xl p-12 flex flex-col bg-cover bg-center text-white shadow-2xl relative overflow-hidden'
      style={{ backgroundImage: `url('https://www.shutterstock.com/image-vector/summer-collection-promotional-banner-summertime-260nw-1445935322.jpg')` }}
    >

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 mt-auto">
        <h1 className='font-extrabold text-6xl tracking-tighter'>Summer Collection 2026</h1>
        <p className='mb-6 text-2xl font-light opacity-90'>Checkout Our New Summer Collection</p>

        <NavLink to={'/products'}>
          <button className='px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300'>
            Shop Now &rarr;
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Hero
