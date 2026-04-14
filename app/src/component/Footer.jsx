import React from 'react'

const Footer = () => {
  return (
   <div className='bg-red-300 py-5'>
        <header className="max-w-240 grid grid-cols-5 text-xl text-black/80 m-auto">

          <h1 className='text-3xl'><span className='font-extrabold text-[tomato]'>B</span>rand</h1>

          <div className='flex flex-col gap-7'>
            <a href="">Feature</a>
            <a href="">Use Cases</a>
            <a href="">Integration</a>
            <a href="">Portfolio</a>
          </div>
          <div className='flex flex-col gap-7'>
            <a href="">Feature</a>
            <a href="">Use Cases</a>
            <a href="">Integration</a>
            <a href="">Portfolio</a>
          </div>
          <div className='flex flex-col gap-7'>
            <a href="">Feature</a>
            <a href="">Use Cases</a>
            <a href="">Integration</a>
            <a href="">Portfolio</a>
          </div>
        </header>
      </div>
  )
}

export default Footer
