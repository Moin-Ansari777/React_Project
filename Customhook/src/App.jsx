import { useEffect, useState } from 'react';
import './App.css'
import Life from './component/Life';
import User from './component/User';
import Memo from './component/AlphaMemo';
import UseMemo from './component/UseMemo';

function App() {

//   const [data , setData] = useState(0)
//   const [name,setName] = useState('')
// console.log(null===0)
//   useEffect(()=>{
//     console.log('Parent rerender')
//   })
  return (
    <>
    <UseMemo />
      {/* <Memo data={data}/>
      <button
      onClick={()=>setData(data+1)}
      className='p-4 m-1'>
        click me {data}
      </button>

      <input type="text" 
      placeholder='Name'
      value={name}
      onChange={(e)=>setName(e.target.value)} */}
      
    
    </>
  )
}

export default App
