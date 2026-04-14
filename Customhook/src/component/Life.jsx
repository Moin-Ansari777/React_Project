import React, { useEffect, useState } from 'react'

const Life = () => {

    const [name,setName] = useState(localStorage.getItem('name') || '')
    useEffect(()=>{
      console.log('Mount')
        return ()=>{
          console.log('unmount')
            localStorage.clear()
        }
    },[])
  return (
    <div>
      <input type="text"
      value={name}
      placeholder='name'
      onChange={(e)=>{setName(e.target.value); localStorage.setItem('name',e.target.value)}}
      />
    </div>
  )
}

export default Life
