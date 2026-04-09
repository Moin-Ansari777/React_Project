import React from 'react'
import { IoDiamondOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFireTruck, MdOutlineSecurity } from "react-icons/md";
const About = () => {
  return (
    <div className='m-auto max-w-6xl p-1'>
      <div className='my-5 border-2 p-1 rounded-2xl border-black'>
        <h1 className=' bg-black text-2xl my-4 text-pink-500 rounded-3xl p-2 font-extrabold pl-4'>Our Vision & Mission</h1>
        <div className='flex flex-col sm:flex-row mx-4'>

          <div className=''>
            <h3 className='text-xl text-pink-500 py-2 font-bold'>Redefining Style Since 2026</h3>

            <p className='text-sm m-2 font-light sm:text-lg'>OK Fashion was founded by <span className='font-bold text-pink-500'>ORHAN</span> with a single goal to provide high quality apparel that blends trends with absolute comfort</p>

            <p className='text-xs font-bold m-2 sm:text-lg'>We believe that every item tells a story from our hand picked fabrics to our rigourous quality check we ensure that every product deleiverd to your doorstep meets the highest standards of the fashion</p>
          </div>

          <div className='flex content-center justify-center'>

            <h1 className='p-5 m-5 text-4xl text-white font-extrabold rounded-2xl bg-pink-500 h-fit'>OK</h1>

          </div>
        </div>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-3'>
        <Card
          icon={<IoDiamondOutline />}
          iconColor='text-blue-500'
          title='Premium Quailty'
          detail='We Sourcd Only The Finest Material for Our clothing line, ensuring durability and style'
          borderColor='border-blue-500' />

        <Card
          icon={<CiDeliveryTruck />}
          iconColor='text-green-500'
          title='Fast Delivery'
          detail='Our Logistic network your Order reach you within 3-5 business days across India' 
          borderColor='border-green-500'/>

        <Card
          icon={<MdOutlineSecurity />}
          iconColor='text-red-500'
          title='Secure Shopping'
          detail='Your Data Security is our Priority' 
          borderColor='border-red-500'
          />
          
      </div>

    </div>
  )
}

export default About

const Card = ({ icon, iconColor, title, detail ,borderColor}) => {
  return (
    <div className={`px-4 border-t-5 ${borderColor} m-2 py-4 gap-2 flex flex-col items-center shadow-2xl rounded-2xl`}>
      <span className={`text-6xl my-5 ${iconColor}`}>{icon}</span>
      <h2 className='font-extrabold text-xl'>{title}</h2>
      <p className='text-center'>{detail}</p>
    </div>
  )
}
