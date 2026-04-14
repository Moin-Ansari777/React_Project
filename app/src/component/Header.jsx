import React, { useState } from 'react'
const Header = () => {
  const [Mobileview, setMobileview] = useState(false);
  return (
    <div>
      <header className="flex justify-between px-3 items-center text-xl text-black/80 m-auto bg-red-300 py-5">
        <h1 className='text-3xl'><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
        <div className='flex gap-2 items-center max-[720px]:hidden'>
          <a href="">Feature</a>
          <a href="">Use Cases</a>
          <a href="">Integration</a>
          <a href="">Portfolio</a>
        </div>
        <button onClick={() => setMobileview(true)} className='min-[720px]:hidden text-2xl'>🛒</button>
      </header>

     
          <div className={`absolute top-0 left-0 text-white w-[20rem]  h-screen text-2xl flex flex-col bg-red-400
            ${Mobileview? 'translate-x-0' : '-translate-x-full'} transition-all duration-300
        `}>
            <button onClick={() => setMobileview(false)} className='absolute top-4 right-4 p-3'>❌</button>
            <a href="" className='p-3 bg-red-300 flex justify-center items-center'>Feature</a>
            <a href="" className='p-3 bg-red-300 flex justify-center items-center'>Use Cases</a>
            <a href="" className='p-3 bg-red-300 flex justify-center items-center'>Integration</a>
            <a href="" className='p-3 bg-red-300 flex justify-center items-center'>Portfolio</a>
          </div>
        

    </div>
  )
}
export default Header
