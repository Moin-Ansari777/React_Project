import React, { useContext } from 'react'
import {useMyContext } from './MyContext'

const C = () => {
const {setCount}=  useMyContext();
  return (
    <div className='bg-blue-400 p-10'>
    <button
    className='border-2 p-2 bg-blue-400'
     onClick={()=>setCount((prev)=>prev+1)}>Click Me</button>
      C
    </div>
  )
}

export default C
