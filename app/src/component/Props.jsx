import React from 'react'

const Props = ({username,role,rating}) => {
  return (
   <div className='w-3xs shadow-2xl rounded-2xl overflow-hidden'>
    <div className='text-center bg-blue-500'><h1 className='text-3xl p-4 font-bold text-white'>Card Template</h1></div>
    <div className='flex flex-col gap-4  mt-4'>
        <div className='text-center'><h1 className='font-bold text-lg'>Username</h1><p className='text-blue-400'>Author Biography</p></div>

        <div className='flex justify-around font-bold text-blue-300'>
            <p>facebook</p>
            <p>Twitter</p>
            <p>XThread</p>
        </div>
        <div className='flex justify-around'>
            <button className='m-1 p-3 bg-blue-300 rounded-3xl'>Subscribe</button>
            <button className='m-1 p-3 bg-blue-300 rounded-3xl'>MemberShip</button>
        </div>
    </div>
   </div>
  )
}

export default Props
