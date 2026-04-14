import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from './actions/weatherAction'


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather())
  }, [])
  return (
    <>

    </>
  )
}

export default App
