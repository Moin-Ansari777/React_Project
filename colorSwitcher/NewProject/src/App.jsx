import { useState } from 'react'
import './App.css'
import Timer from './Component/Timer'
import Result from './Component/Result'
import Question from './Component/Question'

function App() {
  const [Isover, setIsover] = useState(false)
  return (
    <>
      <Timer setIsover={setIsover}/>
      {
        Isover ? (<Result />) : (<Question setIsover={setIsover}/>)
      }
    </>
  )
}

export default App
