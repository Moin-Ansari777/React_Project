import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { changeByName } from '../store/feature/counter/counterSlice';
import User from './component/User';

function App() {
  const dispatch = useDispatch();
  //const name = useSelector(state=>state.Counter)
  //console.log(name)

  return (
    <>

      {/* <Counter/> */}

      {/* <input type="text"
      placeholder='Enter Name'
      onChange={(e)=>{dispatch(changeByName(e.target.value))}} */}
      <User/>
    </>
  )
}

export default App
